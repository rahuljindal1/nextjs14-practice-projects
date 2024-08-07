import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback UI",
  description: "Feedback UI"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
