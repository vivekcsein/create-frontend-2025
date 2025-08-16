import { z } from "zod";

// ✅ Schema uses the actual env var names (with NEXT_PUBLIC_ prefix)
const envConfigSchema = z.object({
  NEXT_PUBLIC_APP_NAME: z.string().default("Frontend-template"),
  NEXT_PUBLIC_APP_VERSION: z.string().default("2.0.0"),
  NEXT_PUBLIC_APP_HOST: z.string().default("localhost"),
  NEXT_PUBLIC_APP_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  NEXT_PUBLIC_APP_PORT: z
    .string()
    .default("3000")
    .transform((val) => Number(val)),
});

// ✅ Validate process.env
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid app environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Map validated vars to clean keys
export const envAppConfig = Object.freeze({
  APP_NAME: parsed.data.NEXT_PUBLIC_APP_NAME,
  APP_VERSION: parsed.data.NEXT_PUBLIC_APP_VERSION,
  APP_HOST: parsed.data.NEXT_PUBLIC_APP_HOST,
  APP_ENV: parsed.data.NEXT_PUBLIC_APP_ENV,
  APP_PORT: parsed.data.NEXT_PUBLIC_APP_PORT,
});

// ✅ Optional: Type-safe config
export type EnvAppConfig = typeof envAppConfig;
