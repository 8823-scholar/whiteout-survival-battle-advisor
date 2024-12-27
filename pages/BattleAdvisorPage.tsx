"use client";
import { BattleAdvisorForm } from "@/forms/BattleAdvisorForm";
import { useBattleAdvisorForm } from "@/hooks/useBattleAdvisorForm";

export const BattleAdvisorPage = () => {
  const { form, fields } = useBattleAdvisorForm();

  return (
    <div>
      <h1 className="text-lg font-bold">
        ホワサババトルシミュレータ
      </h1>
      <BattleAdvisorForm
        form={form}
        fields={fields}
      />
    </div>
  );
};
