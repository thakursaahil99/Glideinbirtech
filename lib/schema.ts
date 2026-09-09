import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(20)
    .regex(/^[+()\d\s-]+$/, "Please enter a valid phone number"),
  email: z.union([z.literal(""), z.email("Please enter a valid email").max(120)]).default(""),
  service: z.string().trim().max(60).optional().default(""),
  budget: z.string().trim().max(60).optional().default(""),
  message: z.string().trim().min(10, "Tell us a little about the project").max(2000),
  locale: z.enum(["en", "hi"]).optional().default("en"),
  // honeypot — must stay empty
  company: z.string().max(0).optional().default(""),
});

export type LeadInput = z.infer<typeof leadSchema>;

export type LeadState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<keyof LeadInput, string>>;
};
