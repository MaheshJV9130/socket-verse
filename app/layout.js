import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight:['400','600','800']
});



export const metadata = {
  title: "SocketVerse - Home",
  description: "Nothing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <link rel="shortcut icon" href="/socket-verse.jpg" type="image/x-icon" />
      <body
        className={`${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
