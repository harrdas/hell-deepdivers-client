import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hell Deep Divers",
  description: "Introducing Ranking of best stratagems in helldivers2",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center my-3">
          <Image src="/logo.png" alt="logo" width={300} height={201} />
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
