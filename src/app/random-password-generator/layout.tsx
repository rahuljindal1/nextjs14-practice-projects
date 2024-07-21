import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Password Generator",
  description: "Random Password Generator"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
