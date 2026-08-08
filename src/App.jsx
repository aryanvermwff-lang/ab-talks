import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import DayView from './pages/DayView';
import TracksPage from './pages/TracksPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/day/:id" element={<DayView />} />
      <Route path="/tracks" element={<TracksPage />} />
    </Routes>
  );
}
