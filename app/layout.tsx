import type { Metadata } from "next";
import { Assistant, Fredoka } from "next/font/google"; // Fredoka = פונט עגול ושמנמן
import "./globals.css";

// פונט טקסט רץ
const assistant = Assistant({ subsets: ["hebrew"], variable: '--font-text' });

// פונט כותרות - הכי עגול שיש
const cloudFont = Fredoka({ subsets: ["hebrew"], variable: '--font-cloud', weight: ['400', '600', '700'] });

export const metadata: Metadata = {
  title: "Dream Software House",
  description: "From Abstract Dreams to Concrete Reality",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${assistant.variable} ${cloudFont.variable} antialiased overflow-x-hidden selection:bg-pink-500 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}