import React from "react";
import Image, { StaticImageData } from "next/image";
import QuoteLeftSvg from "@/components/svgs/quoteLeft";

interface Iprops {
  title: string;
  image: StaticImageData;
  fullName: string;
  jobTitle: string;
  index: number;
}

export default function SingleTestimonial({
  fullName,
  image,
  jobTitle,
  title,
  index,
}: Iprops) {
  return (
    <div
      id="clientComment"
      data-id={index}
      className="snap-center flex flex-col gap-2 min-w-full "
    >
      <div className="relative p-6">
        <QuoteLeftSvg className="absolute -top-0 left-0" />
        <span className="transform rotate-180  flex w-8 h-5 absolute bottom-0 right-0">
          <QuoteLeftSvg />
        </span>
        <h1 className="text-center text-primaryBlue text-md font-medium">
          {title}
        </h1>
      </div>
      <Image
        src={image}
        alt={"client testimonial"}
        className={"rounded-full object-scale-down self-center"}
      />
      <div className="text-center">
        <h2 className="text-primaryBlue text-sm">{fullName}</h2>
        <h3 className="text-xs font-bold text-gray-400">{jobTitle}</h3>
      </div>
    </div>
  );
}
