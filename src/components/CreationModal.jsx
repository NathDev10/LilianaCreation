import React, { useState, useEffect } from 'react';

export default function CreationModal({ creation, onClose }) {
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!creation) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(10,10,10,0.88)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backdropFilter: 'blur(8px)',
        animation: 'fadeInUp 0.3s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: 'white',
          maxWidth: 920,
          width: '100%',
          maxHeight: '90vh',
          overflow: 'auto',
          position: 'relative',
          boxShadow: '0 40px 100px rgba(0,0,0,0.6)',
          animation: 'fadeInUp 0.3s ease',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'sticky',
            top: 16,
            float: 'right',
            marginRight: 16,
            zIndex: 10,
            background: 'var(--dark)',
            color: 'white',
            border: 'none',
            width: 36,
            height: 36,
            fontSize: '0.85rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'var(--font-body)',
            letterSpacing: 1,
          }}
        >
          ✕
        </button>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}>
          {/* Gallery */}
          <div style={{ padding: 28, background: 'var(--light)' }}>
            {/* Main image */}
            <div style={{
              width: '100%',
              paddingBottom: '100%',
              overflow: 'hidden',
              position: 'relative',
              marginBottom: 10,
              background: 'var(--light-gray)',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 10,
              }}>
                <span style={{ fontSize: '5rem', opacity: 0.3 }}>{creation.emoji}</span>
                <span style={{ fontFamily: 'var(--font-title)', color: 'var(--gray)', fontSize: '0.8rem', letterSpacing: 2, fontStyle: 'italic' }}>
                  Vue {activeImg + 1} / 4
                </span>
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: 6 }}>
              {[0, 1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: 60,
                    height: 60,
                    border: activeImg === i ? '1px solid var(--accent-gold)' : '1px solid var(--gray-light)',
                    background: 'var(--light-gray)',
                    cursor: 'pointer',
                    fontSize: '1.3rem',
                    transition: 'border 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: activeImg === i ? 1 : 0.5,
                  }}
                >
                  <span style={{ opacity: 0.4 }}>{creation.emoji}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div style={{ padding: '36px 32px' }}>
            <div style={{
              display: 'inline-block',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: 'var(--accent-gold)',
              marginBottom: 14,
            }}>
              {creation.category}
            </div>

            <h2 style={{
              fontFamily: 'var(--font-title)',
              fontSize: '2rem',
              fontWeight: 400,
              color: 'var(--dark)',
              marginBottom: 10,
              lineHeight: 1.15,
              letterSpacing: '0.5px',
            }}>
              {creation.name}
            </h2>

            <div style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.8rem',
              fontWeight: 300,
              color: 'var(--primary)',
              marginBottom: 20,
              letterSpacing: 1,
            }}>
              {creation.price} €
            </div>

            {/* Availability */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 24,
              fontSize: '0.72rem',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: creation.available ? '#5A8A5A' : '#8A5A5A',
            }}>
              <div style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: creation.available ? '#5A8A5A' : '#8A5A5A',
              }} />
              {creation.available ? 'Disponible' : 'Sur commande'}
            </div>

            <p style={{ color: 'var(--gray)', lineHeight: 1.85, marginBottom: 28, fontSize: '0.88rem' }}>
              {creation.description}
            </p>

            {/* Materials */}
            <div style={{ marginBottom: 32 }}>
              <p style={{
                fontSize: '0.68rem',
                fontWeight: 500,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'var(--gray)',
                marginBottom: 12,
              }}>
                Matières
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {creation.materials.map((mat) => (
                  <span key={mat} style={{
                    background: 'var(--light)',
                    color: 'var(--dark)',
                    padding: '5px 14px',
                    fontSize: '0.78rem',
                    border: '1px solid var(--gray-light)',
                    letterSpacing: '0.5px',
                  }}>
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Commander / Renseignements
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
