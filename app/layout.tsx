import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const font = Chakra_Petch({ subsets: ["latin"], weight: "400"});

export const metadata: Metadata = {
  title: "ACM | Home",
  description: "ACM BIT Mesra's official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("overflow-x-hidden scroll-smooth antialiased uppercase", font.className)}>{children}</body>
    </html>
  );
}
