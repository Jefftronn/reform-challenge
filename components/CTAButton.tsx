'use client';

import React, { useRef } from 'react';
import { gsap } from 'gsap';
import styles from './CTAButton.module.css'

const CTAButton = () => {
  const textButtonRef = useRef<HTMLAnchorElement | null>(null);
  const iconButtonRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseEnter = () => {
    const paths = iconButtonRef.current?.querySelectorAll('path');
    const textButtonWidth = textButtonRef.current;
    const iconButtonWidth = iconButtonRef.current;
    const iconWidth = iconButtonWidth?.offsetWidth;
    const gap = 6;
    
    gsap.set(textButtonRef.current, { 
      zIndex: 7000,
     });
    gsap.set(iconButtonRef.current, { zIndex: 1 });

    gsap.to(textButtonRef.current, {
      color: "#00B684",
      borderColor: "#00B684",
      x: (iconWidth ?? 0) + gap,
      duration: 0.5,
    });
    gsap.to(iconButtonRef.current, {
      x: -(textButtonWidth?.offsetWidth ?? 0),
      duration: 0.5,
    });

    if (paths) {
    paths.forEach((path) => {
      gsap.to(path, {
        stroke: "#00B684",
        duration: 0.5,
      });
    });
  }
};

const handleMouseLeave = () => {
  const paths = iconButtonRef.current?.querySelectorAll('path');
  gsap.set(textButtonRef.current, { zIndex: 1 });
  gsap.set(iconButtonRef.current, { zIndex: 7000 });

  gsap.to(textButtonRef.current, { 
    color: "#30715D",
    borderColor: "#30715D",
    x: 0, 
    duration: 0.5,
  });
  gsap.to(iconButtonRef.current, { 
    x: 0, 
    duration: 0.5, 
  });

  if (paths) {
    paths.forEach((path) => {
      gsap.to(path, {
        stroke: "#30715D",
        duration: 0.5,
      });
    });
  }
};

  return (
    <div
      className="flex"
    >
      <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex gap-1 items-center"
      >
        <a
          ref={textButtonRef}
          className={styles.ctaButton}
          rel="noopener noreferrer"
        >
          Get a Custom Quote Today
        </a>
        <a
          ref={iconButtonRef}
          className="transition-colors flex items-center justify-center text-background gap-2 font-medium text-sm sm:text-base h-10 sm:h-12 sm:w-auto "
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" strokeWidth=".75px" width="50" height="50" viewBox="0 0 34 34" fill="none">
            <path d="M7.67055 4C10.2968 2.11192 13.5186 1 17 1C25.8366 1 33 8.16344 33 17C33 25.8366 25.8366 33 17 33C8.16344 33 1 25.8366 1 17C1 15.6188 1.17501 14.2785 1.50407 13" stroke="#30715D" strokeLinecap="round"/>
            <path d="M16.9991 21L20.9991 17M20.9991 17L16.9991 13M20.9991 17H13" stroke="#30715D" strokeLinecap="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default CTAButton;
