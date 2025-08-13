import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata = {
  title: "Project Kuber",
  description: "Next.js project with a custom layout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
