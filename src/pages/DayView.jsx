import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AIChatbot from '../components/AIChatbot';
import { getDayEntry, dayEntries, socialLinks } from '../data/mockData';
import './DayView.css';

export default function DayView() {
  const { id } = useParams();
  const day = getDayEntry(id);
  const dayNum = Number(id);
  const prevDay = dayNum > 1 ? dayNum - 1 : null;
  const nextDay = dayNum < 60 ? dayNum + 1 : null;

  const [githubUrl, setGithubUrl] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [reflection, setReflection] = useState('');
  const [mood, setMood] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!day) {
    return (
      <div className="dayview dark-page" id="day-view-page">
        <Navbar variant="dark" />
        <div className="dayview__empty container">
          <h1>Day Not Found</h1>
          <p>This day doesn't exist in the challenge. <Link to="/dashboard">Back to Dashboard</Link></p>
        </div>
      </div>
    );
  }

  const moodOptions = [
    { value: 'excited', emoji: '🤩' },
    { value: 'confident', emoji: '😎' },
    { value: 'focused', emoji: '🧠' },
    { value: 'struggling', emoji: '😤' },
    { value: 'tired', emoji: '😴' },
  ];

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  function prefillTemplates() {
    setGithubUrl(`https://github.com/aryan/60days-fullstack/commit/${Math.random().toString(36).substr(2, 7)}`);
    setLinkedinUrl(`https://linkedin.com/posts/aryan_day${dayNum}-update`);
    setReflection(`Day ${dayNum} done! Learned a lot about ${day.title.toLowerCase()}. The journey continues.`);
    setMood('confident');
  }

  return (
    <div className="dayview dark-page" id="day-view-page">
      <Navbar variant="dark" />

      <main className="dayview__main container">
        {/* Day Navigation */}
        <div className="dayview__nav" id="day-navigation">
          {prevDay ? (
            <Link to={`/day/${prevDay}`} className="dayview__nav-link" id="day-prev">
              ← Day {prevDay}
            </Link>
          ) : <span />}
          <Link to="/dashboard" className="dayview__nav-link dayview__nav-link--center">
            All Days
          </Link>
          {nextDay ? (
            <Link to={`/day/${nextDay}`} className="dayview__nav-link" id="day-next">
              Day {nextDay} →
            </Link>
          ) : <span />}
        </div>

        {/* Day Header */}
        <div className="dayview__header" id="day-header">
          <div className="dayview__header-top">
            <span className="dayview__day-badge mono">DAY {day.dayNumber}</span>
            <span className={`status-${day.status}`}>
              {day.status === 'completed' && '✅ Completed'}
              {day.status === 'pending' && '⏳ Pending'}
              {day.status === 'missed' && '💤 Rest Day'}
              {day.status === 'locked' && '🔒 Locked'}
            </span>
          </div>
          <h1 className="dayview__title">{day.title}</h1>
          <p className="dayview__date mono">{new Date(day.date).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        {/* Task Details */}
        <div className="dayview__content">
          <div className="dayview__col-main">
            {/* Description */}
            <div className="glass-card" id="day-description">
              <h2 className="dayview__section-title">📋 Challenge Details</h2>
              <p className="dayview__description">{day.description}</p>

              <h3 className="dayview__objectives-title">Learning Objectives</h3>
              <ul className="dayview__objectives">
                {day.learningObjectives.map((obj, i) => (
                  <li key={i} className="dayview__objective">
                    <span className="dayview__objective-check">
                      {day.status === 'completed' ? '✅' : '⬜'}
                    </span>
                    {obj}
                  </li>
                ))}
              </ul>

              <div className="dayview__xp-reward">
                <span className="dayview__xp-label">XP Reward</span>
                <span className="dayview__xp-value">+{day.xpReward || day.xpEarned} XP ✨</span>
              </div>
            </div>

            {/* Missed Day — Encouragement */}
            {day.status === 'missed' && (
              <div className="glass-card dayview__missed" id="day-missed">
                <span className="dayview__missed-icon">🌙</span>
                <h3 className="dayview__missed-title">Logged Rest Day</h3>
                <p className="dayview__missed-text">
                  It's okay to miss a day. What matters is you came back.
                  Your streak resets, but your skills don't. Let's pick up right where you left off.
                </p>
                <Link to={`/day/${dayNum + 1}`} className="btn-dark">
                  CONTINUE TO DAY {dayNum + 1} →
                </Link>
              </div>
            )}

            {/* Locked Day */}
            {day.status === 'locked' && (
              <div className="glass-card dayview__locked" id="day-locked">
                <span className="dayview__locked-icon">🔒</span>
                <h3 className="dayview__locked-title">This Day is Upcoming</h3>
                <p className="dayview__locked-text">
                  Complete your current tasks first. This challenge will unlock when it's time.
                  Trust the process — you're ahead of most people already.
                </p>
              </div>
            )}

            {/* Completed — Submission Summary */}
            {day.status === 'completed' && day.submission && (
              <div className="glass-card" id="day-submission-summary">
                <h2 className="dayview__section-title">🚀 Submission Summary</h2>

                <div className="dayview__submission-row">
                  <span className="dayview__submission-label">GitHub Commit</span>
                  <a href={day.submission.githubCommitUrl} className="dayview__submission-link mono" target="_blank" rel="noopener">
                    {day.submission.githubCommitMessage}
                  </a>
                </div>

                <div className="dayview__submission-row">
                  <span className="dayview__submission-label">LinkedIn Post</span>
                  <a href={day.submission.linkedinPostUrl} className="dayview__submission-link" target="_blank" rel="noopener">
                    {day.submission.linkedinPostPreview}
                  </a>
                </div>

                {day.reflection && (
                  <div className="dayview__reflection">
                    <span className="dayview__submission-label">Reflection</span>
                    <p className="dayview__reflection-text">"{day.reflection}"</p>
                    {day.mood && <span className="dayview__mood">{getMoodEmoji(day.mood)} Feeling: {day.mood}</span>}
                  </div>
                )}

                <div className="dayview__community-actions" style={{ display: 'flex', gap: '8px', marginTop: '16px', flexWrap: 'wrap' }}>
                  <a
                    href={socialLinks.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="community__discord-pill"
                    style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                  >
                    👾 Discuss on Discord
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="community__discord-pill"
                    style={{ padding: '6px 12px', fontSize: '0.8rem', background: 'rgba(10, 102, 194, 0.15)', color: '#0A66C2', borderColor: 'rgba(10, 102, 194, 0.3)' }}
                  >
                    💼 LinkedIn Page
                  </a>
                </div>
              </div>
            )}

            {/* Pending — Submission Form */}
            {(day.status === 'pending' && !submitted) && (
              <form className="glass-card dayview__form" onSubmit={handleSubmit} id="day-submission-form">
                <h2 className="dayview__section-title">📤 Submit Your Work</h2>

                <button type="button" className="dayview__prefill" onClick={prefillTemplates} id="day-prefill">
                  ⚡ Quick Fill Templates
                </button>

                <div className="dayview__field">
                  <label className="dayview__label" htmlFor="github-url">GitHub Commit URL</label>
                  <input
                    type="url"
                    id="github-url"
                    className="dayview__input mono"
                    placeholder="https://github.com/your-repo/commit/..."
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    required
                  />
                </div>

                <div className="dayview__field">
                  <label className="dayview__label" htmlFor="linkedin-url">LinkedIn Post URL</label>
                  <input
                    type="url"
                    id="linkedin-url"
                    className="dayview__input mono"
                    placeholder="https://linkedin.com/posts/..."
                    value={linkedinUrl}
                    onChange={(e) => setLinkedinUrl(e.target.value)}
                    required
                  />
                </div>

                <div className="dayview__field">
                  <label className="dayview__label" htmlFor="reflection-text">Reflection (optional)</label>
                  <textarea
                    id="reflection-text"
                    className="dayview__textarea"
                    placeholder="What did you learn today?"
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    rows={3}
                  />
                </div>

                <div className="dayview__field">
                  <label className="dayview__label">How are you feeling?</label>
                  <div className="dayview__mood-picker" id="mood-picker">
                    {moodOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        className={`dayview__mood-btn ${mood === opt.value ? 'dayview__mood-btn--active' : ''}`}
                        onClick={() => setMood(opt.value)}
                      >
                        <span>{opt.emoji}</span>
                        <span>{opt.value}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button type="submit" className="btn-dark dayview__submit" id="day-submit-btn">
                  SUBMIT DAY {day.dayNumber} →
                </button>
              </form>
            )}

            {/* Submitted Success State */}
            {submitted && (
              <div className="glass-card dayview__success" id="day-success">
                <span className="dayview__success-icon">🎉</span>
                <h3 className="dayview__success-title">Day {day.dayNumber} Submitted!</h3>
                <p className="dayview__success-text">
                  You just proved you're serious. Another day of proof of work in the bank.
                  {mood === 'tired' ? " Now go rest — you've earned it. 🌙" : " Keep this momentum going! 🚀"}
                </p>
                <div className="dayview__success-xp">+{day.xpReward} XP earned ✨</div>
                <Link to="/dashboard" className="btn-dark">
                  BACK TO DASHBOARD
                </Link>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="dashboard__mobile-nav" id="day-mobile-nav">
        <Link to="/" className="dashboard__mobile-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span>Home</span>
        </Link>
        <Link to="/tracks" className="dashboard__mobile-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span>Tracks</span>
        </Link>
        <Link to="/dashboard" className="dashboard__mobile-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <span>Dashboard</span>
        </Link>
        <Link to={`/day/${dayNum}`} className="dashboard__mobile-link dashboard__mobile-link--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <span>Day {dayNum}</span>
        </Link>
      </nav>

      <Footer variant="dark" />
      <AIChatbot />
    </div>
  );
}

function getMoodEmoji(mood) {
  const map = {
    excited: '🤩', confident: '😎', focused: '🧠',
    struggling: '😤', tired: '😴', determined: '💪',
    proud: '🥳', curious: '🤔', amazed: '🤯', motivated: '🔥',
  };
  return map[mood] || '😊';
}
