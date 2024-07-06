import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Age Calculator",
  description: "Easy and quick age calculator",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ boxSizing: "border-box" }}>{children}</div>;
}
