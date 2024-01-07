import Head from "next/head";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

import { Footer, NavBar } from "@components";

export const metadata = {
  title: "Owusu Car Rentals",
  description: "We provide world best cars for rents",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (

    <ClerkProvider>
        <html lang='en'>
       
          <body className='relative'>
            <NavBar />
            {children}
            <Footer />
          </body>
        </html>
  </ClerkProvider>
  );
}
