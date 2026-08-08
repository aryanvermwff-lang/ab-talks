import { useState } from 'react';
import './BadgeShelf.css';

export default function BadgeShelf({ badges }) {
  const [selectedBadge, setSelectedBadge] = useState(null);

  const unlockedCount = badges.filter((b) => !b.locked).length;
  const totalCount = badges.length;

  return (
    <div className="badge-shelf glass-card" id="badge-shelf">
      <div className="badge-shelf__header">
        <div>
          <h3 className="badge-shelf__title">Badges Earned</h3>
          <span className="badge-shelf__subtitle">Milestones & Achievements</span>
        </div>
        <span className="badge-shelf__counter-pill">
          <span className="badge-shelf__counter-icon">⚡</span>
          <span>{unlockedCount}/{totalCount} Unlocked</span>
        </span>
      </div>

      <div className="badge-shelf__grid">
        {badges.map((badge) => {
          const isUnlocked = !badge.locked;
          const isSelected = selectedBadge?.id === badge.id;

          return (
            <button
              type="button"
              key={badge.id}
              className={`badge-shelf__card ${isUnlocked ? 'badge-shelf__card--unlocked' : 'badge-shelf__card--locked'} ${isSelected ? 'badge-shelf__card--selected' : ''}`}
              onClick={() => setSelectedBadge(isSelected ? null : badge)}
              aria-label={`${badge.name}: ${badge.description || (isUnlocked ? 'Unlocked' : 'Locked')}`}
              id={`badge-${badge.id}`}
            >
              <div className="badge-shelf__icon-wrap">
                <span className="badge-shelf__icon">{badge.icon}</span>
                {!isUnlocked && <span className="badge-shelf__lock-overlay">🔒</span>}
              </div>

              <span className="badge-shelf__name">{badge.name}</span>

              {isUnlocked && badge.earnedOn && (
                <span className="badge-shelf__tag badge-shelf__tag--earned">
                  {new Date(badge.earnedOn).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })}
                </span>
              )}

              {!isUnlocked && (
                <span className="badge-shelf__tag badge-shelf__tag--locked">
                  Locked
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Box when tapping on a badge */}
      {selectedBadge && (
        <div className="badge-shelf__detail-panel" id="badge-detail-panel">
          <div className="badge-shelf__detail-header">
            <span className="badge-shelf__detail-icon">{selectedBadge.icon}</span>
            <div className="badge-shelf__detail-text">
              <h4 className="badge-shelf__detail-title">
                {selectedBadge.name}
                <span className={`badge-shelf__status-tag ${!selectedBadge.locked ? 'badge-shelf__status-tag--earned' : ''}`}>
                  {!selectedBadge.locked ? '✓ Unlocked' : '🔒 Locked'}
                </span>
              </h4>
              <p className="badge-shelf__detail-desc">{selectedBadge.description}</p>
            </div>
            <button
              type="button"
              className="badge-shelf__detail-close"
              onClick={() => setSelectedBadge(null)}
              aria-label="Close details"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
