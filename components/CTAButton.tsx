'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const CTAButton = () => {
  const textButtonRef = useRef(null);
  const iconButtonRef = useRef(null);

  const handleMouseEnter = () => {
    gsap.to(textButtonRef.current, { x: 68, duration: 0.5 });
    gsap.to(iconButtonRef.current, { x: -226, duration: 0.5 });
  };

  const handleMouseLeave = () => {
    gsap.to(textButtonRef.current, { x: 0, duration: 0.5 });
    gsap.to(iconButtonRef.current, { x: 0, duration: 0.5 });
  };

  return (
    <div
      className="flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex gap-1 items-center">
        <a
          ref={textButtonRef}
          className="z-top cta-button rounded-full border border-solid transition-colors flex items-center justify-center text-background gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href=""
          rel="noopener noreferrer"
        >
          Get a Custom Quote Today
        </a>
        <a
          ref={iconButtonRef}
          className="cta-button rounded-full border border-solid transition-colors flex items-center justify-center text-background gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          href=""
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/Arrow.svg"
            alt="Arrow icon"
            width={14}
            height={14}
          />
        </a>
      </div>
    </div>
  );
};

export default CTAButton;
