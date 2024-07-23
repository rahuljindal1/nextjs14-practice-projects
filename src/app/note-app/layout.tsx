import { Metadata } from "next";

export const metaData: Metadata = {
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
