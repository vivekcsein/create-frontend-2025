"server-only";
import { z } from "zod";

// ✅ Load environment variables from .env file
// ✅ Define schema with defaults and transformations
const envConfigSchema = z.object({
  NEXT_PUBLIC_BACKEND: z.url().trim().default("http://localhost:7164"),
  NEXT_PUBLIC_BACKEND_API_URL: z
    .url()
    .trim()
    .default("http://localhost:7164/api"),
});

// ✅ Validate process.env safely
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid backend environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Export validated config
export const envBackendConfig = Object.freeze({
  APP_BACKEND: parsed.data.NEXT_PUBLIC_BACKEND,
  APP_BACKEND_API_URL: parsed.data.NEXT_PUBLIC_BACKEND_API_URL,
});

// ✅ Optional: Export type
export type EnvBackendConfig = z.infer<typeof envConfigSchema>;
