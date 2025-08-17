import "./globals.css";

export const metadata = {
  title: "CC Club – Compliant Storefront",
  description: "Modern dark/yellow storefront template for lawful digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
