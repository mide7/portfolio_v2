import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import React from "react";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}
