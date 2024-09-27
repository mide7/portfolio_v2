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

export default async function handler(
	request: NextApiRequest,
	response: NextApiResponse
) {
	try {
		console.log("here");
		const data = sendMessageSchema.parse(request.body);

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
