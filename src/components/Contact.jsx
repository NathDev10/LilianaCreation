import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'VOTRE_SERVICE_ID';
const TEMPLATE_ID = 'VOTRE_TEMPLATE_ID';
const PUBLIC_KEY = 'VOTRE_PUBLIC_KEY';

const contactInfos = [
  { label: 'Adresse', value: '62 ter Rue des Entrepreneurs, 75015 Paris' },
  { label: 'Téléphone', value: '+33 7 66 07 91 45' },
  { label: 'Email', value: 'contact@liliana-creation.fr' },
  { label: 'Horaires', value: 'Mardi – Samedi : 10h – 18h' },
];

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '110px 0', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Top gold line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 1,
        background: 'linear-gradient(90deg, transparent, var(--accent-gold), transparent)',
      }} />

      <div className="container">
        <div className="section-header" style={{ marginBottom: 64 }}>
          <p style={{
            color: 'var(--accent-gold)',
            fontWeight: 500,
            fontSize: '0.72rem',
            letterSpacing: '3px',
            textTransform: 'uppercase',
            marginBottom: 14,
          }}>
            Parlons-nous
          </p>
          <h2 className="section-title" style={{ color: 'white', fontWeight: 300 }}>Contactez-nous</h2>
          <div style={{ width: 40, height: 1, background: 'var(--accent-gold)', margin: '20px auto 20px' }} />
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.4)' }}>
            Commande sur mesure, question, ou simple envie de nous rendre visite
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 48,
        }}>
          {/* Infos */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-title)',
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: 400,
              letterSpacing: 1,
              marginBottom: 32,
              paddingBottom: 16,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              Informations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 40 }}>
              {contactInfos.map(({ label, value }) => (
                <div key={label}>
                  <div style={{
                    color: 'var(--accent-gold)',
                    fontSize: '0.68rem',
                    fontWeight: 500,
                    letterSpacing: '2.5px',
                    textTransform: 'uppercase',
                    marginBottom: 5,
                  }}>
                    {label}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.9rem', fontWeight: 300 }}>
                    {value}
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div>
              <p style={{
                color: 'rgba(255,255,255,0.25)',
                fontSize: '0.68rem',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                marginBottom: 14,
              }}>
                Suivez nos créations
              </p>
              <div style={{ display: 'flex', gap: 10 }}>
                {['Instagram', 'Facebook'].map((s) => (
                  <a key={s} href="#" style={{
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'rgba(255,255,255,0.5)',
                    padding: '8px 18px',
                    fontSize: '0.72rem',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    transition: 'all 0.25s ease',
                    display: 'inline-block',
                  }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = 'var(--accent-gold)';
                      e.currentTarget.style.color = 'var(--accent-gold)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                      e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-title)',
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: 400,
              letterSpacing: 1,
              marginBottom: 32,
              paddingBottom: 16,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              Envoyer un message
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { name: 'name', label: 'Nom', type: 'text', placeholder: 'Marie Dupont' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'marie@exemple.fr' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label style={{
                    display: 'block',
                    color: 'rgba(255,255,255,0.35)',
                    fontSize: '0.68rem',
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    marginBottom: 8,
                  }}>
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    value={form[name]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    required
                    style={{
                      width: '100%',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      borderRadius: 0,
                      padding: '13px 16px',
                      color: 'white',
                      fontSize: '0.9rem',
                      fontWeight: 300,
                      outline: 'none',
                      transition: 'border 0.25s',
                      fontFamily: 'var(--font-body)',
                    }}
                    onFocus={e => { e.target.style.borderColor = 'var(--accent-gold)'; }}
                    onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              ))}
              <div>
                <label style={{
                  display: 'block',
                  color: 'rgba(255,255,255,0.35)',
                  fontSize: '0.68rem',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Bonjour, je souhaite commander une pièce sur mesure pour..."
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 0,
                    padding: '13px 16px',
                    color: 'white',
                    fontSize: '0.9rem',
                    fontWeight: 300,
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'var(--font-body)',
                    transition: 'border 0.25s',
                  }}
                  onFocus={e => { e.target.style.borderColor = 'var(--accent-gold)'; }}
                  onBlur={e => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary"
                style={{ justifyContent: 'center', opacity: status === 'sending' ? 0.6 : 1 }}
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
              </button>

              {status === 'success' && (
                <div style={{
                  borderLeft: '2px solid var(--accent-gold)',
                  paddingLeft: 16,
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                }}>
                  Message envoyé avec succès. Je vous répondrai dans les meilleurs délais.
                </div>
              )}
              {status === 'error' && (
                <div style={{
                  borderLeft: '2px solid var(--primary)',
                  paddingLeft: 16,
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                }}>
                  Une erreur est survenue. Veuillez réessayer ou nous écrire directement.
                </div>
              )}
            </form>
          </div>

          {/* Map */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-title)',
              color: 'white',
              fontSize: '1.3rem',
              fontWeight: 400,
              letterSpacing: 1,
              marginBottom: 32,
              paddingBottom: 16,
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              Nous trouver
            </h3>
            <div style={{
              overflow: 'hidden',
              height: 300,
              position: 'relative',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(10,10,10,0.85)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'center',
                gap: 16,
                padding: 28,
              }}>
                <p style={{
                  color: 'var(--accent-gold)',
                  fontSize: '0.68rem',
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                }}>
                  Intégration Google Maps
                </p>
                <iframe
                src="https://share.google/yATw8gOHWDdDTnpAL"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation boutique"
              />
              </div>
              {/* Uncomment and replace URL when ready:
              <iframe
                src="https://share.google/ua4k6s2EqgjLm0EC6"
                width="100%"
                height="300"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation boutique"
              />
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
