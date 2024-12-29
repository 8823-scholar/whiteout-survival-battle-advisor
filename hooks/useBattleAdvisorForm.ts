"use client";
import { useActionState } from "react";

import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";

import { battleAdviseAction } from "@/actions/battleAdviseAction";
import { battleAdvisorSchema } from "@/forms/BattleAdvisorForm";

export const useBattleAdvisorForm = () => {
  const [lastResult, action] = useActionState(battleAdviseAction, undefined);
  const [form, fields] = useForm({
    lastResult,
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: battleAdvisorSchema });
    },
    shouldValidate: "onBlur",
  });

  return {
    form,
    fields,
    action,
  };
};

