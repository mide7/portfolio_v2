import { sendMessageSchema } from "@/schemas";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

import nodemailer from "nodemailer";
import { sayHelloMail } from "@/mails/hello";

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_HOST,
	port: +process.env.MAIL_PORT,
	secure: true,
	auth: {
		user: process.env.MAIL_USER,
		pass: process.env.MAIL_PASSWORD,
	},
});

async function verifyRecaptcha(token: string) {
	const params = new URLSearchParams({
		secret: process.env.RECAPTCHA_SECRET_KEY ?? "",
		response: token,
	});

	const res = await fetch(
		`https://www.google.com/recaptcha/api/siteverify?${params.toString()}`,
		{ method: "POST" }
	);
	const data = await res.json();
	return data.success === true;
}

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
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
			await transporter.sendMail({
				from: process.env.MAIL_FROM,
				to: process.env.MAIL_TO,
				subject: `Hello ✔ - ${data.full_name}`,
				html: sayHelloMail(data),
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
