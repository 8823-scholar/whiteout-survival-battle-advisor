import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ホワサババトルシミュレータ",
  description: "ホワサバの遠征バトルをシミュレーションするツールです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link rel="icon" href="https://whiteoutsurvival.centurygames.com/favicon.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
