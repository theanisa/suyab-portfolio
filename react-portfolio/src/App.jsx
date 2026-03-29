import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const markLoaded = () => setLoading(false);

    if (document.readyState === 'complete') {
      const timeout = setTimeout(markLoaded, 300);
      return () => clearTimeout(timeout);
    }

    window.addEventListener('load', markLoaded);
    return () => window.removeEventListener('load', markLoaded);
  }, []);

  return (
    <>
      {loading && (
        <div className="loading-overlay">
          <div className="loader">
            <div className="spinner"></div>
            <p>Loading...</p>
          </div>
        </div>
      )}

      <section className={`hero ${loading ? 'hero-hidden' : 'hero-visible'}`}>
        <div className="image-wrapper">
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/normal.jpg" />
            <img src="/images/with name.jpg" className="main-img" alt="Portfolio" />
          </picture>
          <div className="vogue-name" aria-hidden="true">
            <span>S</span>
            <span>U</span>
            <span>Y</span>
            <span>A</span>
            <span>B</span>
          </div>
          <div className="grayscale-box"></div>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </section>
      <footer className="footer footer-small">© 2026<br />Designed by Anaura</footer>
    </>
  );
}

export default App;

