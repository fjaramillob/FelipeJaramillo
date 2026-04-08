import { useEffect } from 'react';

const REFERRAL_URL =
  'https://contrata.directv.getpartners.cl/ingresa-oportunidad?seller=FELIPEJ0506';

export default function Directv() {
  useEffect(() => {
    window.location.replace(REFERRAL_URL);
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#0a0a0a',
        color: '#ffffff',
        fontFamily: 'Inter, system-ui, sans-serif',
        fontSize: '1rem',
        letterSpacing: '0.05em',
        opacity: 0.6,
      }}
    >
      Redirigiendo…
    </div>
  );
}
