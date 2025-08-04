import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProfileModal from "@/components/Profile";

import Providers from "@/app/providers";
import NavBar from "@/components/NavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
				<Providers>
					<NavBar />
					<div className="mx-auto mt-5 w-full px-4 sm:px-6 lg:px-8 max-w-screen-lg" >
						{children}
						<ProfileModal />
					</div>
				</Providers>
      </body>
    </html>
  );
}
