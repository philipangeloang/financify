import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Financify",
  description: "Manage your finances with finesse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
