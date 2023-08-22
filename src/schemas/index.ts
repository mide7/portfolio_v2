import * as z from "zod";

export const sendMessageSchema = z.object({
  full_name: z.string().min(3, { message: "Name too short" }).max(150, {
    message: "Name too long",
  }),
  message: z.string().min(3, { message: "Message too short" }).max(500, {
    message: "Message too long",
  }),
  email: z
    .string()
    .email({ message: "Invalid email" })
    .min(3, {
      message: "Email too short",
    })
    .max(150, {
      message: "Email too long",
    }),
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;
