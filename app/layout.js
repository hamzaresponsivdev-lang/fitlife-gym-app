import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "FitLife Gym | Expert Fitness & Training",
  description:
    "Your ultimate destination for elite strength training and yoga.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Black+Ops+One&family=Saira+Stencil:ital,wght@0,100..900;1,100..900&family=Sekuya&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className="bg-black text-white antialiased"> {children}</body>
    </html>
  );
}
