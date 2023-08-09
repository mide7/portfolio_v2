import { sendMessageSchema } from "@/schemas";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const data = sendMessageSchema.parse(request.body);

    response.status(200).json({ message: "Message sent successfully!" });
  } catch (error: any) {
    if (error instanceof z.ZodError) {
      return response
        .status(422)
        .json({ message: error.errors[0].message, errors: error.errors });
    }
    response.status(500).json({ message: error?.message });
  }
}
