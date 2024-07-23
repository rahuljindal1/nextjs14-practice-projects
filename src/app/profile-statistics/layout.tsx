import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Profile Statistics",
  description: "Profile Statistics"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
