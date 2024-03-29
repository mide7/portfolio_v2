"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import { SendMessageSchema, sendMessageSchema } from "@/schemas";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
	} = useForm<SendMessageSchema>({
		mode: "onChange",
		resolver: zodResolver(sendMessageSchema),
	});

	const onSubmit = handleSubmit(async (data) => {
		try {
			const res = await fetch("/api/contacts", {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					"Content-Type": "application/json",
				},
			});
			const dataResponse = await res.json();
			if (!res.ok) {
				throw new Error(dataResponse.message);
			}
			toast.success(dataResponse.message);
			reset();
		} catch (error: any) {
			toast.error(error.message);
		}
	});

	return (
		<div onSubmit={onSubmit} className="space-y-3 sm:space-y-6 h-full">
			<h1 className="text-primaryBlue font-medium text-[min(7vw,42px)]">
				Drop me a message
			</h1>
			<p className="text-gray-400 text-sm">
				Am always looking for a next great project
			</p>

			<form className="flex flex-col gap-4 w-full">
				<div>
					<input
						className={clsx(
							"h-14 border rounded-md  px-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.email?.message?.toString()
								? "border-red-500"
								: ""
						)}
						placeholder="Your full name"
						{...register("full_name")}
					/>
					<small className="text-red-500 ml-1">
						{errors.full_name?.message?.toString()}
					</small>
				</div>

				<div className="w-full">
					<input
						type="email"
						className={clsx(
							"h-14 border rounded-md px-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.email?.message?.toString()
								? "border-red-500"
								: ""
						)}
						placeholder="Your email"
						{...register("email")}
					/>
					<small className="text-red-500 ml-1">
						{errors.email?.message?.toString()}
					</small>
				</div>

				<div>
					<textarea
						rows={5}
						className={clsx(
							"border rounded-md p-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.message?.message?.toString()
								? "border-red-500"
								: ""
						)}
						placeholder="Your message"
						{...register("message")}
					/>
					<small className="text-red-500 ml-1">
						{errors.message?.message?.toString()}
					</small>
				</div>

				<button
					disabled={isSubmitting}
					type="submit"
					className={clsx(
						"place-self-end bg-primaryBlue rounded-full h-14 flex items-center justify-center  font-semibold text-white border-2 border-primaryBlue",
						"transition-all duration-500",
						"hover:text-primaryBlue hover:bg-white active:motion-safe:animate-ping",
						"disabled:cursor-not-allowed disabled:bg-primaryBlue/50 disabled:text-white/70 disabled:border-primaryBlue/20",
						"md:max-w-[160px] w-full"
					)}
				>
					{isSubmitting ? (
						<>
							<ImSpinner2 className="animate-spin mr-2" />
							<span>Sending...</span>
						</>
					) : (
						"Send"
					)}
				</button>
			</form>
		</div>
	);
}
