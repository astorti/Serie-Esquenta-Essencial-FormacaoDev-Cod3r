import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from 'next/font/google'

const font = Montserrat({
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "tailwind-essencial",
  description: "Série Esquenta Essencial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
