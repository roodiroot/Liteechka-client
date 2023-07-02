import BlockPresent from "@/components/main-page/BlockPresent";
import FeatureSections from "@/components/main-page/FeatureSections";
import FeatureSections2 from "@/components/main-page/FeatureSections2";
import FeedBackBlock from "@/components/main-page/FeedBackBlock";
import ScreenshotSection from "@/components/main-page/ScreenshotSection";
import Testimonials from "@/components/main-page/Testimonials";
import MainModalBody from "@/components/modal/MainModalBody";
import ModalWrapper from "@/components/modal/ModalWrapper";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="yandex-verification" content="c5d3873f351893a5" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
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
      </Head>
      <ModalWrapper
        title="Форма отправки"
        description="Заполните необходимую информацию, и&nbsp;наш специалист свяжется с&nbsp;вами в&nbsp;ближайшее время."
        Body={MainModalBody}
      ></ModalWrapper>
      <BlockPresent />
      <FeatureSections2 />
      <FeatureSections />
      <ScreenshotSection />
      <Testimonials />
      <FeedBackBlock />
    </>
  );
}
