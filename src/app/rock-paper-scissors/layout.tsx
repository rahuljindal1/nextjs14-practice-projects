import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rock Paper Scissors Game",
  description: "Fun and Interactive Rock Paper Scissors Game"
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
