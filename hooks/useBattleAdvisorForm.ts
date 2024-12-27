"use client";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { z } from "zod";

export const battleAdvisorSchema = z.object({
  attacker: z.object({
    name: z.string(),
    number_of_units: z.number(),
    infantries_count: z.number(),
    infantries_level: z.number(),
    lancers_count: z.number(),
    lancers_level: z.number(),
    marksmen_count: z.number(),
    marksmen_level: z.number(),
    infantry_attack_bonus: z.number(),
    infantry_defense_bonus: z.number(),
    infantry_lethality_bonus: z.number(),
    infantry_health_bonus: z.number(),
    lancer_attack_bonus: z.number(),
    lancer_defense_bonus: z.number(),
    lancer_lethality_bonus: z.number(),
    lancer_health_bonus: z.number(),
    marksman_attack_bonus: z.number(),
    marksman_defense_bonus: z.number(),
    marksman_lethality_bonus: z.number(),
    marksman_health_bonus: z.number(),
  }),
  defender: z.object({
    name: z.string(),
    number_of_units: z.number(),
    infantries_count: z.number(),
    infantries_level: z.number(),
    lancers_count: z.number(),
    lancers_level: z.number(),
    marksmen_count: z.number(),
    marksmen_level: z.number(),
    infantry_attack_bonus: z.number(),
    infantry_defense_bonus: z.number(),
    infantry_lethality_bonus: z.number(),
    infantry_health_bonus: z.number(),
    lancer_attack_bonus: z.number(),
    lancer_defense_bonus: z.number(),
    lancer_lethality_bonus: z.number(),
    lancer_health_bonus: z.number(),
    marksman_attack_bonus: z.number(),
    marksman_defense_bonus: z.number(),
    marksman_lethality_bonus: z.number(),
    marksman_health_bonus: z.number(),
  }),
});

export type BattlrAdvisorData = z.infer<typeof battleAdvisorSchema>;

export const useBattleAdvisorForm = () => {
  const [form, fields] = useForm<BattlrAdvisorData>({
    onValidate: ({ formData }) => {
      return parseWithZod(formData, { schema: battleAdvisorSchema });
    },
    shouldValidate: "onBlur",
  });

  return {
    form,
    fields,
  };
};

