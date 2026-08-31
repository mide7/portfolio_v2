import Image from "next/image";
import React from "react";
import DotCircle from "@/public/images/dotcirclelabs.webp";
import Ribbon from "@/public/images/ribbonprotocol.webp";
import Daniola from "@/public/images/daniola.webp";
// import CartAll from "@/public/images/cartall.webp";
import MyGigSpot from "@/public/images/mygigspot.webp";
import Dancity from "@/public/images/dancity.webp";
import PowerDeals from "@/public/images/powerdeals.webp";
import Link from "next/link";
import { urls } from "@/lib/urls";

const recent_works = [
	{
		title: "Dancity",
		tags: ["React", "Next.js"],
		href: urls.external.dancity,
		image_src: Dancity,
		alt: "Dancity",
		background_color: "#E8F5FF",
	},
	{
		title: "PowerDeals",
		tags: ["React", "TypeScript"],
		href: urls.external.powerdeals,
		image_src: PowerDeals,
		alt: "PowerDeals",
		background_color: "#F6D1C1",
	},
	{
		title: "MyGigSpot",
		tags: ["React", "Next.js", "Node.js", "TypeScript"],
		href: urls.external.mygigspot,
		image_src: MyGigSpot,
		alt: "MyGigSpot",
		background_color: "#5B016741",
	},
	{
		title: "DotCircleLabs",
		tags: ["React", "Next.js", "Node.js", "TypeScript"],
		href: urls.external.dotcirclelabs,
		image_src: DotCircle,
		alt: "DotCircleLabs",
		background_color: "#aad3cb",
	},
	// {
	// 	title: "Cart All",
	// 	href: urls.external.cartall,
	// 	image_src: CartAll,
	// 	alt: "DotCircleLabs",
	// 	background_color: "#A0DCFF",
	// },
	{
		title: "Daniola",
		tags: ["React", "Node.js"],
		href: urls.external.daniola,
		image_src: Daniola,
		alt: "Daniola",
		background_color: "#FDD9D9",
	},
	{
		title: "Ribbon Protocol",
		tags: ["React", "Next.js", "Node.js"],
		href: urls.external.ribbonprotocol,
		image_src: Ribbon,
		alt: "Ribbon protocol",
		background_color: "#FDD9D9",
	},
];

export default function RecentWorks() {
	return (
		<section className="bg-primaryGray">
			<div className="px-4 py-12 container mx-auto ">
				<h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center">
					Featured Projects
				</h2>
				<p className="text-center px-6 mt-3 text-gray-400 max-w-md mx-auto">
					A selection of things I've built.
				</p>

				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
					{recent_works.map((x, i) => (
						<div key={i}>
							<Link
								href={x.href}
								target="_blank"
								className={
									"[&>div>img]:hover:scale-[1.1] lg:[&>div>img]:hover:scale-[1.12] [&>div]:hover:!bg-primaryGray"
								}
							>
								<div
									style={{
										backgroundColor: x.background_color,
									}}
									className="p-4 rounded-lg transition-all duration-300"
								>
									<Image
										src={x.image_src}
										alt={x.alt}
										className="rounded-lg transition-all duration-500"
									/>
								</div>
							</Link>
							<h4 className="font-medium mt-2 text-[min(4vw,24px)]">
								{x.title}
							</h4>
							<div className="flex flex-wrap gap-2 mt-2">
								{x.tags.map((tag) => (
									<span
										key={tag}
										className="text-xs text-primaryBlue border border-primaryBlue rounded-full px-2 py-0.5"
									>
										{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
