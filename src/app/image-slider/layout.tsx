import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Image Slider",
  description: "Image Slider"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <>{children}</>;
}
