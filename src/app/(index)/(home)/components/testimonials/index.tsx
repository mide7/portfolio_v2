"use client";

import React, { useEffect, useRef, useState } from "react";
import { TestimonialsData } from "@/lib/constants";
import SingleTestimonial from "./box";
import CircleFilledSvg from "@/components/svgs/circleFill";
import CircleOutlinedSvg from "@/components/svgs/circleOutline";

export default function Testimonials() {
	let initial = true;
	const [currentComment, setCurrentComment] = useState(0);

	const clientCommentContainerRef = useRef<HTMLDivElement>(null);

	function handleComment(i: number, currentComment: number) {
		const clientContainerWidth =
			clientCommentContainerRef.current?.clientWidth || 0;
		if (i < currentComment) {
			prevComment(currentComment - i, clientContainerWidth);
		} else if (i > currentComment) {
			nextComment(i - currentComment, clientContainerWidth);
		}
	}

	function prevComment(scrollTimes: number, clientContainerWidth: number) {
		const screenWidth = -1 * clientContainerWidth * scrollTimes;
		clientCommentContainerRef.current?.scrollBy(screenWidth, 0);
	}

	function nextComment(scrollTimes: number, clientContainerWidth: number) {
		const screenWidth = clientContainerWidth * scrollTimes;
		clientCommentContainerRef.current?.scrollBy(screenWidth, 0);
	}

	useEffect(() => {
		function callback(entries: any) {
			if (!initial) {
				entries.forEach(
					(entry: {
						isIntersecting: any;
						target: { dataset: { id: string | number } };
					}) => {
						if (entry.isIntersecting) {
							setCurrentComment(+entry.target.dataset.id);
						}
					}
				);
			} else {
				initial = false;
			}
		}

		let options = {
			root: clientCommentContainerRef.current,
			rootMargin: "0px",
			threshold: [0.9],
		};

		const observer = new IntersectionObserver(callback, options);

		const targets = document.querySelectorAll("#clientComment");

		targets.forEach((target) => {
			observer.observe(target);
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	useEffect(() => {
		clientCommentContainerRef.current &&
			clientCommentContainerRef.current.scrollBy(-9999, 0);
	}, []);

	return (
		<section className="bg-primaryGray">
			<div className="px-4 py-12 container mx-auto space-y-6">
				<div className="space-y-2">
					<h2 className="text-primaryBlue font-medium text-[min(6vw,42px)] text-center">
						Our Clients Speak
					</h2>
					<h3 className="text-primaryBlue font-light text-md text-center">
						We have been working with clients around the world
					</h3>
				</div>
				<div className="mx-auto w-full lg:max-w-xl space-y-3 py-3 no-scroll-bar ">
					<div
						ref={clientCommentContainerRef}
						className="snap-x  scroll-smooth flex w-full gap-x-24 overflow-x-auto  no-scroll-bar"
					>
						{TestimonialsData.map((x, i) => (
							<SingleTestimonial
								key={i}
								fullName={x.fullName}
								image={x.image}
								jobTitle={x.jobTitle}
								title={x.title}
								index={i}
							/>
						))}
					</div>
					<span className="flex justify-center gap-1">
						{TestimonialsData.map((_x, i) => (
							<button
								key={i}
								type="button"
								onClick={() => handleComment(i, currentComment)}
								className="flex items-center transition-all duration-300"
							>
								{i === currentComment ? (
									<CircleOutlinedSvg key={i} />
								) : (
									<CircleFilledSvg key={i} />
								)}
							</button>
						))}
					</span>
				</div>
			</div>
		</section>
	);
}
