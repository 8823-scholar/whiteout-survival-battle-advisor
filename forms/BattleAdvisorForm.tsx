import { FC } from "react";

import { getFormProps, getInputProps } from "@conform-to/react";
import { z } from "zod";

import { NumberInput } from "@/components/form/NumberInput";
import { useBattleAdvisorForm } from "@/hooks/useBattleAdvisorForm";
import { twClassNames } from "@/lib/tailwindcss";

export const battleAdvisorSchema = z.object({
  attacker: z.object({
    // name: z.string(),
    // number_of_units: z.number(),
    infantries_count: z.number(),
    // infantries_level: z.number(),
    // lancers_count: z.number(),
    // lancers_level: z.number(),
    // marksmen_count: z.number(),
    // marksmen_level: z.number(),
    // infantry_attack_bonus: z.number(),
    // infantry_defense_bonus: z.number(),
    // infantry_lethality_bonus: z.number(),
    // infantry_health_bonus: z.number(),
    // lancer_attack_bonus: z.number(),
    // lancer_defense_bonus: z.number(),
    // lancer_lethality_bonus: z.number(),
    // lancer_health_bonus: z.number(),
    // marksman_attack_bonus: z.number(),
    // marksman_defense_bonus: z.number(),
    // marksman_lethality_bonus: z.number(),
    // marksman_health_bonus: z.number(),
  }),
  // defender: z.object({
  //   name: z.string(),
  //   number_of_units: z.number(),
  //   infantries_count: z.number(),
  //   infantries_level: z.number(),
  //   lancers_count: z.number(),
  //   lancers_level: z.number(),
  //   marksmen_count: z.number(),
  //   marksmen_level: z.number(),
  //   infantry_attack_bonus: z.number(),
  //   infantry_defense_bonus: z.number(),
  //   infantry_lethality_bonus: z.number(),
  //   infantry_health_bonus: z.number(),
  //   lancer_attack_bonus: z.number(),
  //   lancer_defense_bonus: z.number(),
  //   lancer_lethality_bonus: z.number(),
  //   lancer_health_bonus: z.number(),
  //   marksman_attack_bonus: z.number(),
  //   marksman_defense_bonus: z.number(),
  //   marksman_lethality_bonus: z.number(),
  //   marksman_health_bonus: z.number(),
  // }),
});

export type BattlrAdvisorData = z.infer<typeof battleAdvisorSchema>;

type UseBattleAdvisorFormType = ReturnType<typeof useBattleAdvisorForm>;

type Props = UseBattleAdvisorFormType & {
  className?: string;
};

export const BattleAdvisorForm: FC<Props> = ({
  form,
  fields,
  action,
  className,
}) => {
  const attacker = fields.attacker.getFieldset();

  return (
    <div className={twClassNames(className)}>
      <form {...getFormProps(form)} action={action}>
        <div className="rounded-md border">
          <h3 className="border-b p-3 text-center font-bold">兵士総力比較</h3>
          <div>
            <NumberInput
              {...getInputProps(attacker.infantries_count, { type: 'number' })}
              key="attacker.infantries_count"
            />
          </div>
        </div>
        <div>
          <button type="submit">検証する</button>
        </div>
      </form>
    </div>
  );
};
