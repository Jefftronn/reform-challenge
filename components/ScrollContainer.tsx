import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

interface ScrollContainerProps {
  h1Ref: React.RefObject<HTMLHeadingElement | null>;
}

const phrases = [
  'unpredictable rate increases',
  'lack of transparency',
  'implementation headaches',
  'claim denials',
  'frustrated users',
];

const ScrollContainer: React.FC<ScrollContainerProps> = ({ h1Ref }) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const textEl = textRef.current;
    const h1El = h1Ref.current;
    if (!container || !textEl || !h1El) return;

    const totalWidth = textEl.scrollWidth / 2;

    const scrollTween = gsap.to(textEl, {
      x: `-=${totalWidth}`,
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
  }, [h1Ref]);

  return (
    <span
      ref={containerRef}
      className="inline-block overflow-hidden align-middle border-2 border-solid border-[#ccc] rounded-lg p-4 whitespace-nowrap scrolling-text-container"
    >
      <div ref={textRef} className="flex gap-12 items-center h-full">
        {[...phrases, ...phrases].map((phrase, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-8 text-base"
          >
            <Image src="Illo.svg" width={16} height={16} alt="" />
            <p key={i} className="scrolling-text">
              {phrase}
            </p>
          </div>
        ))}
      </div>
    </span>
  );
};

export default ScrollContainer;