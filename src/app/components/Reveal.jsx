'use client';

import React, { useEffect, useRef, useState } from 'react';

function Reveal({ children, className = '', delay = 0, direction = 'up', scale = false }) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8%' }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const revealClasses = [
    'reveal',
    `reveal-${direction}`,
    scale ? 'reveal-scale' : '',
    isVisible ? 'reveal-visible' : '',
    className,
  ].filter(Boolean).join(' ');

  return React.cloneElement(React.Children.only(children), {
    ref: elementRef,
    className: `${children.props.className || ''} ${revealClasses}`.trim(),
    style: {
      ...children.props.style,
      '--reveal-delay': `${delay}ms`,
    },
  });
}

export default Reveal;
