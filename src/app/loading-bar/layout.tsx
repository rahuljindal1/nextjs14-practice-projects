import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loading Bar",
  description: "Loading Bar"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <>{children}</>;
}
