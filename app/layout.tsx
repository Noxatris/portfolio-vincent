import type { Metadata } from "next";
import { imprintMT } from "./fonts"; 
import 'aos/dist/aos.css'
import "./globals.css";


export const metadata: Metadata = {
  title: "Portfolio Noxatrisdev",
  description: "Portail reliant rêve et réalité",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${imprintMT.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
