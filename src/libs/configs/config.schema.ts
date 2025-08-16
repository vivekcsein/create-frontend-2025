import { z } from "zod";
import { allowedMailDomains } from "../../libs/configs/config.domain";

// 🧩 Shared messages
const messages = {
  emailInvalid: "Invalid email format",
  emailRequired: "Email is required",
  emailDomain: "Email must be from valid domains like gmail.com or hotmail.com",
  nameTooShort: "Name must be at least 5 characters",
  passwordTooShort: "Password must be at least 8 characters long",
  passwordUpper: "Must contain at least one uppercase letter",
  passwordLower: "Must contain at least one lowercase letter",
  passwordNumber: "Must contain at least one number",
  passwordSpecial: "Must contain at least one special character",
  passwordNoSpaces: "Password must not contain spaces",
  passwordMismatch: "Passwords do not match",
  termsRequired: "You must accept the terms and conditions to proceed.",
  topicRequired: "Topic is required",
  messageRequired: "Message is required",
};

// 🔐 Full name rules
export const fullnameRules = z
  .string()
  .min(6, messages.nameTooShort)
  .describe("Full name");

// 🔐 Email rules
export const emailRules = z
  .email(messages.emailInvalid)
  .trim()
  .min(6, messages.emailRequired)
  .refine(
    (email) => {
      const domain = email.toLowerCase().split("@")[1];
      return allowedMailDomains.includes(domain);
    },
    {
      message: messages.emailDomain,
    }
  )
  .describe("Email");

// 🔐 Shared password rules
export const passwordRules = z
  .string()
  .trim()
  .min(8, messages.passwordTooShort)
  .regex(/[A-Z]/, messages.passwordUpper)
  .regex(/[a-z]/, messages.passwordLower)
  .regex(/[0-9]/, messages.passwordNumber)
  .regex(/[^A-Za-z0-9]/, messages.passwordSpecial)
  .refine((val) => !/\s/.test(val), {
    message: messages.passwordNoSpaces,
  })
  .describe("Secure password with mixed characters");

// 🔐 Terms and conditions rules
export const termsAcceptedRules = z.boolean().refine((val) => val === true, {
  message: messages.termsRequired,
});

// 🧾 Registration schema
export const registrationSchema = z
  .object({
    fullname: fullnameRules,
    email: emailRules,
    password: passwordRules,
    confirmPassword: passwordRules,
    terms: termsAcceptedRules,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: messages.passwordMismatch,
    path: ["confirmPassword"],
  })
  .describe("Registration form");

// 🔐 Login schema
export const loginSchema = z
  .object({
    email: emailRules,
    password: passwordRules,
    remember: z.boolean().optional(),
  })
  .describe("Login form");

// 📬 Contact schema
export const contactSchema = z
  .object({
    fullname: fullnameRules,
    email: emailRules,
    topic: z.string().trim().min(5, messages.topicRequired),
    message: z.string().trim().min(5, messages.messageRequired),
    newsletter: z.boolean().optional(),
  })
  .describe("Contact form");
