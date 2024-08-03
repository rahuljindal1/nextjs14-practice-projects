import { Metadata } from "next";

export const metaData: Metadata = {
    title: "Loading Bar",
    description: "Loading Bar"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
