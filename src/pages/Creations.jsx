import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';
import { creations } from '../data/creations';
import { categories } from '../data/categories';
import { getImageUrl } from '../utils/image';

const filters = [
  { id: 'tous', label: 'Toutes les créations' },
  ...categories.map((c) => ({ id: c.id, label: c.name })),
];

export default function Creations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState(searchParams.get('category') || 'tous');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) setActiveFilter(cat);
  }, [searchParams]);

  const handleFilter = (filterId) => {
    setActiveFilter(filterId);
    if (filterId === 'tous') {
      setSearchParams({});
    } else {
      setSearchParams({ category: filterId });
    }
  };

  const filtered = activeFilter === 'tous'
    ? creations
    : creations.filter((c) => c.categories.includes(activeFilter));

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: 102, minHeight: '100vh', background: 'var(--light)' }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(160deg, #0A0A0A 0%, #1C1410 50%, #4A1020 100%)',
          padding: '72px 0 96px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Decorative geometry */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '8%',
            width: 220,
            height: 220,
            border: '1px solid rgba(180,154,94,0.07)',
            transform: 'rotate(12deg)',
          }} />
          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
            <p style={{
              color: 'var(--accent-gold)',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              L'atelier
            </p>
            <h1 style={{
              fontFamily: 'var(--font-title)',
              fontWeight: 300,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              color: 'white',
              marginBottom: 16,
              letterSpacing: '2px',
            }}>
              Nos Créations
            </h1>
            <div style={{ width: 40, height: 1, background: 'var(--accent-gold)', margin: '0 auto 20px' }} />
            <p style={{
              color: 'rgba(255,255,255,0.4)',
              fontSize: '0.87rem',
              maxWidth: 460,
              margin: '0 auto 40px',
              fontWeight: 300,
              lineHeight: 1.8,
              letterSpacing: '0.3px',
            }}>
              Chaque pièce est unique, imaginée et confectionnée à la main dans notre atelier parisien.
            </p>

            {/* Prix indicatifs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 12,
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'Chapeaux', price: 'à partir de 150 €' },
                { label: 'Bibis', price: 'à partir de 75 €' },
                { label: 'Bandeaux', price: 'à partir de 48 €' },
              ].map(({ label, price }) => (
                <div key={label} style={{
                  border: '1px solid rgba(180,154,94,0.35)',
                  padding: '10px 24px',
                  textAlign: 'center',
                }}>
                  <p style={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.65rem',
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                    marginBottom: 4,
                  }}>{label}</p>
                  <p style={{
                    color: 'rgba(255,255,255,0.75)',
                    fontFamily: 'var(--font-title)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    letterSpacing: '1px',
                  }}>{price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: '56px 32px 96px' }}>
          {/* Breadcrumb */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 40,
            fontSize: '0.72rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            color: 'var(--gray)',
          }}>
            <Link to="/" style={{ color: 'var(--primary)' }}>Accueil</Link>
            <span style={{ color: 'var(--gray-light)' }}>—</span>
            <span>Nos Créations</span>
            {activeFilter !== 'tous' && (
              <>
                <span style={{ color: 'var(--gray-light)' }}>—</span>
                <span style={{ textTransform: 'capitalize' }}>{activeFilter}</span>
              </>
            )}
          </div>

          {/* Filters */}
          <div style={{
            display: 'flex',
            gap: 0,
            flexWrap: 'wrap',
            marginBottom: 48,
            borderBottom: '1px solid var(--gray-light)',
          }}>
            {filters.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => handleFilter(id)}
                style={{
                  padding: '12px 28px',
                  border: 'none',
                  borderBottom: activeFilter === id ? '2px solid var(--primary)' : '2px solid transparent',
                  background: 'transparent',
                  color: activeFilter === id ? 'var(--primary)' : 'var(--gray)',
                  fontWeight: activeFilter === id ? 500 : 400,
                  fontSize: '0.78rem',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  marginBottom: -1,
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Count */}
          <p style={{
            color: 'var(--gray)',
            fontSize: '0.75rem',
            letterSpacing: '1.5px',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}>
            {filtered.length} création{filtered.length > 1 ? 's' : ''}
          </p>

          {/* Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(268px, 1fr))',
            gap: 2,
            background: 'var(--gray-light)',
          }}>
            {filtered.map((creation) => (
              <article
                key={creation.id}
                style={{
                  background: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                {/* Image */}
                <div style={{
                  height: 240,
                  background: 'var(--light-gray)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {getImageUrl(creation.mainImage) ? (
                    <img
                      src={getImageUrl(creation.mainImage)}
                      alt={creation.name}
                      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  ) : (
                    <span style={{ fontSize: '4rem', opacity: 0.2 }}>{creation.emoji}</span>
                  )}
                  {!creation.available && (
                    <div style={{
                      position: 'absolute',
                      top: 12,
                      left: 0,
                      background: 'var(--dark)',
                      color: 'rgba(255,255,255,0.7)',
                      padding: '4px 14px',
                      fontSize: '0.65rem',
                      fontWeight: 500,
                      letterSpacing: '1.5px',
                      textTransform: 'uppercase',
                    }}>
                      Sur commande
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '10px 16px 12px' }}>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    color: 'var(--accent-gold)',
                  }}>
                    {creation.categories.join(' · ')}
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '96px 0' }}>
              <p style={{
                color: 'var(--gray)',
                fontSize: '0.85rem',
                letterSpacing: '1px',
                fontFamily: 'var(--font-title)',
                fontStyle: 'italic',
              }}>
                Aucune création dans cette catégorie pour le moment.
              </p>
            </div>
          )}
        </div>
      </main>

      <Contact />

    </>
  );
  
}
