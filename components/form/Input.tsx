import { FC, InputHTMLAttributes } from "react";

import { twClassNames } from "@/lib/tailwindcss";

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = ({
  className,
  ...props
}) => {
  return (
    <input
      {...props}
      className={twClassNames(
        "form-input rounded-md border border-gray-300",
        "focus:border-green-300 focus:ring focus:ring-green-200/50",
        className,
      )}
    />
  );
};
