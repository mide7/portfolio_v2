import { sendMessageSchema } from "@/schemas";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

async function verifyRecaptcha(token: string) {
	const params = new URLSearchParams({
		secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
		response: token,
	});

	const res = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?${params.toString()}`,
		{ method: "POST" },
	);
	const data = await res.json();
	return data.success === true;
}

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse,
) {
	try {
		const data = sendMessageSchema.parse(request.body);

		const recaptchaDisabled =
			process.env.NEXT_PUBLIC_DISABLE_RECAPTCHA === "true";

		if (!recaptchaDisabled) {
			const isHuman = await verifyRecaptcha(data.recaptchaToken);
			if (!isHuman) {
				return response.status(422).json({
					message: "reCAPTCHA verification failed. Please try again.",
				});
			}
		}

		try {
			await resend.emails.send({
				to: process.env.MY_EMAIL_ADDRESS,
				template: {
					id: process.env.RESEND_TEMPLATE_ID,
					variables: {
						full_name: data.full_name,
						email: data.email,
						phone: data.phone,
						service: data.service,
						message: data.message,
					},
				},
			});
		} catch (error) {
			console.log(error);
			throw new Error("Something went wrong");
		}

		response.status(200).json({ message: "Message sent successfully!" });
	} catch (error: any) {
		if (error instanceof z.ZodError) {
			return response.status(422).json({
				message: error.errors[0].message,
				errors: error.errors,
			});
		}
		response.status(500).json({ message: error?.message });
	}
}
