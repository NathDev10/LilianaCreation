import React from 'react';
import { getImageUrl } from '../utils/image';

const BOUTIQUE_PHOTO = 'images/Home/Devanture.png';

const points = [
  {
    title: "Enti\u00e8rement sur mesure",
    text: "Chaque chapeau, bibi et bandeau est con\u00e7u uniquement pour vous \u2014 forme, couleur et mati\u00e8res selon vos envies.",
  },
  {
    title: "Livr\u00e9 en moins d'une semaine",
    text: "La confection d'une pi\u00e8ce prend moins de 7 jours, pour que vous soyez pr\u00eate \u00e0 temps pour votre \u00e9v\u00e9nement.",
  },
  {
    title: "Mati\u00e8res au choix",
    text: "Couleurs, tissus, ornements \u2014 tout est s\u00e9lectionnable pour que votre pi\u00e8ce vous ressemble vraiment.",
  },
  {
    title: "Rendez-vous 1h avec la cr\u00e9atrice",
    text: "Prenez un rendez-vous priv\u00e9 pour co-designer votre chapeau, \u00eatre conseill\u00e9e et repartir avec une vision sur mesure.",
  },
];

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
                  alt="La boutique Liliana Creation"
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
              L&apos;art de la coiffe
            </h2>
            <h2 className="section-title" style={{ fontStyle: 'italic', color: 'var(--primary)', marginBottom: 24 }}>
              à la française
            </h2>
            <div style={{ width: 40, height: 1, background: 'var(--accent-gold)', marginBottom: 32 }} />

            <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 40, fontSize: '0.92rem' }}>
              Nichée dans le 15e arrondissement de Paris, la boutique Liliana Création est un lieu dédié à l'élégance artisanale. Chaque création est imaginée et réalisée entièrement sur mesure, selon vos envies — forme, couleur, matières — pour vous accompagner dans les moments les plus précieux de votre vie.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {points.map(({ title, text }) => (
                <div key={title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <span style={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.55rem',
                    marginTop: 5,
                    flexShrink: 0,
                  }}>
                    ✦
                  </span>
                  <div>
                    <p style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--dark)', letterSpacing: '0.4px', marginBottom: 3 }}>
                      {title}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--gray)', lineHeight: 1.7 }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
