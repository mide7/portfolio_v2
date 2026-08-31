import React from "react";
import MemojiSvg from "@/components/svgs/memoji";
import SocialLinkAndIcon from "@/components/SocialLinkAndIcon";
import { urls } from "@/lib/urls";

export default function Hero() {
	return (
		<div className="min-h-screen w-full flex flex-col justify-center px-4 py-12 container mx-auto">
			<h1 className="text-primaryBlue font-medium text-[min(7vw,52px)]  text-center">
				Hi, I&apos;m Ayomide. Nice to meet you 👋🏼
			</h1>
			<p className="text-center px-6 mt-3 text-[min(4vw,24px)]">
				I build things for the web that are solid on the inside and
				simple to use on the outside.
			</p>

			<div className="relative mt-12 w-[150px] h-[150px] rounded-full bg-primaryBlue mx-auto">
				<span className="absolute -top-10 md:top-0 transform w-full">
					<MemojiSvg />
				</span>
			</div>

			<h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center mt-12">
				Software Engineer
			</h2>
			<p className="text-center px-6 mt-3 text-[min(4vw,20px)] text-gray-400 font-normal">
				I like building things that work well and keep working.
				Clean APIs, solid data flows, interfaces people don&apos;t
				have to think about. I care more about shipping something
				reliable than something flashy, and I&apos;m always looking
				for the next hard problem to dig into.
			</p>

			<div className="flex justify-center items-center gap-6 mt-6">
				<SocialLinkAndIcon
					href={urls.external.me.twitter}
					iconClass="ri-twitter-fill"
					linkStyle="text-2xl"
				/>
				<SocialLinkAndIcon
					href={urls.external.me.linkedin}
					iconClass="ri-linkedin-fill"
					linkStyle="text-2xl"
				/>
				<SocialLinkAndIcon
					href={urls.external.me.github}
					iconClass="ri-github-fill"
					linkStyle="text-2xl"
				/>
			</div>
		</div>
	);
}
