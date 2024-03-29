import Image from "next/image";
import React from "react";
import DotCircle from "@/public/images/dotcirclelabs.webp";
import Ribbon from "@/public/images/ribbonprotocol.webp";
import Daniola from "@/public/images/daniola.webp";
import CartAll from "@/public/images/cartall.webp";
import Link from "next/link";
import { urls } from "@/lib/urls";

const recent_works = [
	{
		title: "DotCircleLabs",
		summary: "Web App",
		href: urls.external.dotcirclelabs,
		image_src: DotCircle,
		alt: "DotCircleLabs",
		background_color: "#aad3cb",
	},
	// {
	// 	title: "Cart All",
	// 	summary: "Web App",
	// 	href: urls.external.cartall,
	// 	image_src: CartAll,
	// 	alt: "DotCircleLabs",
	// 	background_color: "#A0DCFF",
	// },
	{
		title: "Daniola",
		summary: "Web App",
		href: urls.external.daniola,
		image_src: Daniola,
		alt: "Daniola",
		background_color: "#FDD9D9",
	},
	{
		title: "Ribbon Protocol",
		summary: "Web App",
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
					Some of my recent work
				</h2>

				<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
					{recent_works.map((x, i) => (
						<div key={i}>
							<Link href={x.href} target="_blank">
								<div
									style={{
										backgroundColor: x.background_color,
									}}
									className="p-4 rounded-lg transition-all duration-300"
								>
									<Image
										src={x.image_src}
										alt={x.alt}
										className="rounded-lg"
									/>
								</div>
							</Link>
							<h4 className="font-medium mt-2 text-[min(4vw,24px)]">
								{x.title}
							</h4>
							<h5 className="font-normal text-[min(3vw,16px)]">
								{x.summary}
							</h5>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
