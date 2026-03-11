import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 32,
            height: 32,
            border: '1px solid var(--accent-gold)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: 'var(--font-title)',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--accent-gold)',
              letterSpacing: 1,
            }}>L</span>
          </div>
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
