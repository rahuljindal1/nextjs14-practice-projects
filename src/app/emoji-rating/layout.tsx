import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Emoji Rating",
  description: "Emoji Rating"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <>{children}</>;
}
