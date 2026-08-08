import './ActivityFeed.css';

export default function ActivityFeed({ activities }) {
  function getTimeAgo(timestamp) {
    const now = new Date();
    const then = new Date(timestamp);
    const diffMs = now - then;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) return `${diffDays}d ago`;
    if (diffHours > 0) return `${diffHours}h ago`;
    return 'Just now';
  }

  return (
    <div className="activity-feed glass-card" id="activity-feed">
      <h3 className="activity-feed__title">Recent Activity</h3>
      <div className="activity-feed__list">
        {activities.map((activity, i) => (
          <div
            key={i}
            className="activity-feed__item"
            style={{ animationDelay: `${i * 0.08}s` }}
            id={`activity-${i}`}
          >
            <span className="activity-feed__icon">
              {activity.type === 'submission' ? '📝' : '🏅'}
            </span>
            <div className="activity-feed__content">
              {activity.type === 'submission' ? (
                <span className="activity-feed__text">
                  Submitted <strong>Day {activity.day}</strong> — {activity.title}
                </span>
              ) : (
                <span className="activity-feed__text">
                  Earned badge: <strong>{activity.icon} {activity.badge}</strong>
                </span>
              )}
              <span className="activity-feed__time mono">{getTimeAgo(activity.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
