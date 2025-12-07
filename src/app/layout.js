import { ToastProvider } from "@/components/ui/Toast";
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
  title: "Abu Bakkar Siddik | Full Stack Developer & UI/UX Enthusiast",
  description: "Portfolio of Abu Bakkar Siddik, a passionate Full Stack Developer building modern, scalable, and interactive web applications.",
  keywords: ["Full Stack Developer", "React Developer", "Next.js","Node.js", "Portfolio", "Web Development", "UI/UX"],

  openGraph: {
    title: "Abu Bakkar Siddik | Full Stack Developer",
    description: "Building modern web experiences with React, Next.js, and Tailwind CSS.",
    url: "https://abubakkar-portfolio.vercel.app",
    siteName: "Abu Bakkar Portfolio",
    images: [
      {
        url: "/images/profile.jpg", // Assuming profile image as OG image
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abu Bakkar Siddik | Full Stack Developer",
    description: "Building modern web experiences with React, Next.js, and Tailwind CSS.",
    images: ["/images/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
