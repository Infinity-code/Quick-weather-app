import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Recoilroot } from "./recoilRoot";

const inter = Inter({ subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Quick Weather</title>
      </head>
      <body className={inter.className}>
        <Recoilroot>{children}</Recoilroot>
      </body>
    </html>
  );
}
