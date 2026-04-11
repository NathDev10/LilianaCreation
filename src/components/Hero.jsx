import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from '../utils/image';

const menuImages = [
  'images/Home/Menu/IMG_0191.jpg',
  'images/Home/Menu/IMG_0165.jpg',
  'images/Home/Menu/IMG_0166.jpg',
  'images/Home/Menu/IMG_0167.jpg',
  'images/Home/Menu/IMG_0171.jpg',
  'images/Home/Menu/IMG_0175.jpg',
  'images/Home/Menu/IMG_0176.jpg'
  
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent(prev => (prev + 1) % menuImages.length);
        setFade(true);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const goTo = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 400);
  };

  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #FAF7F2 0%, #F4EDE5 40%, #EEE2D8 75%, #E8D8CF 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 102,
    }}>
      {/* Decorative geometric lines */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '6%',
        width: 280,
        height: 280,
        border: '1px solid rgba(139,74,92,0.10)',
        borderRadius: 0,
        transform: 'rotate(15deg)',
      }} />
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '9%',
        width: 200,
        height: 200,
        border: '1px solid rgba(139,74,92,0.06)',
        borderRadius: 0,
        transform: 'rotate(15deg)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '18%',
        left: '4%',
        width: 180,
        height: 180,
        border: '1px solid rgba(180,154,94,0.12)',
        borderRadius: '50%',
      }} />
      {/* Subtle blush bleed */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(180,154,94,0.08) 0%, transparent 70%)',
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <p style={{
          color: 'var(--accent-gold)',
          fontFamily: 'var(--font-body)',
          fontWeight: 300,
          fontSize: '0.75rem',
          letterSpacing: '4px',
          textTransform: 'uppercase',
          marginBottom: 32,
          animation: 'fadeInUp 0.7s ease forwards',
        }}>
          Artisanat de haute coiffe — Paris
        </p>

        {/* Slideshow */}
        <div style={{
          position: 'relative',
          display: 'inline-block',
          margin: '0 auto 40px',
          borderRadius: 4,
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(42,31,27,0.15)',
          animation: 'fadeInUp 0.8s ease 0.1s forwards',
          opacity: 0,
          maxHeight: 'calc(100vh - 280px)',
          background: '#EEE2D8',
        }}>
          <img
            src={getImageUrl(menuImages[current])}
            alt={`Création Liliana ${current + 1}`}
            style={{
              display: 'block',
              maxHeight: 'calc(100vh - 280px)',
              maxWidth: '90vw',
              width: 'auto',
              height: 'auto',
              opacity: fade ? 1 : 0,
              transition: 'opacity 0.4s ease',
            }}
          />

          {/* Navigation dots */}
          <div style={{
            position: 'absolute',
            bottom: 12,
            left: 0,
            right: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 6,
          }}>
            {menuImages.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 20 : 6,
                  height: 6,
                  borderRadius: 3,
                  border: 'none',
                  background: i === current ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.45)',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <button
            onClick={() => goTo((current - 1 + menuImages.length) % menuImages.length)}
            style={{
              position: 'absolute',
              top: '50%',
              left: 10,
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              cursor: 'pointer',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}
          >‹</button>
          <button
            onClick={() => goTo((current + 1) % menuImages.length)}
            style={{
              position: 'absolute',
              top: '50%',
              right: 10,
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.6)',
              border: 'none',
              borderRadius: '50%',
              width: 32,
              height: 32,
              cursor: 'pointer',
              fontSize: 14,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(4px)',
            }}
          >›</button>
        </div>

        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.8s ease 0.3s forwards',
          opacity: 0,
        }}>
          <Link to="/nos-creations" className="btn-primary" style={{ fontSize: '0.8rem', padding: '16px 40px' }}>
            Découvrir les créations
          </Link>
          <a href="#contact" className="btn-outline" style={{
            fontSize: '0.8rem',
            padding: '15px 40px',
          }}>
            Prendre contact
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 68,
        background: 'linear-gradient(to bottom, transparent, var(--white))',
      }} />
    </section>
  );
}
