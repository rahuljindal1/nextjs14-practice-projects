import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Real Time Character Count",
  description: "Real Time Character Count"
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
