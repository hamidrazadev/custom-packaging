import { Geist, Geist_Mono } from "next/font/google";
import "./styles/index.css";
import "./styles/custom.css";
import Footer from '../components/Footer';
import Header from '../components/Navigation';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Custom Packaging - Premium Eco-Friendly Packaging Solutions",
  description: "Explore our range of custom packaging solutions designed to meet your eco-friendly needs. Sustainable, stylish, and tailored just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
