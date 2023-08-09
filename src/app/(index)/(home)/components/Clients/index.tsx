import React from "react";
import clientsSvg from "@/public/svgs/clients-lg.svg";
import Image from "next/image";

export default function Clients() {
  return (
    <section className="px-4 py-12 container mx-auto space-y-6">
      <h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center">
        Our Clients
      </h2>
      <div className="w-full text-center">
        <Image src={clientsSvg} alt={"clients"} className="mx-auto" />
      </div>
    </section>
  );
}
