import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Techplus Industrial Solutions",
  description: "Techplus Engineering Solutions",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400","500","700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} $antialiased`}
      >
        <header>
        </header>
        <main>
          <Navbar />
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
