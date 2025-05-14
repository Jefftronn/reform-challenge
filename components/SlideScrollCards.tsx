'use client';

import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './SlideScrollCards.module.css';

const SlideScrollCards: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    animationRef.current = gsap.to(container, {
      x: -totalWidth,
      duration: 20,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      animationRef.current?.kill();
    };
  }, []);

  const handlePrev = () => {
    animationRef.current?.pause();
    gsap.to(containerRef.current, {
      x: '+=220',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => animationRef.current?.play(),
    });
  };

  const handleNext = () => {
    animationRef.current?.pause();
    gsap.to(containerRef.current, {
      x: '-=220',
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => animationRef.current?.play(),
    });
  };

  const cards = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5'];

  return (
    <div className={styles.wrapper}>
      <button onClick={handlePrev} className={styles.navButton}>
        ‹
      </button>
      <div className={styles.viewport}>
        <div className={styles.container} ref={containerRef}>
          {[...cards, ...cards].map((text, index) => (
            <div key={index} className={styles.card}>
              {text}
            </div>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className={styles.navButton}>
        ›
      </button>
    </div>
  );
};

export default SlideScrollCards;
