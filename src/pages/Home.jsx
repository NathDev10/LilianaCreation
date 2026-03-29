import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Creator from '../components/Creator';
import Categories from '../components/Categories';
import Contact from '../components/Contact';

function Footer() {
  return (
    <footer style={{
      background: '#050505',
      borderTop: '1px solid rgba(180,154,94,0.12)',
      padding: '40px 0',
    }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 28,
            height: 28,
            border: '1px solid rgba(180,154,94,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.8rem', color: 'rgba(180,154,94,0.6)' }}>L</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-title)',
            fontSize: '1.1rem',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '2px',
          }}>
            Liliana Création
          </span>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.18)', fontSize: '0.72rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          Chapeaux · Bibis · Bandeaux — Paris
        </p>
        <p style={{ color: 'rgba(255,255,255,0.12)', fontSize: '0.72rem', letterSpacing: '1px' }}>
          © {new Date().getFullYear()} Liliana Création. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
