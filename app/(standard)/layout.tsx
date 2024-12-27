import { ReactNode } from "react";

import { StandardLayout } from "@/components/layouts/StandardLayout";

export default function StandardRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <StandardLayout>
      {children}
    </StandardLayout>
  );
};
