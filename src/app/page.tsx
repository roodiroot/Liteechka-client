import BlockPresent from "@/components/main-page/BlockPresent";
import FeatureSections from "@/components/main-page/FeatureSections";
import FeatureSections2 from "@/components/main-page/FeatureSections2";
import FeedBackBlock from "@/components/main-page/FeedBackBlock";
import ScreenshotSection from "@/components/main-page/ScreenshotSection";
import Testimonials from "@/components/main-page/Testimonials";

export default function Home() {
  return (
    <>
      <BlockPresent />
      <FeatureSections2 />
      <FeatureSections />
      <ScreenshotSection />
      <Testimonials />
      <FeedBackBlock />
    </>
  );
}
