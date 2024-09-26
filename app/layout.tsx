import React from "react";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import type {Metadata} from 'next';
import {Raleway,Macondo,Poppins} from 'next/font/google'

const raleway=Raleway({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700'],
  variable:'--font-raleway'
});

const macondo=Macondo({
  subsets:['latin'],
  weight:'400',
  variable:'--font-macondo'
});

const poppins=Poppins({
  subsets:['latin'],
  weight:'400',
  variable:'--font-poppins'
});



export const metadata:Metadata = {
  title: "NexLab",
  description: "Where developers unite to innovate. Empowering collaboration with cutting-edge tools for seamless project creation. Join the future of development!",
  icons:{
    icon:'/assets/nexlab.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      elements:{
        formButtonPrimary:'primary-gradient',
        footerActionLink:'primary-text-gradient hover:text-primary-500'
      }
    }}>
    <html lang="en">
      <body className={`${macondo.variable} ${raleway.variable} ${poppins.variable}`}>
        <header>
            {/* <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
            <UserButton />
            </SignedIn> */}
          </header>
        {children}
      </body>
    </html>
    </ClerkProvider>
  );
}
