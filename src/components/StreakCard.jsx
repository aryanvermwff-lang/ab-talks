import './StreakCard.css';

export default function StreakCard({ currentStreak, longestStreak, daysCompleted, totalDays, xp }) {
  const progressPercent = (daysCompleted / totalDays) * 100;

  return (
    <div className="streak-card glass-card" id="streak-card">
      <div className="streak-card__main">
        <div className="streak-card__fire">
          <span className="streak-card__fire-emoji">🔥</span>
          <div className="streak-card__count">
            <span className="streak-card__number">{currentStreak}</span>
            <span className="streak-card__label">Day Streak</span>
          </div>
        </div>

        <div className="streak-card__stats">
          <div className="streak-card__stat">
            <span className="streak-card__stat-value">{longestStreak}</span>
            <span className="streak-card__stat-label">Longest</span>
          </div>
          <div className="streak-card__stat">
            <span className="streak-card__stat-value" style={{ color: 'var(--color-xp)' }}>{xp}</span>
            <span className="streak-card__stat-label">Total XP</span>
          </div>
        </div>
      </div>

      <div className="streak-card__progress">
        <div className="streak-card__progress-header">
          <span className="streak-card__progress-label">Challenge Progress</span>
          <span className="streak-card__progress-value">{daysCompleted}/{totalDays} days</span>
        </div>
        <div className="streak-card__progress-bar">
          <div
            className="streak-card__progress-fill"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
