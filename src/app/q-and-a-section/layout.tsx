import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Q and A Section",
  description: "Q and A Section"
};

export default function layout({
  children
}: {
  children: Readonly<React.ReactNode>;
}) {
  return <div>{children}</div>;
}
