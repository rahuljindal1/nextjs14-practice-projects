import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tip Calculator",
  description: "Easy and quick tip calculator"
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ boxSizing: "border-box" }}>{children}</div>;
}
