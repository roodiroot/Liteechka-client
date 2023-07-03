import Header from "@/components/header/Header";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import CookieBaner from "@/components/utils/CookieBaner";
import NextTopLoader from "nextjs-toploader";
import Head from "next/head";

const inter = Inter({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Монтаж навесов из поликарбоната в Мордовии",
  description:
    "Монтаж различного типа навесов, от автомобильных навесов, до промышленных в Саранске и по Мордовии",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link href="favicon.ico" rel="icon"></link>
        <meta name="yandex-verification" content="c5d3873f351893a5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
            ym(94178621, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true
         });
              `,
          }}
        />
      </head>
      <body
        className={`relative w-full h-full min-h-screen flex flex-col ${inter.className}`}
      >
        <NextTopLoader
          color="#84cc16"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px # 2299DD,0 0 5px #2299DD"
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
        <CookieBaner />
      </body>
    </html>
  );
}
