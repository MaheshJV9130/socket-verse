import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Slide, ToastContainer } from "react-toastify";
import ReduxWrapper from "@/components/ReduxWrapper";
import BackBtn from "@/components/BackBtn";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

export const metadata = {
  title: "SocketVerse",
  description: "Nothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
        <link
          rel="shortcut icon"
          href="/socket-verse.jpg"
          type="image/x-icon"
          />
        <body className={`${inter.variable} antialiased`}>
          <ReduxWrapper>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition={Slide}
          />
          {children}
          <BackBtn/>
          {/* <Footer/> */}
    </ReduxWrapper>
        </body>
      </html>
  );
}
