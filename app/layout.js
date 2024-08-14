import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Axonec",
  description:
    "Axonec is an innovative IT consulting and services company focused on delivering customized technology solutions that unlock potential and transform businesses. Our website offers a range of services, from cutting-edge web and mobile app development to comprehensive e-commerce and business management solutions. With a sleek, modern design featuring a dark theme, the site highlights our commitment to quality and user experience. Visitors can explore our services, learn more about our expertise, and connect with us for tailored IT solutions that accelerate their growth.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
