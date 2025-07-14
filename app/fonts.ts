import localFont from "next/font/local";

// Imprint MT Std Shadow
export const imprintMT = localFont({
  src: [
    {
      path: "./fonts/imprint_mt_std_shadow-webfont.woff2", // chemin relatif à ce fichier
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-impritMt",
});
