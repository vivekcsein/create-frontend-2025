"server-only";
import { z } from "zod";

// ✅ Load environment variables from .env file
// ✅ Define schema for raw env vars
const envConfigSchema = z.object({
  GITHUB_USER: z.string().default("vivekcsein"),
  GITHUB_REPO: z.string().default("githost"),
  GITHUB_API_URL: z.string().default("@vivekcsein"),
});

// ✅ Validate process.env
const parsed = envConfigSchema.safeParse(process.env);

if (!parsed.success) {
  throw new Error(
    `❌ Invalid github environment variables:\n${parsed.error.issues
      .map((i) => `• ${i.path.join(".")}: ${i.message}`)
      .join("\n")}`
  );
}

// ✅ Construct derived config
const { GITHUB_USER, GITHUB_REPO, GITHUB_API_URL } = parsed.data;

export const envGithubConfig = Object.freeze({
  GITHUB_USER,
  GITHUB_REPO,
  GITHUB_API_URL,
  GITHUB_IMAGE_SRC: `https://raw.githubusercontent.com/${GITHUB_USER}/${GITHUB_REPO}/refs/heads/main`,
});

// ✅ Optional: Export type
export type EnvGoogleConfig = typeof envGithubConfig;
