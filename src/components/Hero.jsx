import React from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      background: 'linear-gradient(160deg, #0A0A0A 0%, #1C1410 45%, #4A1020 80%, #6B1A2B 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: 72,
    }}>
      {/* Decorative geometric lines */}
      <div style={{
        position: 'absolute',
        top: '8%',
        right: '6%',
        width: 280,
        height: 280,
        border: '1px solid rgba(180,154,94,0.08)',
        borderRadius: 0,
        transform: 'rotate(15deg)',
      }} />
      <div style={{
        position: 'absolute',
        top: '12%',
        right: '9%',
        width: 200,
        height: 200,
        border: '1px solid rgba(180,154,94,0.05)',
        borderRadius: 0,
        transform: 'rotate(15deg)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '18%',
        left: '4%',
        width: 180,
        height: 180,
        border: '1px solid rgba(255,255,255,0.04)',
        borderRadius: '50%',
      }} />
      {/* Subtle light bleed */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '15%',
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(180,154,94,0.06) 0%, transparent 70%)',
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

        <h1 style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 300,
          fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
          color: 'white',
          lineHeight: 1.05,
          marginBottom: 8,
          letterSpacing: '2px',
          animation: 'fadeInUp 0.8s ease 0.1s forwards',
          opacity: 0,
        }}>
          Des Coiffes
        </h1>
        <h1 style={{
          fontFamily: 'var(--font-title)',
          fontWeight: 300,
          fontStyle: 'italic',
          fontSize: 'clamp(3rem, 7.5vw, 6.5rem)',
          color: 'var(--accent-gold)',
          lineHeight: 1.05,
          marginBottom: 40,
          letterSpacing: '2px',
          animation: 'fadeInUp 0.8s ease 0.18s forwards',
          opacity: 0,
        }}>
          d'Exception
        </h1>

        <div style={{
          width: 40,
          height: 1,
          background: 'var(--accent-gold)',
          margin: '0 auto 40px',
          animation: 'fadeInUp 0.6s ease 0.25s forwards',
          opacity: 0,
        }} />

        <p style={{
          color: 'rgba(255,255,255,0.55)',
          fontSize: '0.9rem',
          maxWidth: 520,
          margin: '0 auto 48px',
          fontWeight: 300,
          lineHeight: 1.9,
          letterSpacing: '0.5px',
          animation: 'fadeInUp 0.8s ease 0.3s forwards',
          opacity: 0,
        }}>
          Bibis, chapeaux et bandeaux façonnés à la main par Liliana. Chaque pièce naît d'un
          geste artisanal précis, d'une matière noble et d'une vision unique de l'élégance.
        </p>

        <div style={{
          display: 'flex',
          gap: 16,
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: 'fadeInUp 0.8s ease 0.42s forwards',
          opacity: 0,
        }}>
          <Link to="/nos-creations" className="btn-primary" style={{ fontSize: '0.8rem', padding: '16px 40px' }}>
            Découvrir les créations
          </Link>
          <a href="#contact" className="btn-outline" style={{
            color: 'rgba(255,255,255,0.75)',
            borderColor: 'rgba(255,255,255,0.2)',
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
