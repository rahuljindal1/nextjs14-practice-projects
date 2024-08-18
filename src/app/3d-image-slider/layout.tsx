import { Metadata } from "next";

export const metadata: Metadata = {
  title: "3D Image Slider",
  description: "3D Image Slider"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <>{children}</>;
}
