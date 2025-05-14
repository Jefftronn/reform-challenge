import CTAButton from "../../components/CTAButton";
import HeroHeader from "../../components/HeroHeader";
import SlideScrollCards from "../../components/SlideScrollCards";

export default function Home() {
  return (
    <div className="w-full items-center justify-center pb-20 gap-16 p-4 sm:p-4 md:p-8">
      <section>
        <HeroHeader ></HeroHeader>
      </section>
      <section className="mt-12 sm:mt-18 md:mt-24">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="flex flex-col justify-between border-2 border-solid border-[#ccc] p-8 gap-8 w-full lg:w-1/2 min-h-[300px]">
            <h2 className="cta-heading-text">
              Join hundreds of businesses who trust us to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.
            </h2>
            <CTAButton />
          </div>
          <div className="border-2 border-solid border-[#ccc] pt-4 pb-4 flex justify-center items-center w-full lg:w-1/2">
            <SlideScrollCards />
          </div>
        </div>
      </section>
    </div>
  );
}
