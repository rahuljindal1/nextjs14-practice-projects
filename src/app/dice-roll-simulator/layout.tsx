import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dice Roll Simulator",
  description: "Fun and interesting dice rolling game."
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
