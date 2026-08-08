import './BadgeShelf.css';

export default function BadgeShelf({ badges }) {
  return (
    <div className="badge-shelf glass-card" id="badge-shelf">
      <h3 className="badge-shelf__title">Badges Earned</h3>
      <div className="badge-shelf__scroll">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`badge-shelf__item ${badge.locked ? 'badge-shelf__item--locked' : ''}`}
            title={badge.description}
            id={`badge-${badge.id}`}
          >
            <span className="badge-shelf__icon">{badge.locked ? '🔒' : badge.icon}</span>
            <span className="badge-shelf__name">{badge.name}</span>
            {!badge.locked && badge.earnedOn && (
              <span className="badge-shelf__date mono">{new Date(badge.earnedOn).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}</span>
            )}
            {badge.locked && (
              <span className="badge-shelf__locked-text">Locked</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
