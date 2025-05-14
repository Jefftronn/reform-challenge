'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './SlideScrollCards.module.css';

const cardsData = Array.from({ length: 5 }, (_, i) => `Card ${i + 1}`);

const SlideScrollCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      const isActive = index === currentIndex;
      const isAdjacent = Math.abs(index - currentIndex) === 1;

      gsap.to(card, {
        scale: isActive ? 1 : isAdjacent ? 0.8 : 0.6,
        opacity: isActive || isAdjacent ? 1 : 0,
        xPercent: (index - currentIndex) * 100,
        zIndex: isActive ? 2 : isAdjacent ? 1 : 0,
        duration: 0.6,
        ease: 'power2.inOut',
        pointerEvents: isActive ? 'auto' : 'none',
      });
    });
  }, [currentIndex]);

  const showNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardsData.length);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  return (
    <div className={styles.galleryWrapper}>
      <button onClick={showPrev} className={styles.arrowButton}>
        ‹
      </button>
      <div className={styles.gallery} ref={containerRef}>
        {cardsData.map((text, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={showNext} className={styles.arrowButton}>
        ›
      </button>
    </div>
  );
};

export default SlideScrollCards;
