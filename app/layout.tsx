import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Society of Petroleum Engineers",
  description:
    "Society of Petroleum Engineers - University of Batna 2 Student Chapter Everything about Oil&Gas and technology is here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="page-background bg-black"></div>
        <div className="page-background-1 min-h-[80vh]"></div>
        {children}
      </body>
    </html>
  );
}
