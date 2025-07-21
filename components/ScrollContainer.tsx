import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import styles from './ScrollContainer.module.css'

interface ScrollContainerProps {
  h1Ref: React.RefObject<HTMLSpanElement | null>;
  h2Ref: React.RefObject<HTMLSpanElement | null>;
}

const phrases = [
  'unpredictable rate increases',
  'lack of transparency',
  'implementation headaches',
  'claim denials',
  'frustrated users',
];

const ScrollContainer: React.FC<ScrollContainerProps> = ({ h1Ref, h2Ref }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  const container = containerRef.current;
  const textEl = textRef.current;
  const h1El = h1Ref.current;
  const h2El = h2Ref.current;

  if (!container || !textEl || !h1El || !h2El) return;

  const totalWidth = textEl.scrollWidth / 2;

  const scrollTween = gsap.to(textEl, {
    x: `-=${totalWidth}`,
    duration: 30,
    ease: 'linear',
    repeat: -1,
  });

  const tl = gsap.timeline({ delay: 3 });

  tl.to(container, {
    width: 0,
    opacity: 0,
    display: 'none',
    transformOrigin: 'center',
    duration: 3,
    ease: 'power4.in',
  })
  .to([h1El, h2El], {
      color: '#00B684',
      fontStyle: 'italic',
      duration: 0.4,
      ease: 'power1.in',
    });

  return () => {
    scrollTween.kill();
    tl.kill();
  };
}, [h1Ref, h2Ref]);


  return (
    <span
      ref={containerRef}
      className={styles.scrollingTextContainer}
    >
      <div ref={textRef} className="flex gap-12 items-center h-full">
        {[...phrases, ...phrases].map((phrase, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-8 text-base"
          >
            <Image src="Illo.svg" width={16} height={16} alt="" />
            <p key={i} className={styles.scrollingText}>
              {phrase}
            </p>
          </div>
        ))}
      </div>
    </span>
  );
};

export default ScrollContainer;