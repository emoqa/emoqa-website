import {
  Caveat, Inter, JetBrains_Mono, Lora, Merriweather, Playfair_Display, Poppins, Roboto_Slab,
} from "next/font/google";

// preload: false, so a visitor only downloads the fonts an article really uses.
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", preload: false });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"], variable: "--font-poppins", preload: false });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora", preload: false });
const merriweather = Merriweather({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-merriweather", preload: false });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", preload: false });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], variable: "--font-roboto-slab", preload: false });
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat", preload: false });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", preload: false });

export const blogFontVariables = [inter, poppins, lora, merriweather, playfair, robotoSlab, caveat, jetbrains]
  .map((f) => f.variable)
  .join(" ");
