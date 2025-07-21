'use client'

import React from 'react';
import { useRef } from 'react';
import ScrollContainer from './ScrollContainer';
import styles from './HeroHeader.module.css';

const HeroHeader = () => {
const spanRef1 = useRef<HTMLSpanElement>(null);
const spanRef2 = useRef<HTMLSpanElement>(null);

return (
  <div className={styles.mainHeader}>
    <h1 className={styles.mainHeadingH1}>
      Health insurance that{' '}
      <span ref={spanRef1}>doesn’t get in{' '}</span>
      <ScrollContainer h1Ref={spanRef1} h2Ref={spanRef2} />
      {' '}
      <span ref={spanRef2}>the way.</span>
    </h1>
  </div>
);
}

export default HeroHeader;