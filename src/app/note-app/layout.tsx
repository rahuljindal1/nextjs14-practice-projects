import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Note App",
  description: "Note App"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <>{children}</>;
}
