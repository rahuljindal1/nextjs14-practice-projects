import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Video Tailer",
  description: "Get easy and smooth way to see your favorite movie trailer"
};

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
