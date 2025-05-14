'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import styles from './SlideScrollCards.module.css';
import Image from "next/image";

const cardsData = [
  '/cards/State=1.png',
  '/cards/State=2.png',
  '/cards/State=3.png',
  '/cards/State=4.png',
];

const SlideScrollCards = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCards = cardsData.length;
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const tl = gsap.timeline();

    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      let relIndex = ((index - currentIndex + totalCards) % totalCards);
      if (relIndex > totalCards / 2) relIndex -= totalCards;

      const isActive = relIndex === 0;
      const isAdjacent = Math.abs(relIndex) === 1;

      tl.to(card, {
        xPercent: relIndex * 100,
        scale: isActive ? 0.9 : isAdjacent ? 0.8 : 0.6,
        opacity: Math.abs(relIndex) <= 2 ? 1 : 0,
        visibility: Math.abs(relIndex) <= 2 ? 'visible' : 'hidden',
        zIndex: isActive ? 2 : isAdjacent ? 1 : 0,
        duration: 1.6,
        ease: 'power2.out',
        pointerEvents: isActive ? 'auto' : 'none',
      }, 0);

      if (isActive) {
        tl.to(card, {
          scale: 1,
          duration: 0.9,
          ease: 'power1.out',
        }, 0.8);
      }
    });
  }, [currentIndex, totalCards]);

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
      ease: 'power1.in',
      onComplete: () => {
        setCurrentIndex(nextIndex);
        isAnimatingRef.current = false;
      }
    });
  };

  const showNext = () => {
    animateAndSwitch((currentIndex + 1) % totalCards);
  };

  const showPrev = () => {
    animateAndSwitch((currentIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className={styles.galleryWrapper}>
      <button onClick={showPrev} className={styles.arrowButton}>‹</button>
      <div className={styles.gallery}>
        {cardsData.map((src, index) => (
          <div
            key={index}
            ref={(el) => {
              cardsRef.current[index] = el;
            }}
            className={styles.card}
          >
            {/* <img src={src} alt={`Card ${index + 1}`} className={styles.cardImage} /> */}
            <Image
              className={styles.cardImage}
              src={src}
              alt={`Card ${index + 1}`}
              fill
            />
          </div>
        ))}
      </div>
      <button onClick={showNext} className={styles.arrowButton}>›</button>
    </div>
  );
};

export default SlideScrollCards;
