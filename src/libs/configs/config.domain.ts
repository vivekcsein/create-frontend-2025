export const allowedMailDomains = ["gmail.com", "hotmail.com", "outlook.com"];

export const allowedOriginsList = [
  process.env.FRONTEND_URL || "http://localhost:3000",
].filter(Boolean);

// Load allowed origins from env or fallback
export const allowedOrigins =
  process.env.FRONTEND_URL?.split(",").map((o) => o.trim()) ||
  allowedOriginsList;
