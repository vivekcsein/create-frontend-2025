"server-only";
import { z } from "zod";

// ✅ Load environment variables from .env file
// ✅ Define schema with defaults and transformations
const envConfigSchema = z.object({
  ROOT_LAYOUT_API: z.url().trim().default("http://localhost:3000/api/layout"),
});

// ✅ Validate process.env safely
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid layout environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Export validated config
export const envRootLayoutConfig = Object.freeze(parsed.data);

// ✅ Optional: Export type
export type EnvRootLayoutConfig = z.infer<typeof envConfigSchema>;
