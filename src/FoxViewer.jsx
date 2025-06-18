import React, { useEffect, useRef } from 'react';
import createFoxLogo from '@metamask/logo';

export default function FoxViewer() {
  const containerRef = useRef();

  useEffect(() => {
    const viewer = createFoxLogo({
      targetElement: containerRef.current,
      width: 300,
      height: 300,
      followMouse: true
    });

    return () => viewer.stopAnimation();
  }, []);

  return (
    <div ref={containerRef} style={{ width: 300, height: 300 }} />
  );
}
