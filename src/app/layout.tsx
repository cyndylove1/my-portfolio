import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CustomCursor from "@/components/customCursor";
import { ToastContainer } from "react-toastify";
import Header from "@/components/Header";

const JetBrainsMono = JetBrains_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-jetBrainsMono",
});

export const metadata: Metadata = {
  title: "Cyndy-Portfolio",
  description: "Nweke Cynthia | Frontend Engineer",
  icons: "https://cyndy-dev.vercel.app/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <meta property="og:title" content="Cyndy-Portfolio" />
        <meta
          property="og:image"
          content="https://cyndy-dev.vercel.app/favicon.ico"
        />
        <meta
          property="og:description"
          content="Nweke Cynthia | Frontend Engineer"
        />
        <meta property="og:url" content="https://cyndy-dev.vercel.app/" />
      </head>
      <body className={JetBrainsMono.variable}>
        <Header/>
        <CustomCursor />
        <ToastContainer />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
