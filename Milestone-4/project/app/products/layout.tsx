import type { Metadata } from "next";
import "@/app/globals.css";
import Header from "@/components/Header";
import HeaderMain from "@/components/MainHeader";
import Footer from "@/components/Footer";
import { CartProvider } from "./context/CartContext";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "My Store",
  description: "My Store",
};
  

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
         
        <CartProvider>
          <Header />
          <HeaderMain />
          {children}
          <Footer />
        </CartProvider>
   
  );
}
