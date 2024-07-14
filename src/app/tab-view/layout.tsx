import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tab View",
  description: "Smooth and easy to implement tab view"
};

export default function Layout({ children }: { children: React.ReactElement }) {
  return <>{children}</>;
}
