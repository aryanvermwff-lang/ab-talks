import { Link, useLocation } from 'react-router-dom';
import { socialLinks } from '../data/mockData';
import './Navbar.css';

export default function Navbar({ variant = 'light' }) {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const isTracks = location.pathname === '/tracks';
  const isDashboard = location.pathname === '/dashboard';

  function handleTracksClick(e) {
    if (isLanding) {
      e.preventDefault();
      const tracksEl = document.getElementById('tracks');
      if (tracksEl) {
        tracksEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <nav className={`navbar navbar--${variant}`} id="main-nav">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" id="nav-logo">
          <span className="navbar__logo-text">AB TALKS</span>
        </Link>

        <div className="navbar__links">
          <Link
            to="/"
            className={`navbar__link ${isLanding ? 'navbar__link--active' : ''}`}
            id="nav-home"
          >
            Home
          </Link>
          <Link
            to="/tracks"
            className={`navbar__link ${isTracks ? 'navbar__link--active' : ''}`}
            id="nav-tracks"
            onClick={handleTracksClick}
          >
            Tracks
          </Link>
          <Link
            to="/dashboard"
            className={`navbar__link ${isDashboard ? 'navbar__link--active' : ''}`}
            id="nav-dashboard"
          >
            Dashboard
          </Link>
        </div>

        <div className="navbar__actions">
          <a
            href={socialLinks.discord}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__discord-badge"
            id="nav-discord-link"
            title="Join Discord Community"
          >
            👾 Community
          </a>
          {variant === 'light' ? (
            <Link to="/tracks" className="btn-primary" id="nav-cta">
              EXPLORE TRACKS →
            </Link>
          ) : (
            <Link to="/tracks" className="btn-dark" id="nav-tracks-cta" style={{ fontSize: '0.75rem', padding: '6px 12px' }}>
              ALL TRACKS 🌐
            </Link>
          )}
        </div>

        {/* Mobile quick CTA */}
        <Link to="/tracks" className="navbar__mobile-cta btn-primary" id="nav-mobile-cta">
          TRACKS →
        </Link>
      </div>
    </nav>
  );
}
