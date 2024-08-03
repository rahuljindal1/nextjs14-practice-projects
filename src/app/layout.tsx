import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Projects",
  description: "Exciting and cool new mini Next.js projects"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>Back</header>
      <body className={inter.className} style={{ padding: 0, margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
