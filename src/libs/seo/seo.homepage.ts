import { Metadata } from "next";
import { envFrontendConfig } from "../env/env.frontend";

const frontendUrl = envFrontendConfig.APP_FRONTEND;

const encodedOGUrl = encodeURI(
  `${frontendUrl}/api/og?title=Next.js Developer&subtitle=Elegant DX for Modern Web&author=@vivekcsein&theme=elegant`
);

//list your search engine keywords here
const keywords =
  "Next.js template, TypeScript, Tailwind CSS, Redux Toolkit, scalable React architecture, production-ready frontend, DX optimization, 2025 web development, @vivekcsein";

const HomePageSEO: Metadata = {
  title:
    "Next.js Frontend Template | TypeScript, Tailwind, Redux - @vivekcsein",
  description:
    "Explore a scalable, production-ready Next.js frontend template built with TypeScript, Tailwind CSS, and Redux Toolkit. Designed for performance and developer experience.",
  keywords: keywords,
  openGraph: {
    title:
      "Next.js Frontend Template | TypeScript, Tailwind, Redux - @vivekcsein",
    description:
      "Modular and scalable Next.js frontend for 2025. Built with TypeScript, Tailwind CSS, and Redux Toolkit for optimal performance and developer experience.",
    url: frontendUrl,
    siteName: "Sparkverse",
    images: [
      {
        url: encodedOGUrl,
        width: 1200,
        height: 630,
        alt: "Next.js Frontend Template Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Next.js Frontend Template | TypeScript, Tailwind, Redux - @vivekcsein",
    description:
      "Production-grade Next.js frontend for 2025. Built with TypeScript, Tailwind CSS, and Redux Toolkit.",
    images: [`${frontendUrl}/og-image.jpg`],
    creator: "@vivekcsein",
  },
  authors: [{ name: "Vivekcsein", url: frontendUrl }],
  creator: "Vivekcsein",
  publisher: "Vivekcsein",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      //eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default HomePageSEO;
