import './CommunityBoard.css';
import { socialLinks } from '../data/mockData';

export default function CommunityBoard({ highlights, userRank, totalParticipants }) {
  const topPercentile = ((userRank / totalParticipants) * 100).toFixed(1);

  const getRankBadge = (rank) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return `#${rank}`;
  };

  return (
    <div className="community glass-card" id="community-board">
      <div className="community__header-row">
        <div>
          <h3 className="community__title">Leaderboard</h3>
          <span className="community__subtitle">Top Streaks & Proof-of-Work</span>
        </div>
        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="community__discord-pill"
          id="btn-join-discord"
        >
          ✨ Discord
        </a>
      </div>

      {/* Your Rank Strip */}
      <div className="community__your-rank">
        <div className="community__rank-main">
          <span className="community__rank-label">Your Rank</span>
          <div className="community__rank-value-row">
            <span className="community__rank-value">#{userRank}</span>
            <span className="community__rank-total">/ {totalParticipants.toLocaleString()}</span>
          </div>
        </div>
        <div className="community__rank-badge-pill">
          <span>Top {(100 - parseFloat(topPercentile)).toFixed(1)}%</span>
          <span>🎯</span>
        </div>
      </div>

      {/* Leaderboard Table / List */}
      <div className="community__list">
        {highlights.map((person, i) => (
          <div key={i} className="community__person" id={`leaderboard-item-${i + 1}`}>
            <span className="community__position">{getRankBadge(i + 1)}</span>
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${person.name.toLowerCase().replace(/[^a-z]/g, '')}`}
              alt={person.name}
              className="community__avatar"
              loading="lazy"
            />
            <div className="community__info">
              <span className="community__name">{person.name}</span>
              <span className="community__track">{person.track}</span>
            </div>
            <div className="community__stats">
              <span className="community__streak">🔥 {person.streak}</span>
              <span className="community__xp mono">{person.streak * 120 + 80} XP</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
