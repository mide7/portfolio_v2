import React from "react";

const work_history = [
	{
		years: "2024 - Present",
		title: "Software Developer",
		company: "Itex Integrated Services",
	},
	{
		years: "2022 - 2024",
		title: "Full Stack Developer",
		company: "DotCircleLabs",
	},
	{
		years: "2022 - 2023",
		title: "Full Stack Developer",
		company: "Ninth Binary",
	},
	{
		years: "2021 - 2022",
		title: "Frontend Developer",
		company: "Ribbon Blockchain",
	},
];

export default function WorkHistory() {
	return (
		<section className="bg-primaryGray">
			<div className="px-4 py-16 container mx-auto">
				<h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center">
					Work History
				</h2>

				<div className="mt-10 max-w-2xl mx-auto">
					{work_history.map((job, i) => (
						<div
							key={i}
							className="relative pl-8 pb-8 last:pb-0 border-l-2 border-gray-300 last:border-transparent group"
						>
							<span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primaryBlue ring-4 ring-primaryGray group-hover:scale-125 transition-transform duration-300" />
							<div className="bg-white border border-gray-300 rounded-md px-4 py-4 sm:flex sm:items-center sm:gap-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primaryBlue">
								<span className="inline-block bg-primaryBlue text-white text-sm font-medium rounded-full px-3 py-1 sm:shrink-0">
									{job.years}
								</span>
								<div className="mt-2 sm:mt-0">
									<h3 className="font-semibold uppercase text-sm tracking-wide">
										{job.title}
									</h3>
									<p className="text-gray-400 text-sm">
										{job.company}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
