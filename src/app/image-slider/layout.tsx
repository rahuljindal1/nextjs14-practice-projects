import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Image Slider",
  description: "Image Slider"
};

export default function Layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
