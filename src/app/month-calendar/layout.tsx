import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Month Calender",
  description: "Month Calender"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <>{children}</>;
}
