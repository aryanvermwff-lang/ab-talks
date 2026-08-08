import { Link } from 'react-router-dom';
import './TrackCard.css';

export default function TrackCard({ track, index }) {
  return (
    <div className="track-card" id={`track-card-${track.id}`}>
      <Link to="/tracks" className="track-card__link-wrap" aria-label={`View ${track.name} syllabus`}>
        <div className="track-card__image" style={{ background: `linear-gradient(135deg, ${track.color}22, ${track.color}44)` }}>
          <span className="numbered-badge" style={{ background: track.color }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="track-card__icon">{track.icon}</span>
        </div>

        <div className="track-card__content">
          <h3 className="track-card__name">{track.name.split(' ').slice(0, -1).join(' ')}</h3>
          <h3 className="track-card__name track-card__name--accent" style={{ color: track.color }}>
            {track.name.split(' ').slice(-1)[0]}
          </h3>

          <p className="track-card__tagline">{track.tagline}</p>
          <p className="track-card__description">{track.description}</p>

          <div className="track-card__tags">
            <span className="track-card__tags-label">TECH STACK</span>
            <div className="track-card__tag-list">
              {track.tags.map(tag => (
                <span key={tag} className="track-card__tag">{tag}</span>
              ))}
            </div>
          </div>

          <div className="track-card__meta">
            <span className="track-card__participants">
              👥 {track.participants} students
            </span>
            <span className="track-card__difficulty" data-level={track.difficulty.toLowerCase()}>
              {track.difficulty}
            </span>
          </div>

          <div className="track-card__action">
            <span className="track-card__cta" style={{ color: track.color }}>
              VIEW 60-DAY SYLLABUS →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
