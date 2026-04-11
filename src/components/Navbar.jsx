import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getImageUrl } from '../utils/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.92)',
      backdropFilter: 'blur(16px)',
      boxShadow: scrolled ? '0 1px 0 rgba(180,154,94,0.25)' : 'none',
      transition: 'all 0.35s ease',
      borderBottom: scrolled ? '1px solid rgba(180,154,94,0.2)' : '1px solid transparent',
    }}>
      {/* Top contact strip */}
      <div style={{
        borderBottom: '1px solid rgba(180,154,94,0.15)',
        background: 'rgba(180,154,94,0.04)',
      }}>
        <div className="container" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 28,
          height: 30,
        }}>
          <a href="tel:+33766079145" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.68rem',
            letterSpacing: '0.8px',
            color: 'var(--gray)',
            transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </svg>
            +33 7 66 07 91 45
          </a>
          <a href="mailto:liliana23acero23@gmail.com" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            fontSize: '0.68rem',
            letterSpacing: '0.8px',
            color: 'var(--gray)',
            transition: 'color 0.2s ease',
          }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--gray)'}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
            </svg>
            liliana23acero23@gmail.com
          </a>
        </div>
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <img
            src={getImageUrl('images/Home/logo.png')}
            alt="Liliana Création"
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />
          <span style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.3rem',
            fontWeight: 400,
            color: 'var(--dark)',
            letterSpacing: '1.5px',
          }}>
            Liliana Création
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul style={{ display: 'flex', gap: 44, alignItems: 'center' }} className="nav-desktop">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/nos-creations', label: 'Nos Créations' },
          ].map(({ path, label }) => (
            <li key={path}>
              <Link to={path} style={{
                fontWeight: 400,
                fontSize: '0.82rem',
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                color: isActive(path) ? 'var(--primary)' : 'var(--dark)',
                borderBottom: isActive(path) ? '1px solid var(--primary)' : '1px solid transparent',
                paddingBottom: 3,
                transition: 'all 0.2s ease',
              }}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary" style={{ padding: '10px 24px', fontSize: '0.75rem' }}>
              Contact
            </a>
          </li>
        </ul>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-burger"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'none',
            flexDirection: 'column',
            gap: 5,
            padding: 8,
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} style={{
              display: 'block',
              width: 22,
              height: 1,
              background: 'var(--dark)',
              transition: 'all 0.3s ease',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'white',
          borderTop: '1px solid var(--gray-light)',
          padding: '20px 32px 28px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }} className="nav-mobile-menu">
          {[
            { path: '/', label: 'Accueil' },
            { path: '/nos-creations', label: 'Nos Créations' },
          ].map(({ path, label }) => (
            <Link key={path} to={path} style={{
              display: 'block',
              padding: '14px 0',
              fontWeight: 400,
              fontSize: '0.82rem',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: isActive(path) ? 'var(--primary)' : 'var(--dark)',
              borderBottom: '1px solid var(--gray-light)',
            }}>
              {label}
            </Link>
          ))}
          <a href="#contact" className="btn-primary" style={{ marginTop: 20, textAlign: 'center', justifyContent: 'center' }}>
            Contact
          </a>
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--gray-light)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a href="tel:+33766079145" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--gray)', letterSpacing: '0.5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              +33 7 66 07 91 45
            </a>
            <a href="mailto:liliana23acero23@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: '0.78rem', color: 'var(--gray)', letterSpacing: '0.5px' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              liliana23acero23@gmail.com
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
