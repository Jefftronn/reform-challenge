'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './SlideScrollCards.module.css';
import Image from 'next/image';

const cardsData = [
  '/cards/State=1.png',
  '/cards/State=2.png',
  '/cards/State=3.png',
  '/cards/State=4.png',
  '/cards/State=1.png',
  '/cards/State=2.png',
  '/cards/State=3.png',
  '/cards/State=4.png',
  '/cards/State=1.png',
  '/cards/State=2.png',
  '/cards/State=3.png',
  '/cards/State=4.png',
  '/cards/State=1.png',
  '/cards/State=2.png',
  '/cards/State=3.png',
  '/cards/State=4.png',
];

const SlideScrollCards = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [layoutMode, setLayoutMode] = useState<'horizontal' | 'vertical'>('vertical');
  const isAnimatingRef = useRef(false);
  const totalCards = cardsData.length;

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 500) {
        setLayoutMode('horizontal');
      } else if (width < 1025) {
        setLayoutMode('vertical');
      } else {
        setLayoutMode('horizontal');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

useEffect(() => {
  const tl = gsap.timeline();

  cardsRef.current.forEach((card, index) => {
    if (!card) return;

    let relIndex = ((index - currentIndex + totalCards) % totalCards);
    if (relIndex > totalCards / 2) relIndex -= totalCards;

    const isActive = relIndex === 0;
    const isAdjacent = Math.abs(relIndex) === 1;
    const offset = relIndex * 100;

    tl.to(card, {
      xPercent: layoutMode === 'horizontal' ? offset : 0,
      yPercent: layoutMode === 'vertical' ? offset : 0,
      scale: isActive ? 0.9 : isAdjacent ? 0.8 : 0.6,
      opacity: Math.abs(relIndex) <= 2 ? 1 : 0,
      visibility: Math.abs(relIndex) <= 2 ? 'visible' : 'hidden',
      duration: .6,
      ease: 'power2.out',
      pointerEvents: isActive ? 'auto' : 'none',
    }, 0);

    gsap.set(card, {
      zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
    });

    if (isActive) {
      tl.to(card, {
        scale: 1,
        duration: 0.9,
        delay: .1,
        ease: 'power1.out',
      }, 0.8);
    }
  });
}, [currentIndex, layoutMode, totalCards]);

  const animateAndSwitch = (nextIndex: number) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const currentCard = cardsRef.current[currentIndex];
    if (!currentCard) {
      setCurrentIndex(nextIndex);
      isAnimatingRef.current = false;
      return;
    }

    gsap.to(currentCard, {
      scale: 0.8,
      duration: 0.8,
      delay: 0.4,
      ease: 'power1.in',
      onComplete: () => {
        setCurrentIndex(nextIndex);
        isAnimatingRef.current = false;
      },
    });
  };

  useEffect(() => {
  const interval = setInterval(() => {
    animateAndSwitch((currentIndex - 1) % totalCards);
  }, 4000);

  return () => clearInterval(interval);
});

  return (
    <div className={styles.galleryWrapper}>
      <div className={styles.gallery}>
        {cardsData.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
            <Image
              className={styles.cardImage}
              src={src}
              alt={`Card ${index + 1}`}
              fill
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlideScrollCards;
