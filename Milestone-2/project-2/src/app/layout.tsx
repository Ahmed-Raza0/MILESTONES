import type { Metadata } from "next";
import "./globals.css";
import NavLinks from "./components/nav-link";
 

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavLinks />
        {children}
      </body>
    </html>
  );
}
