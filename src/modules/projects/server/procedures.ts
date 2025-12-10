import { z } from "zod";
import { generateSlug } from "random-word-slugs";

import { inngest } from "@/inngest/client";
import prisma from "@/lib/db";
import { baseProcedure, createTRPCRouter } from "@/trpc/init";

const projectsRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    const projects = await prisma.project.findMany({
      orderBy: { updateAt: "desc" },
      //  include: { fragment: true },
    });

    return projects;
  }),

  // when we click enter the prompt, the project and the messages are created as the same time and the code-agent/run inngest function is triggered
  create: baseProcedure
    .input(
      z.object({
        value: z
          .string()
          .min(1, { message: "Prompt cannot be empty" })
          .max(10000, {
            message: "Prompt cannot be longer than 10000 characters",
          }),
      })
    )
    .mutation(async ({ input }) => {
      const project = await prisma.project.create({
        data: {
          name: generateSlug(2, {
            format: "kebab",
          }),
          messages: {
            create: {
              content: input.value,
              role: "USER",
              type: "RESULT",
            },
          },
        },
      });

      await inngest.send({
        name: "code-agent/run",
        data: {
          value: input.value,
          projectId: project.id,
        },
      });
      return project;
    }),
});

export default projectsRouter;
