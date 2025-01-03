import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Ocean Finance - Testnet",
  description:
    "Ocean Finance is a testnet platform on Ethereum that enables borrowing and lending of digital assets, allowing users to engage in decentralized finance (DeFi) transactions in a safe and controlled environment.",
  icons: {
    icon: "/images/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto} antialiased mx-auto max-w-7xl p-10 `}>
        {children}
      </body>
    </html>
  );
}
