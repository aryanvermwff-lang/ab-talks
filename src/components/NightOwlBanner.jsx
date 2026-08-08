import './NightOwlBanner.css';

export default function NightOwlBanner({ isNightOwl, onDismiss }) {
  if (!isNightOwl) return null;

  return (
    <div className="night-owl-banner" id="night-owl-banner">
      <div className="night-owl-banner__inner container">
        <span className="night-owl-banner__text">
          🦉 <strong>Night Owl Mode</strong> — We see you grinding while others sleep. Respect.
        </span>
        <button
          className="night-owl-banner__close"
          onClick={onDismiss}
          aria-label="Dismiss Night Owl banner"
          id="night-owl-dismiss"
        >
          ×
        </button>
      </div>
    </div>
  );
}
