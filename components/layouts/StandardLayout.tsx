import { FC, ReactNode } from "react";

import { twClassNames } from "@/lib/tailwindcss";

type Props = {
  children: ReactNode;
  className?: string;
};

export const StandardLayout: FC<Props> = ({
  children,
  className,
}) => {
  return (
    <div
      className={twClassNames(
        "mx-auto min-h-screen w-full max-w-lg",
        "lg:border-x",
        className,
      )}
    >
      {children}
    </div>
  );
};
