import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Heart Trail Animation",
  description: "Heart Trail Animation"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
