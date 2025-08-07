import "../styles/globals.css";
import type { Metadata } from "next";

import LayoutProvider from "@/components/providers/LayoutProvider";

export const metadata: Metadata = {
  title: "A frontend template for 2025",
  description: "Production ready frontend template for 2025",
  keywords:
    "frontend, nextjs, tailwindcss, styled-components, framer-motion, zustand,  @vivekcsein",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased relative scroll-smooth`}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}
