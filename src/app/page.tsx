import BlockPresent from "@/components/main-page/BlockPresent";
import FeatureSections from "@/components/main-page/FeatureSections";
import FeatureSections2 from "@/components/main-page/FeatureSections2";
import FeedBackBlock from "@/components/main-page/FeedBackBlock";
import ScreenshotSection from "@/components/main-page/ScreenshotSection";
import Testimonials from "@/components/main-page/Testimonials";
import MainModalBody from "@/components/modal/MainModalBody";
import ModalWrapper from "@/components/modal/ModalWrapper";

export default function Home() {
  return (
    <>
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
