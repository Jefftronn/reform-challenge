import CTAButton from "../../components/CTAButton";
import HeroHeader from "../../components/HeroHeader";
import SlideScrollButtons from "../../components/SlideScrollButtons";
import SlideScrollCards from "../../components/SlideScrollCards";

export default function Home() {
  return (
    <div className="w-full items-center justify-items-center p-8 pb-20 gap-16">
      <section>
        <HeroHeader ></HeroHeader>
      </section>
      <section className="mt-26">
        <div className="flex">
          <div className="flex flex-col justify-between border-2 border-solid border-[#ccc] rounded-l-lg rounded-r-none p-8 gap-16">
            <h2 className="cta-heading-text">Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.</h2>
            <CTAButton />
          </div>
          <div className="border-2 border-solid border-[#ccc] rounded-r-lg rounded-l-none p-8 gap-16 flex-col sm:flex-row">
            <SlideScrollCards />
            <SlideScrollButtons />
          </div>
        </div>
      </section>
    </div>
  );
}
