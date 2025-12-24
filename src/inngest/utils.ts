import { Sandbox } from "@e2b/code-interpreter";
import { AgentResult, TextMessage, type Message } from "@inngest/agent-kit";

export async function getSandbox(sandboxId: string): Promise<Sandbox | null> {
  const sandbox = await Sandbox.connect(sandboxId);
  return sandbox;
}

export function lastAssistantTextMessageContent(res: AgentResult) {
  const lastAssistantTextMessageIndex = res.output.findLastIndex(
    (msg) => msg.role === "assistant"
  );
  const message = res.output[lastAssistantTextMessageIndex] as
    | TextMessage
    | undefined;

  if (message?.content) {
    if (typeof message.content === "string") {
      return message.content;
    } else {
      return message.content.map((c) => c.text).join("");
    }
  } else {
    return undefined;
  }
}

export const parseAgentOutput = (value: Message[]) => {
  const output = value[0];
  if (output.type !== "text") {
    return "Fragment";
  }
  if (Array.isArray(output.content)) {
    return output.content.map((txt) => txt).join("");
  }
  return output.content;
};
