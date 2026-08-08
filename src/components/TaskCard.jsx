import { Link } from 'react-router-dom';
import './TaskCard.css';

export default function TaskCard({ task }) {
  if (!task) return null;

  const isCompleted = task.status === 'completed';

  return (
    <div className={`task-card glass-card ${isCompleted ? 'task-card--done' : ''}`} id="task-card">
      <div className="task-card__header">
        <span className="task-card__day mono">DAY {task.dayNumber}</span>
        <span className={`status-${task.status}`}>
          {task.status === 'completed' ? '✅ Completed' : '⏳ Pending'}
        </span>
      </div>

      <h3 className="task-card__title">{task.title}</h3>
      <p className="task-card__description">{task.description}</p>

      {!isCompleted && (
        <Link to={`/day/${task.dayNumber}`} className="btn-dark task-card__cta" id="task-card-cta">
          START TODAY'S CHALLENGE →
        </Link>
      )}

      {isCompleted && (
        <div className="task-card__completed-msg">
          <span className="task-card__check">🎉</span>
          <span>All done for today! Rest up, champion.</span>
        </div>
      )}
    </div>
  );
}
