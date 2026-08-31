import * as z from "zod";

export const serviceOptions = [
  { value: "frontend", label: "Frontend Development" },
  { value: "backend", label: "Backend Development" },
  { value: "fullstack", label: "Full Stack Development" },
  { value: "api_integration", label: "API Integration" },
  { value: "consulting", label: "Technical Consulting" },
  { value: "other", label: "Other" },
];

export const sendMessageSchema = z.object({
  full_name: z.string().min(3, { message: "Name too short" }).max(150, {
    message: "Name too long",
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
  phone: z
    .string()
    .min(7, { message: "Phone number too short" })
    .max(20, { message: "Phone number too long" }),
  service: z.string().min(1, { message: "Please select a service" }),
  message: z.string().min(3, { message: "Message too short" }).max(500, {
    message: "Message too long",
  }),
  recaptchaToken: z
    .string()
    .min(1, { message: "Please verify you're not a robot" }),
});

export type SendMessageSchema = z.infer<typeof sendMessageSchema>;
