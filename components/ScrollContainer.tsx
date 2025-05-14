'use client'
import React from 'react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

interface ScrollContainerProps {
  h1Ref: React.RefObject<HTMLHeadingElement | null>;
}

const ScrollContainer: React.FC<ScrollContainerProps> = ({ h1Ref }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const text = 'unpredictable rate increases, lack of transparency, implementation headaches, claim denials, and frustrated users';

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const h1El = h1Ref.current;
    if (!container || !textEl || !h1El) return;

    textEl.innerHTML = `${text} \u00A0 ${text}`;

    const textWidth = textEl.offsetWidth / 2;

    const scrollTween = gsap.to(textEl, {
      x: `-=${textWidth}`,
      duration: 10,
      ease: 'linear',
      repeat: -1,
    });

    const fadeTween = gsap.to(container, {
      scale: 0,
      opacity: 0,
      duration: 2,
      delay: 2,
      ease: 'power2.inOut',
      onComplete: () => {
        gsap.set(container, { display: 'none' });
        gsap.to(h1El, {
          color: '#00B684',
          duration: 1,
          ease: 'power2.inOut',
        });
      },
    });

    return () => {
      scrollTween.kill();
      fadeTween.kill();
    };
  }, [text, h1Ref]);

  return (
    <span
      ref={containerRef}
      className="inline-block w-[600px] overflow-hidden align-middle border-2 border-solid border-[#ccc] rounded-lg p-6"
    >
      <span ref={textRef} className="inline-block whitespace-nowrap scrolling-text">
        <span>{text}</span>
      </span>
    </span>
  );
}

export default ScrollContainer;