'use client'

import CTAButton from "../../components/CTAButton";
import HeroHeader from "../../components/HeroHeader";
import SlideScrollCards from "../../components/SlideScrollCards";
import styles from "./page.module.css"

export default function Home() {
  return (
    <div className="main-container">
      <div className={styles.mainPageContainer}>
        <section className={styles.heroSection}>
          <HeroHeader></HeroHeader>
        </section>
        <section className="">
          <div className={styles.twoContentContainer}>
            <div className={ styles.box }>
              <h2 className={ styles.ctaHeadingText }>
                Join hundreds of businesses who trust Arlo to offer health insurance that works the way it should: affordable coverage that puts employees and their doctors in the driving seat.
              </h2>
              <CTAButton />
            </div>
            <div className={styles.boxSlide}>
              <SlideScrollCards></SlideScrollCards>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
