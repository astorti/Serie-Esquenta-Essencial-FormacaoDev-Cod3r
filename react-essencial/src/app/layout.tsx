import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "React Essencial",
  description: "Série Esquenta Essencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
