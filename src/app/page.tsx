"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useTRPC } from "@/trpc/client";
import { toast } from "sonner";
import { useState } from "react";

const Page = () => {
  const [value, setValue] = useState("");
  const trpc = useTRPC();

  const { data: messages } = useQuery(trpc.message.getMany.queryOptions());

  const createdMessage = useMutation(
    trpc.message.create.mutationOptions({
      onSuccess: () => {
        toast.success("Message created and Inngest job invoked!");
      },
    })
  );

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <Input value={value} onChange={(e) => setValue(e.target.value)} />
      <Button
        disabled={createdMessage.isPending}
        onClick={() => createdMessage.mutate({ value: value })}
      >
        Invoke Background job
      </Button>
      {JSON.stringify(messages)}
    </div>
  );
};

export default Page;
