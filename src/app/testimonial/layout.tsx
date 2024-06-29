import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonial Slider",
  description: "Find dynamic and beautiful testimonial slider here!!!",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
