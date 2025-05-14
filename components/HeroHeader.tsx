'use client'

import React from 'react';
import { useRef } from 'react';
import ScrollContainer from './ScrollContainer';

const HeroHeader = () => {
    const h1Ref = useRef<HTMLHeadingElement>(null);

  return (
    <div className="flex items-center justify-center w-full">
      <h1 className="main-heading-1 text-center">Health insurance that <span ref={h1Ref}>doesn’t get in{' '}
        <ScrollContainer h1Ref={h1Ref} />{' '}the way.</span></h1>
    </div>
  );
}

export default HeroHeader;