import * as z from "zod";

export const sendMessageSchema = z.object({
  message: z.string().min(3, { message: "Message too short" }).max(500, {
    message: "Message too long",
  }),
  email: z.string().email({ message: "Invalid email" }),
});
