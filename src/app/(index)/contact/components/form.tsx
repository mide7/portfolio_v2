"use client";

import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import clsx from "clsx";
import {
	SendMessageSchema,
	sendMessageSchema,
	serviceOptions,
} from "@/schemas";
import { toast } from "react-toastify";
import { ImSpinner2 } from "react-icons/im";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
	const recaptchaDisabled =
		process.env.NEXT_PUBLIC_DISABLE_RECAPTCHA === "true";

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
		reset,
		watch,
		setValue,
	} = useForm<SendMessageSchema>({
		mode: "onChange",
		resolver: zodResolver(sendMessageSchema),
		defaultValues: {
			recaptchaToken: recaptchaDisabled ? "recaptcha-disabled" : "",
		},
	});

	const recaptchaRef = useRef<ReCAPTCHA>(null);
	const captchaToken = watch("recaptchaToken");

	const onSubmit = handleSubmit(async (data) => {
		if (!recaptchaDisabled && !captchaToken) {
			toast.error("Please verify you're not a robot");
			return;
		}

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				body: JSON.stringify({
					...data,
					recaptchaToken: recaptchaDisabled
						? "recaptcha-disabled"
						: captchaToken,
				}),
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
		} finally {
			recaptchaRef.current?.reset();
			if (!recaptchaDisabled) {
				setValue("recaptchaToken", "");
			}
		}
	});

	return (
		<div onSubmit={onSubmit} className="space-y-3 sm:space-y-6 h-full">
			<h1 className="text-primaryBlue font-medium text-[min(7vw,42px)]">
				Drop me a message
			</h1>
			<p className="text-gray-400 text-sm">
				I&apos;m always looking for the next great project
			</p>

			<form className="flex flex-col gap-4 w-full">
				<div>
					<input
						className={clsx(
							"h-14 border rounded-md  px-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.full_name?.message?.toString()
								? "border-red-500"
								: "",
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
								: "",
						)}
						placeholder="Your email"
						{...register("email")}
					/>
					<small className="text-red-500 ml-1">
						{errors.email?.message?.toString()}
					</small>
				</div>

				<div className="w-full">
					<input
						type="tel"
						className={clsx(
							"h-14 border rounded-md px-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.phone?.message?.toString()
								? "border-red-500"
								: "",
						)}
						placeholder="Your phone number"
						{...register("phone")}
					/>
					<small className="text-red-500 ml-1">
						{errors.phone?.message?.toString()}
					</small>
				</div>

				<div className="w-full">
					<select
						defaultValue=""
						className={clsx(
							"h-14 border rounded-md px-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.service?.message?.toString()
								? "border-red-500"
								: "",
						)}
						{...register("service")}
					>
						<option value="" disabled>
							What do you need help with?
						</option>
						{serviceOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
					<small className="text-red-500 ml-1">
						{errors.service?.message?.toString()}
					</small>
				</div>

				<div>
					<textarea
						rows={5}
						className={clsx(
							"border rounded-md p-3 w-full bg-transparent focus:border-primaryBlue text-gray-400 outline-none transition-all duration-500",
							errors.message?.message?.toString()
								? "border-red-500"
								: "",
						)}
						placeholder="Your message"
						{...register("message")}
					/>
					<small className="text-red-500 ml-1">
						{errors.message?.message?.toString()}
					</small>
				</div>

				{!recaptchaDisabled && (
					<ReCAPTCHA
						ref={recaptchaRef}
						sitekey={
							process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string
						}
						onChange={(token) =>
							setValue("recaptchaToken", token ?? "", {
								shouldValidate: true,
							})
						}
						onExpired={() =>
							setValue("recaptchaToken", "", {
								shouldValidate: true,
							})
						}
					/>
				)}

				<button
					disabled={
						isSubmitting || (!recaptchaDisabled && !captchaToken)
					}
					type="submit"
					className={clsx(
						"place-self-end bg-primaryBlue rounded-full h-14 flex items-center justify-center  font-semibold text-white border-2 border-primaryBlue",
						"transition-all duration-500",
						"hover:text-primaryBlue hover:bg-white active:motion-safe:animate-ping",
						"disabled:cursor-not-allowed disabled:bg-primaryBlue/50 disabled:text-white/70 disabled:border-primaryBlue/20",
						"md:max-w-[160px] w-full",
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
