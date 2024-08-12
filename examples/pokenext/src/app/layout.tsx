import type { Metadata } from "next";
import "../styles/globals.css";

import { Inter, Pixelify_Sans } from "next/font/google";

import { Footer, Header } from "@pokenext/ui";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Pokenext",
  description: "The Next.js Pokedex!",
};

// font setup
const pixel = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixel",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${pixel.variable} antialiased dark:bg-stone-800 dark:text-amber-300`}
    >
      <UserProvider>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </UserProvider>
    </html>
  );
}
