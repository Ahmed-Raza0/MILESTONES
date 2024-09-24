import NavLinks from "./components/nav-link";
import "./globals.css";

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
