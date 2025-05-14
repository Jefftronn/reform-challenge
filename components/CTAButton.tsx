'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

const CTAButton = () => {
  const textButtonRef = useRef(null);
  const iconButtonRef = useRef(null);

const handleMouseEnter = () => {
  const isMobile = window.innerWidth < 640; // Tailwind's sm breakpoint is 640px

  gsap.to(textButtonRef.current, {
    x: isMobile ? 40 : 60,
    duration: 0.5,
  });
  gsap.to(iconButtonRef.current, {
    x: isMobile ? -210 : -230,
    duration: 0.5,
  });
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
          rel="noopener noreferrer"
        >
          Get a Custom Quote Today
        </a>
        <a
          ref={iconButtonRef}
          className="transition-colors flex items-center justify-center text-background gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 sm:w-auto "
          rel="noopener noreferrer"
        >
          <Image
            className="dark:invert"
            src="/Arrow=Right.svg"
            alt="Arrow icon"
            width={42}
            height={42}
          />
        </a>
      </div>
    </div>
  );
};

export default CTAButton;
