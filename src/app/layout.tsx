import "./globals.css";
import { Open_Sans } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "유순상 블로그",
    template: "유순상 블로그 | %s",
  },
  description: "프론트엔드 개발자 유순상 블로그",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sans.className}>
      <body className="flex flex-col w-full max-w-screen-2xl mx-auto">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
