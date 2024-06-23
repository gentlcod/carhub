import type { Metadata } from "next";
import { Navbar, Footer } from "@/components";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext'; 

export const metadata: Metadata = {
  title: "CarHub",
  description: "Discovers the best cars in the world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" /> 
      </head>
      <body className="relative">
        <ThemeProvider> 
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
