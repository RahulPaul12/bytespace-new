import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./style/globals.css";
import "@/public/icon/iconly.css"
import HeaderLayout from "@/components/layouts/HeaderLayout";
import FooterLayout from "@/components/layouts/FooterLayout";
import Link from "next/link";

const poppinSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

const satoshi = localFont({
  variable: "--font-satoshi",
  src: '../public/fonts/satoshi/Satoshi-Variable.ttf'
})

export const metadata: Metadata = {
  title: "404 Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={`${poppinSans.variable} ${satoshi.variable} h-full antialiased`}>
      <body>
         <HeaderLayout/>
            <div className="min-h-dvh w-full flex items-center justify-center bg-grid">
                <main className="flex-1 flex flex-col items-center justify-center text-center px-5 pt-40 pb-20 sm:pb-30">
                    <p className="big404" aria-hidden="true">404</p>
                    <h1 className="not-found-heading">The page you are looking for doesn’t exist</h1>
                    <p className="my-8 text-lg font-normal text-[#E5E6E8]">Try to use a correct url or go back to homepage to start again</p>
                    <a href={"/"} className="primary-btn py-3">Back to Home</a>
                </main>
            </div>
         <FooterLayout/>   
        </body>
    </html>
  );
}
