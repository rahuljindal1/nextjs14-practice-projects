import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dark Mode Toggle",
  description: "Dark Mode Toggle"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
