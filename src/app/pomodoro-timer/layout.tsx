import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "Efficient and intutitive pomodoro timer",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div style={{ boxSizing: "border-box" }}>{children}</div>;
}
