import { FC } from "react";

import { Input, InputProps } from "@/components/form/Input";

type Props = InputProps;

export const NumberInput: FC<Props> = (props) => {
  return (
    <Input
      {...props}
      type="number"
    />
  );
};
