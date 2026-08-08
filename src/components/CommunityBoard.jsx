import { socialLinks } from '../data/mockData';
import './CommunityBoard.css';

export default function CommunityBoard({ highlights, userRank, totalParticipants }) {
  const percentile = ((1 - userRank / totalParticipants) * 100).toFixed(1);

  return (
    <div className="community glass-card" id="community-board">
      <div className="community__header-row">
        <h3 className="community__title">Community Leaderboard</h3>
        <a
          href={socialLinks.discord}
          target="_blank"
          rel="noopener noreferrer"
          className="community__discord-pill"
          id="leaderboard-discord-link"
        >
          👾 Join Discord
        </a>
      </div>

      <div className="community__your-rank">
        <span className="community__rank-label">Your Rank</span>
        <span className="community__rank-value">#{userRank}</span>
        <span className="community__rank-total">of {totalParticipants.toLocaleString()}</span>
        <span className="community__rank-percentile">Top {percentile}% 🎯</span>
      </div>

      <div className="community__list">
        {highlights.map((person, i) => (
          <div key={i} className="community__person" id={`community-person-${i}`}>
            <span className="community__position">#{i + 1}</span>
            <img src={person.avatar} alt={person.name} className="community__avatar" />
            <div className="community__info">
              <span className="community__name">{person.name}</span>
              <span className="community__track">{person.track}</span>
            </div>
            <div className="community__stats">
              <span className="community__streak">🔥 {person.streak}</span>
              <span className="community__xp mono">{person.xp} XP</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
