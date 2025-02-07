import { Poppins,Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ['latin'],
  weight: ['400','500','600','700'],
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ['latin'],
  weight: ['400','500','600','700'],
})

export const metadata = {
  title: "Portpollio || Abu Bakkar Siddik",
  description: "A portofollio website with project showcase",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
        // style={{fontFamily: `var(--font-inter)`}}
      >
        {children}
      </body>
    </html>
  );
}
