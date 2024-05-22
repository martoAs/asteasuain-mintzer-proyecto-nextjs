import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {NavBar} from "@/components/component/navbar/NavBar";
import Footer from "@/components/component/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wall Of Sound Store",
  description: "Descubrí tu próxima obsesión musical",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
