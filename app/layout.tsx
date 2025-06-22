import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Head from "next/head";
 
const geistSans = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

 
export const metadata: Metadata = {
  title: "Kan PortFolio website",
  description: "Kan PortFolio website",
   keywords: ["Kan PortFolio website"],
  twitter: {
    site: "@site",
   },  
}; 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
       <Head>
         <link rel="shortcut icon" href="/leadvy.webp" />
    </Head>
      <body
        className={`${geistSans.variable}  antialiased page-scroll`}
      >  {children}
      </body>
    </html>
  );
}
