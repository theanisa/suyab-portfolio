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
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hello! I'm<br />Md Suyab Ahmed</h1>
          </div>
        </div>
        <div className="image-wrapper">
          <img src="/images/with name.jpg" className="main-img" alt="Portfolio" />
          <div className="grayscale-box"></div>
          <div className="social-links">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook"></i></a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube"><i className="bi bi-youtube"></i></a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><i className="bi bi-instagram"></i></a>
          </div>
        </div>
      </section>
      <footer className="footer">© 2025<br />Designed by Anaura</footer>
    </>
  );
}

export default App;

