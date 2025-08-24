import Navbar from "../../components/Navbar";
import "./globals.css";
import Footer from "../../components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
export const metadata = {
  title: "Himanshu - Helping People Succeed In E-commerce Marketing",
  description: "I’m Himanshu, helping e-commerce brands grow with Google Ads, Facebook Ads, Shopify setup & email marketing to boost sales.",
   icons: {
    icon : "/icon.png"
   }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-NN25T66L" />
      <body
      >
          <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
