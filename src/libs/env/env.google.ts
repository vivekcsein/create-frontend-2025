"server-only";
import { z } from "zod";

// ✅ Load environment variables from .env file
// ✅ Define schema with defaults and transformations
const envConfigSchema = z.object({
  GOOGLE_CLIENT_ID: z.string().default("google-client-id"),
  GOOGLE_CLIENT_SECRET: z.string().default("google-client-secret"),
  GOOGLE_REDIRECT_URL: z.url().trim().default("google-redirect-url"),
  GOOGLE_VERIFICATION: z.string().default("google-verification-code"),
  GOOGLE_MAP_LOCATION: z.string().default("google-map-location"),
});

// ✅ Validate process.env safely
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid google environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Export validated config
export const envGoogleConfig = Object.freeze(parsed.data);

// ✅ Optional: Export type
export type EnvGoogleConfig = z.infer<typeof envConfigSchema>;
