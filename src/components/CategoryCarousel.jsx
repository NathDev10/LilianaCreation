import React, { useRef, useEffect } from 'react';
import { getImageUrl } from '../utils/image';

const BASE_SPEED = 0.5; // px per frame

export default function CategoryCarousel({ images, height = 240 }) {
  const trackRef = useRef(null);
  const stateRef = useRef({ pos: 0, dragging: false, lastX: 0, velocity: BASE_SPEED });
  const rafRef = useRef(null);

  // Double images for infinite loop
  const doubled = [...images, ...images];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const tick = () => {
      const s = stateRef.current;
      const halfW = track.scrollWidth / 2;

      if (!s.dragging) {
        // Ease velocity back toward base speed after drag release
        s.velocity += (BASE_SPEED - s.velocity) * 0.04;
        s.pos += s.velocity;
      }

      // Seamless infinite loop
      if (halfW > 0) {
        if (s.pos >= halfW) s.pos -= halfW;
        if (s.pos < 0) s.pos += halfW;
      }

      track.style.transform = `translateX(-${s.pos}px)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const getX = (e) =>
    e.touches && e.touches.length > 0 ? e.touches[0].clientX : e.clientX;

  const onDragStart = (e) => {
    const s = stateRef.current;
    s.dragging = true;
    s.lastX = getX(e);
    s.velocity = 0;
  };

  const onDragMove = (e) => {
    const s = stateRef.current;
    if (!s.dragging) return;
    const x = getX(e);
    const dx = s.lastX - x;
    s.pos += dx;
    s.velocity = dx * 0.6;
    s.lastX = x;
  };

  const onDragEnd = () => {
    stateRef.current.dragging = false;
    // velocity carries momentum from last drag gesture
  };

  return (
    <div
      style={{
        overflow: 'hidden',
        height,
        cursor: 'grab',
        userSelect: 'none',
        touchAction: 'none',
      }}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', height: '100%', willChange: 'transform' }}
      >
        {doubled.map((src, i) => (
          <img
            key={i}
            src={getImageUrl(src)}
            alt=""
            draggable={false}
            style={{
              height: '100%',
              width: 'auto',
              objectFit: 'cover',
              flexShrink: 0,
              pointerEvents: 'none',
              display: 'block',
            }}
          />
        ))}
      </div>
    </div>
  );
}
