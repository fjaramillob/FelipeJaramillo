import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Lenis creates its own RAF by default if autoRaf is true (which is the default acting in newer ver),
    // but just to be sure we can hook into window.requestAnimationFrame if it's not.
    // In latest lenis, it handles it, but standard setup:
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <main style={{ minHeight: '100vh' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
