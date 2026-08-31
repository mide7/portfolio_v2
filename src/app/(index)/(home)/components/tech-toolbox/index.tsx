import React from "react";
import {
	SiReact,
	SiNextdotjs,
	SiNodedotjs,
	SiTypescript,
	SiGo,
	SiPostgresql,
	SiMongodb,
	SiRedis,
} from "react-icons/si";

const tech_stack = [
	{ label: "React", Icon: SiReact },
	{ label: "Next.js", Icon: SiNextdotjs },
	{ label: "Node.js", Icon: SiNodedotjs },
	{ label: "TypeScript", Icon: SiTypescript },
	{ label: "Go", Icon: SiGo },
	{ label: "PostgreSQL", Icon: SiPostgresql },
	{ label: "MongoDB", Icon: SiMongodb },
	{ label: "Redis", Icon: SiRedis },
];

export default function TechToolbox() {
	return (
		<section>
			<div className="px-4 py-16 container mx-auto">
				<h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center">
					Tech Toolbox
				</h2>
				<p className="text-center px-6 mt-3 text-gray-400 max-w-md mx-auto">
					Technologies I use to build reliable, full-stack products.
				</p>

				<div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 mt-8 max-w-2xl mx-auto">
					{tech_stack.map(({ label, Icon }) => (
						<div
							key={label}
							className="group border border-gray-300 rounded-md px-3 py-6 flex flex-col items-center gap-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primaryBlue"
						>
							<Icon
								className="text-gray-400 group-hover:text-primaryBlue group-hover:scale-110 transition-all duration-300"
								size={32}
							/>
							<span className="text-sm text-gray-400 group-hover:text-primaryBlue transition-colors duration-300">
								{label}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
