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

export const Themes = {
  elegant: {
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    text: "#ffffff",
    accent: "#f8f9fa",
    border: "#ffffff20",
  },
  classic: {
    bg: "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
    text: "#ecf0f1",
    accent: "#3498db",
    border: "#ffffff15",
  },
  warm: {
    bg: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
    text: "#2c3e50",
    accent: "#e74c3c",
    border: "#00000010",
  },
  royal: {
    bg: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
    text: "#ffffff",
    accent: "#ffd700",
    border: "#ffffff25",
  },
} as const;

// const localfont = localFont({
//   src: [
//     {
//       path: '../../public/fonts/local-Regular.woff2',
//       weight: '500',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-local',
// })
