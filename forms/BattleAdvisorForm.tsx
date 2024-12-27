"use client";
import { FC } from "react";

import { getFormProps } from "@conform-to/react";

import { useBattleAdvisorForm } from "@/hooks/useBattleAdvisorForm";
import { twClassNames } from "@/lib/tailwindcss";

type UseBattleAdvisorFormType = ReturnType<typeof useBattleAdvisorForm>;

type Props = {
  form: UseBattleAdvisorFormType["form"];
  fields: UseBattleAdvisorFormType["fields"];
  className?: string;
};

export const BattleAdvisorForm: FC<Props> = ({
  form,
  className,
}) => {
  return (
    <div className={twClassNames(className)}>
      <form {...getFormProps(form)}>
        <div>
          <h3 className="font-bold">兵士総力比較</h3>
          <div>
          </div>
        </div>
      </form>
    </div>
  );
};
