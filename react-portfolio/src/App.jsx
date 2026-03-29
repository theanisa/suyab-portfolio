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
        <div className="hero-copy">
          <h1 className="hero-title">Hello!<br />I'm Suyab</h1>
        </div>

        <div className="image-wrapper">
          {/* Use normal.jpg for large screens too; small screen behavior is unchanged */}
          <picture>
            <source media="(max-width: 768px)" srcSet="/images/normal.jpg" />
            <img src="/images/normal.jpg" className="main-img" alt="Portfolio" />
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
            <a href="https://www.facebook.com/suyab.truth/" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            <a href="https://suyabone.medium.com/" target="_blank" rel="noreferrer" aria-label="Blog"><i className="bi bi-medium"></i></a>
            <a href="https://www.instagram.com/suyab.truth" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://docs.google.com/document/d/1-xRaON2poZ51IDjzTPI8KF_drjJdLW1BBvVB64uJSVU/edit?usp=drivesdk" target="_blank" rel="noreferrer" aria-label="CV" className="cv-link">
              <i className="bi bi-file-earmark-person"></i>
            </a>
          </div>
        </div>
      </section>
      {/* <footer className="footer footer-small">© 2026<br />Designed by Anaura</footer> */}
    </>
  );
}

export default App;

