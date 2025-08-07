// styles/fonts.ts
import { Cabin, Lora, Nunito, Poppins, Roboto } from "next/font/google";

// Font definitions with variable names for CSS usage
export const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-poppins",
});

export const nunito = Nunito({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-nunito",
});

export const cabin = Cabin({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-cabin",
});

export const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-lora",
});

// Font metadata for dynamic usage (e.g. dropdowns, theming)
export type FontMeta = {
  id: string;
  name: string;
  variable: string;
};

export const fontFamilies: FontMeta[] = [
  { id: "01", name: "Roboto", variable: roboto.variable },
  { id: "02", name: "Poppins", variable: poppins.variable },
  { id: "03", name: "Nunito", variable: nunito.variable },
  { id: "04", name: "Cabin", variable: cabin.variable },
  { id: "05", name: "Lora", variable: lora.variable },
];
