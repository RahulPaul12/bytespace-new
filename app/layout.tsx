import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from 'next/font/local'
import "./style/globals.css";


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
  title: "ByteSpace",
  description: "Best Sell Course",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${poppinSans.variable} ${satoshi.variable} h-full antialiased`}>
      <body>{children}</body>
    </html>
  );
}
