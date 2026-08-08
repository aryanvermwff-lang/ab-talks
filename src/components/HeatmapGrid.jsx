import { Link } from 'react-router-dom';
import './HeatmapGrid.css';

export default function HeatmapGrid({ dayEntries }) {
  const completedCount = dayEntries.filter((d) => d.status === 'completed').length;
  const totalDays = dayEntries.length;
  const percentage = Math.round((completedCount / totalDays) * 100);

  return (
    <div className="heatmap glass-card" id="heatmap-grid">
      <div className="heatmap__header">
        <div>
          <h3 className="heatmap__title">60-Day Progress</h3>
          <span className="heatmap__subtitle">Daily Proof-of-Work Grid</span>
        </div>
        <div className="heatmap__stats-badge">
          <span className="heatmap__stats-val">{completedCount}/{totalDays}</span>
          <span className="heatmap__stats-pct">({percentage}%)</span>
        </div>
      </div>

      {/* Mini Progress Bar */}
      <div className="heatmap__progress-bar-wrap">
        <div className="heatmap__progress-bar">
          <div
            className="heatmap__progress-fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>

      {/* Responsive Grid: 6 columns on mobile, 10 on desktop */}
      <div className="heatmap__grid">
        {dayEntries.map((day) => {
          const isToday = day.status === 'pending';
          const isDone = day.status === 'completed';
          const isMissed = day.status === 'missed';

          return (
            <Link
              key={day.dayNumber}
              to={`/day/${day.dayNumber}`}
              className={`heatmap__cell heatmap__cell--${day.status} ${isToday ? 'heatmap__cell--today' : ''}`}
              title={`Day ${day.dayNumber}: ${day.title} (${day.status})`}
              id={`heatmap-day-${day.dayNumber}`}
            >
              <span className="heatmap__day-num">{day.dayNumber}</span>
              {isDone && <span className="heatmap__done-dot">✓</span>}
              {isToday && <span className="heatmap__today-ping" />}
            </Link>
          );
        })}
      </div>

      {/* Legend */}
      <div className="heatmap__legend">
        <div className="heatmap__legend-item">
          <span className="heatmap__legend-dot heatmap__legend-dot--completed" />
          <span>Done (12)</span>
        </div>
        <div className="heatmap__legend-item">
          <span className="heatmap__legend-dot heatmap__legend-dot--pending" />
          <span>Today (Day 13)</span>
        </div>
        <div className="heatmap__legend-item">
          <span className="heatmap__legend-dot heatmap__legend-dot--missed" />
          <span>Missed</span>
        </div>
        <div className="heatmap__legend-item">
          <span className="heatmap__legend-dot heatmap__legend-dot--locked" />
          <span>Upcoming</span>
        </div>
      </div>
    </div>
  );
}
