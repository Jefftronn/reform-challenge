import CTAButton from "../../components/CTAButton";
import HeroHeader from "../../components/HeroHeader";
import SlideScrollCards from "../../components/SlideScrollCards";

export default function Home() {
  return (
    <div className="w-full items-center justify-center p-8 pb-20 gap-16">
      <section>
        <HeroHeader ></HeroHeader>
      </section>
      <section className="mt-26">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col justify-between border-2 border-solid border-[#ccc] rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none lg:rounded-r-none p-8 gap-8 w-full lg:w-1/2">
            <h2 className="cta-heading-text">
              Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.
            </h2>
            <CTAButton />
          </div>
          <div className="border-2 border-solid border-[#ccc] rounded-b-lg lg:rounded-r-lg lg:rounded-tl-none lg:rounded-l-none p-8 flex justify-center items-center w-full lg:w-1/2">
            <SlideScrollCards />
          </div>
        </div>
      </section>
    </div>
  );
}
