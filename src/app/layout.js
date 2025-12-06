import { Inter, Poppins } from "next/font/google";
import "./globals.css";


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
  title: "Abu Bakkar Siddik | Front-End Developer & UI/UX Enthusiast",
  description: "Portfolio of Abu Bakkar Siddik, a passionate React Developer building modern, scalable, and interactive web applications.",
  keywords: ["Front-End Developer", "React Developer", "Next.js", "Portfolio", "Web Development", "UI/UX"],
  icons: {
    icon: "/favicon.ico",
  },
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
