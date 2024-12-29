"use server";

import { parseWithZod } from "@conform-to/zod";

import { battleAdvisorSchema } from "@/forms/BattleAdvisorForm";

export const battleAdviseAction = async (_prevState: unknown, data: FormData) => {
  console.log("battleAdviseAction", data);
  const submission = parseWithZod(data, { schema: battleAdvisorSchema });
  if (submission.status !== "success") {
    return submission.reply();
  }

  return submission.reply();
};
