import { Link } from 'react-router-dom';
import './HeatmapGrid.css';

export default function HeatmapGrid({ dayEntries }) {
  return (
    <div className="heatmap glass-card" id="heatmap-grid">
      <h3 className="heatmap__title">60-Day Progress</h3>
      <div className="heatmap__grid">
        {dayEntries.map((day) => (
          <Link
            key={day.dayNumber}
            to={`/day/${day.dayNumber}`}
            className={`heatmap__cell heatmap__cell--${day.status}`}
            title={`Day ${day.dayNumber}: ${day.title}`}
            id={`heatmap-day-${day.dayNumber}`}
          >
            <span className="heatmap__day-num">{day.dayNumber}</span>
          </Link>
        ))}
      </div>
      <div className="heatmap__legend">
        <div className="heatmap__legend-item">
          <span className="heatmap__legend-dot heatmap__legend-dot--completed" />
          <span>Completed</span>
        </div>
        <div className="heatmap__legend-item">
          <span className="heatmap__legend-dot heatmap__legend-dot--pending" />
          <span>Today</span>
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
