import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile Card",
  description: "Profile Card"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
