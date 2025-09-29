import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./styles/index.css";
import "./styles/custom.css";
import Footer from '../components/Footer';
import 'react-loading-skeleton/dist/skeleton.css'
import Header from '../components/Header';
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Custom Packaging - Premium Eco-Friendly Packaging Solutions",
  description: "Explore our range of custom packaging solutions designed to meet your eco-friendly needs. Sustainable, stylish, and tailored just for you.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Font Awesome 6 --> */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            // Define default options
            className: '',
            duration: 5000,
          }}
          
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
