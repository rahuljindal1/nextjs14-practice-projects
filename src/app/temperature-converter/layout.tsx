import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Temperature Converter",
  description: "Convert the temperature to various different forms"
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
