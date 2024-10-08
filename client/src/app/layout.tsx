import type { Metadata } from "next";
import { Montserrat } from "next/font/google"
import "./globals.css";
import Nav from "@/components/nav/Nav";
import Providers from "@/components/Providers";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      <html lang="en">
        <body
          className={`${montserrat.className} bg-light`}
        >
          <Nav />
          {children}
        </body>
      </html>
    </Providers>
  );
}
