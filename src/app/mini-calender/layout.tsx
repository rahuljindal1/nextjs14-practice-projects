import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Mini Calender",
  description: "Mini Calender"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
