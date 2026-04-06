import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Joe Coaching Lab | Coaching Nutricional y Fitness Online",
  description:
    "Transforma tu cuerpo con el coaching nutricional y fitness online de Joe. Gana músculo, mejora tu alimentación y consigue resultados reales con un plan personalizado.",
  openGraph: {
    title: "Joe Coaching Lab | Coaching Nutricional y Fitness Online",
    description:
      "Transforma tu cuerpo con el coaching nutricional y fitness online de Joe. Gana músculo, mejora tu alimentación y consigue resultados reales.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={plusJakarta.className}>
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
