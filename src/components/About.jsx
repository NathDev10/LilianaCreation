import React from 'react';
import { getImageUrl } from '../utils/image';

// Chemin vers la photo de la boutique
// → placez le fichier dans public/images/about/boutique.jpg
const BOUTIQUE_PHOTO = 'images/Home/Devanture.png'; // ex: 'images/about/boutique.jpg'

export default function About() {
  return (
    <section id="about" style={{ padding: '110px 0', background: 'var(--white)' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              paddingBottom: '110%',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(10,10,10,0.1)',
            }}>
              {getImageUrl(BOUTIQUE_PHOTO) ? (
                <img
                  src={getImageUrl(BOUTIQUE_PHOTO)}
                  alt="La boutique Liliana Création"
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--light)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 14,
                }}>
                  <span style={{ fontSize: '4.5rem', opacity: 0.3 }}>🎩</span>
                  <span style={{ fontFamily: 'var(--font-title)', fontSize: '0.9rem', color: 'var(--gray)', letterSpacing: 2 }}>
                    Photo de la boutique
                  </span>
                </div>
              )}
            </div>
            {/* Gold corner accent */}
            <div style={{
              position: 'absolute',
              bottom: -16,
              right: -16,
              width: 90,
              height: 90,
              background: 'var(--accent-gold)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 2,
            }}>
              <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'white' }}>
                Fait
              </span>
              <span style={{ fontSize: '0.6rem', fontWeight: 600, letterSpacing: 2, textTransform: 'uppercase', color: 'white' }}>
                main
              </span>
            </div>
          </div>

          {/* Content */}
          <div>
            <p style={{
              color: 'var(--accent-gold)',
              fontWeight: 500,
              fontSize: '0.72rem',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>
              Notre boutique
            </p>
            <h2 className="section-title" style={{ marginBottom: 4 }}>
              L'art de la coiffe
            </h2>
            <h2 className="section-title" style={{ fontStyle: 'italic', color: 'var(--primary)', marginBottom: 24 }}>
              à la française
            </h2>
            <div style={{ width: 40, height: 1, background: 'var(--accent-gold)', marginBottom: 32 }} />

            <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 20, fontSize: '0.92rem' }}>
              Nichée dans le 15ᵉ arrondissement de Paris, la boutique Liliana Création est un lieu dédié à l’élégance artisanale. Chaque chapeau, bibi et bandeau est imaginé et réalisé avec soin dans notre atelier, à partir de matières nobles sélectionnées pour leur qualité et leur finesse.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 40, fontSize: '0.92rem' }}>
              Notre savoir-faire de chapellerie française s’allie à une sensibilité contemporaine pour donner naissance à des créations uniques, pensées pour sublimer chaque silhouette et accompagner les moments précieux de votre vie. Chaque pièce raconte une histoire — la vôtre.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                'Matières naturelles et nobles',
                'Production artisanale locale',
                'Chaque pièce est unique',
              ].map((label) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div style={{ width: 20, height: 1, background: 'var(--accent-gold)', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.85rem', color: 'var(--dark)', letterSpacing: '0.5px' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
