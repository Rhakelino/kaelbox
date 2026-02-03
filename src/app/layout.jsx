import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata = {
  title: "KaelBox - Abadikan Momenmu",
  description: "Transformasikan kenangan digitalmu ke dalam bingkai unik dan estetik.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="light">
      <head>

      </head>
      <body className={`${plusJakartaSans.variable} antialiased`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
