"use client";
import { BattleAdvisorForm } from "@/forms/BattleAdvisorForm";
import { useBattleAdvisorForm } from "@/hooks/useBattleAdvisorForm";

export const BattleAdvisorPage = () => {
  const { form, fields } = useBattleAdvisorForm();

  return (
    <div>
      <h1 className="p-4 text-center text-lg font-bold">
        ホワサババトルシミュレータ
      </h1>
      <BattleAdvisorForm
        form={form}
        fields={fields}
        className="p-4"
      />
    </div>
  );
};
