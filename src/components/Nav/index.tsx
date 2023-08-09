import Link from "next/link";
import React from "react";
import SayHelloBtn from "@/components/Buttons/SayHello";
import LogoSvg from "@/components/svgs/logo";

export default function Nav() {
  return (
    <div className="sticky top-0 border-b border-primaryGray bg-white z-10">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <Link href={"/"} className="active:animate-ping">
          <LogoSvg />
        </Link>

        <SayHelloBtn />
      </div>
    </div>
  );
}
