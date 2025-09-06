import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClicDesign - Générateur IA de Visuels E-commerce",
  description: "Crée des visuels e-commerce qui vendent pendant que tu dors. Fini les visuels moches et les designers chers.",
  keywords: "générateur images, IA, e-commerce, visuels produits, mockups, packaging",
  openGraph: {
    title: "ClicDesign - Générateur IA de Visuels E-commerce",
    description: "Crée des visuels e-commerce qui vendent pendant que tu dors",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body 
        className={`${inter.className} antialiased bg-[#F8F5F0] text-[#0B0B1D] selection:bg-[#47F273] selection:text-[#0B0B1D]`}
      >
        {children}
      </body>
    </html>
  );
}