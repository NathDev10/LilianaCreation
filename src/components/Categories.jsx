import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import CategoryCarousel from './CategoryCarousel';

export default function Categories() {
  return (
    <section style={{ padding: '110px 0', background: 'var(--light)' }}>
      <div className="container">
        <div className="section-header">
          <p style={{
            color: 'var(--accent-gold)',
            fontWeight: 500,
            fontSize: '0.72rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}>
            Collections
          </p>
          <h2 className="section-title">Nos Créations</h2>
          <div style={{ width: 40, height: 1, background: 'var(--accent-gold)', margin: '20px auto 24px' }} />
          <p className="section-subtitle">
            Trois univers, une même passion pour l'élégance artisanale
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 2,
          background: 'var(--gray-light)',
        }}>
          {categories.filter((cat) => cat.showOnHome !== false).map((cat) => (
            <div key={cat.id} style={{
              background: 'white',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              transition: 'background 0.35s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--light)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'white'; }}
            >
              {/* Carousel */}
              <div style={{ position: 'relative', borderBottom: '1px solid var(--gray-light)' }}>
                <CategoryCarousel images={cat.carouselImages} height={240} />
                <div style={{
                  position: 'absolute',
                  bottom: 14,
                  right: 14,
                  background: 'white',
                  border: '1px solid rgba(180,154,94,0.4)',
                  padding: '5px 14px',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: 1,
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  pointerEvents: 'none',
                }}>
                  À partir de {cat.startingPrice} €
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '28px 28px 36px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{
                  fontFamily: 'var(--font-title)',
                  fontSize: '1.6rem',
                  fontWeight: 400,
                  color: 'var(--dark)',
                  marginBottom: 14,
                  letterSpacing: '0.5px',
                }}>
                  {cat.name}
                </h3>
                <p style={{
                  color: 'var(--gray)',
                  fontSize: '0.87rem',
                  lineHeight: 1.8,
                  marginBottom: 28,
                  flexGrow: 1,
                }}>
                  {cat.description}
                </p>
                <Link
                  to={`/nos-creations?category=${cat.id}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    transition: 'gap 0.25s ease',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.gap = '16px'; }}
                  onMouseLeave={e => { e.currentTarget.style.gap = '10px'; }}
                >
                  Voir la collection
                  <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--primary)', verticalAlign: 'middle' }} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 56 }}>
          <Link to="/nos-creations" className="btn-primary" style={{ fontSize: '0.78rem', padding: '16px 44px' }}>
            Voir toutes les créations
          </Link>
        </div>
      </div>
    </section>
  );
}
