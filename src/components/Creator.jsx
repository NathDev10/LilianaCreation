import React from 'react';

const values = [
  { numeral: 'I', title: 'Passion', desc: "Chaque création naît d'un amour profond pour la chapellerie et le beau geste artisanal." },
  { numeral: 'II', title: 'Éthique', desc: 'Matières naturelles, fournisseurs locaux, production responsable et respectueuse.' },
  { numeral: 'III', title: 'Excellence', desc: 'Un soin méticuleux apporté à chaque couture, chaque ornement, chaque finition.' },
  { numeral: 'IV', title: 'Unicité', desc: "Pas de série, pas de copie — chaque pièce est unique et conçue pour une seule femme." },
];

export default function Creator() {
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
            La créatrice
          </p>
          <h2 className="section-title">Rencontrez Liliana</h2>
          <div style={{ width: 40, height: 1, background: 'var(--accent-gold)', margin: '20px auto 0' }} />
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 80,
          alignItems: 'center',
          marginBottom: 72,
        }}>
          {/* Photo */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                width: 300,
                height: 300,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '1px solid var(--accent-gold)',
                boxShadow: '0 20px 60px rgba(10,10,10,0.12)',
                position: 'relative',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'var(--light-gray)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 10,
                }}>
                  <span style={{ fontSize: '4.5rem', opacity: 0.25 }}>👩‍🎨</span>
                  <span style={{ fontFamily: 'var(--font-title)', color: 'var(--gray)', fontSize: '0.85rem', letterSpacing: 2 }}>
                    Photo de Liliana
                  </span>
                </div>
              </div>
              {/* Outer ring */}
              <div style={{
                position: 'absolute',
                inset: -14,
                borderRadius: '50%',
                border: '1px solid rgba(180,154,94,0.2)',
              }} />
              {/* Name card */}
              <div style={{
                position: 'absolute',
                bottom: 14,
                right: -14,
                background: 'white',
                padding: '10px 18px',
                boxShadow: 'var(--shadow)',
                border: '1px solid rgba(180,154,94,0.2)',
              }}>
                <span style={{ fontFamily: 'var(--font-title)', fontWeight: 400, color: 'var(--dark)', fontSize: '1rem', letterSpacing: 1 }}>Liliana</span>
                <br />
                <span style={{ fontSize: '0.7rem', color: 'var(--gray)', letterSpacing: 1, textTransform: 'uppercase' }}>Chapelière · Créatrice</span>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div>
            <blockquote style={{
              fontFamily: 'var(--font-title)',
              fontSize: '1.5rem',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--primary)',
              borderLeft: '2px solid var(--accent-gold)',
              paddingLeft: 28,
              marginBottom: 32,
              lineHeight: 1.55,
            }}>
              " Un chapeau n’est pas seulement un accessoire : c’est la touche finale qui révèle l’élégance et la personnalité de celle qui le porte. "
            </blockquote>
            <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 18, fontSize: '0.92rem' }}>
              Née à Bogota, en Colombie, Liliana se passionne très tôt pour la mode et rêve de Paris, capitale mondiale de l’élégance. Après une formation à l’École de Création Textile de Bogota, elle s’installe à Paris au début des années 90 pour étudier le stylisme à l’Institut Supérieur de la Mode.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 18, fontSize: '0.92rem' }}>
              Son parcours la mène également en Italie, où elle se forme à la bijouterie, avant de rejoindre la maison Christian Lacroix en 1996. Elle y travaille pendant quatre ans et y développe un sens aigu du détail et de l’élégance.
            </p>
            <p style={{ color: 'var(--gray)', lineHeight: 1.9, marginBottom: 36, fontSize: '0.92rem' }}>
              Au début des années 2000, Liliana ouvre sa boutique rue des Entrepreneurs, dans le 15ᵉ arrondissement de Paris. Elle se spécialise alors dans la création de chapeaux de cérémonie faits sur mesure. Ses créations, mêlant savoir-faire artisanal et inspiration couture, séduisent aujourd’hui une clientèle parisienne et internationale.            </p>
            <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', borderTop: '1px solid var(--gray-light)', paddingTop: 32 }}>
              {[
                { number: '15', label: "Ans d'expérience" },
                { number: '200', label: 'Créations' },
                { number: '∞', label: 'Passion' },
              ].map(({ number, label }, i) => (
                <div key={label} style={{
                  textAlign: 'center',
                  padding: '0 32px',
                  borderLeft: i > 0 ? '1px solid var(--gray-light)' : 'none',
                }}>
                  <div style={{ fontFamily: 'var(--font-title)', fontSize: '2rem', fontWeight: 300, color: 'var(--primary)', letterSpacing: 1 }}>{number}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--gray)', letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 4 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values 
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 1,
          background: 'var(--gray-light)',
        }}>
          {values.map(({ numeral, title, desc }) => (
            <div key={title} style={{
              background: 'var(--light)',
              padding: '36px 32px',
              transition: 'background 0.35s ease',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'white'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--light)'; }}
            >
              <div style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.1rem',
                color: 'var(--accent-gold)',
                marginBottom: 14,
                letterSpacing: 2,
              }}>{numeral}</div>
              <h3 style={{
                fontFamily: 'var(--font-title)',
                fontSize: '1.3rem',
                fontWeight: 400,
                color: 'var(--dark)',
                marginBottom: 12,
              }}>{title}</h3>
              <p style={{ color: 'var(--gray)', fontSize: '0.85rem', lineHeight: 1.75 }}>{desc}</p>
            </div>
          ))}
        </div>*/}
      </div>
    </section>
  );
}
