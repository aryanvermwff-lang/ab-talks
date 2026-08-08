import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import StreakCard from '../components/StreakCard';
import TaskCard from '../components/TaskCard';
import HeatmapGrid from '../components/HeatmapGrid';
import BadgeShelf from '../components/BadgeShelf';
import ActivityFeed from '../components/ActivityFeed';
import CommunityBoard from '../components/CommunityBoard';
import NightOwlBanner from '../components/NightOwlBanner';
import AIChatbot from '../components/AIChatbot';
import Footer from '../components/Footer';
import { useNightOwl } from '../hooks/useNightOwl';
import { userData, dayEntries, dashboardData } from '../data/mockData';
import './Dashboard.css';

export default function Dashboard() {
  const { isNightOwl, greeting, quote } = useNightOwl();
  const [showNightBanner, setShowNightBanner] = useState(true);
  const [mobileTab, setMobileTab] = useState('today'); // 'today' | 'map' | 'community' | 'all'

  return (
    <div className="dashboard dark-page" id="dashboard-page">
      {showNightBanner && (
        <NightOwlBanner isNightOwl={isNightOwl} onDismiss={() => setShowNightBanner(false)} />
      )}
      <Navbar variant="dark" />

      {/* Mobile Student Profile Header */}
      <div className="dashboard__mobile-header" id="mobile-profile-header">
        <div className="dashboard__mobile-user">
          <img src={userData.avatar} alt={userData.name} className="dashboard__mobile-avatar" />
          <div className="dashboard__mobile-info">
            <div className="dashboard__mobile-name-row">
              <span className="dashboard__mobile-name">{userData.name}</span>
              <span className="dashboard__mobile-college">{userData.college}</span>
            </div>
            <Link to="/tracks" className="dashboard__mobile-track-pill">
              <span className="dashboard__mobile-track-dot" />
              <span>{userData.track}</span>
              <span className="dashboard__mobile-track-switch">⇄</span>
            </Link>
          </div>
        </div>

        {/* Quick Stats Strip */}
        <div className="dashboard__mobile-stats">
          <div className="dashboard__mobile-stat-item">
            <span className="dashboard__mobile-stat-icon">🔥</span>
            <div>
              <span className="dashboard__mobile-stat-val">{userData.currentStreak}</span>
              <span className="dashboard__mobile-stat-lbl">Streak</span>
            </div>
          </div>
          <div className="dashboard__mobile-stat-item">
            <span className="dashboard__mobile-stat-icon">⚡</span>
            <div>
              <span className="dashboard__mobile-stat-val">{userData.xp}</span>
              <span className="dashboard__mobile-stat-lbl">XP</span>
            </div>
          </div>
          <div className="dashboard__mobile-stat-item">
            <span className="dashboard__mobile-stat-icon">🏆</span>
            <div>
              <span className="dashboard__mobile-stat-val">#{userData.rank}</span>
              <span className="dashboard__mobile-stat-lbl">Rank</span>
            </div>
          </div>
        </div>

        {/* Mobile Tab Switcher */}
        <div className="dashboard__tab-bar" role="tablist" aria-label="Dashboard sections">
          <button
            type="button"
            className={`dashboard__tab-btn ${mobileTab === 'today' ? 'dashboard__tab-btn--active' : ''}`}
            onClick={() => setMobileTab('today')}
            id="tab-today"
          >
            🎯 Today
          </button>
          <button
            type="button"
            className={`dashboard__tab-btn ${mobileTab === 'map' ? 'dashboard__tab-btn--active' : ''}`}
            onClick={() => setMobileTab('map')}
            id="tab-map"
          >
            🗺️ 60-Day Map
          </button>
          <button
            type="button"
            className={`dashboard__tab-btn ${mobileTab === 'community' ? 'dashboard__tab-btn--active' : ''}`}
            onClick={() => setMobileTab('community')}
            id="tab-community"
          >
            🏆 Badges
          </button>
          <button
            type="button"
            className={`dashboard__tab-btn ${mobileTab === 'all' ? 'dashboard__tab-btn--active' : ''}`}
            onClick={() => setMobileTab('all')}
            id="tab-all"
          >
            ✨ All
          </button>
        </div>
      </div>

      <div className="dashboard__layout">
        {/* Desktop Sidebar */}
        <aside className="dashboard__sidebar" id="dashboard-sidebar">
          <div className="dashboard__sidebar-header">
            <img src={userData.avatar} alt={userData.name} className="dashboard__sidebar-avatar" />
            <div>
              <span className="dashboard__sidebar-name">{userData.name}</span>
              <span className="dashboard__sidebar-college">{userData.college}</span>
            </div>
          </div>

          <nav className="dashboard__sidebar-nav">
            <Link to="/dashboard" className="dashboard__sidebar-link dashboard__sidebar-link--active">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Dashboard
            </Link>
            <Link to="/tracks" className="dashboard__sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
              All Tracks
            </Link>
            <Link to="/day/13" className="dashboard__sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Today's Task
            </Link>
            <Link to="/" className="dashboard__sidebar-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Home
            </Link>
          </nav>

          <Link to="/tracks" className="dashboard__sidebar-track" style={{ textDecoration: 'none', display: 'block' }}>
            <span className="dashboard__sidebar-track-label">CURRENT TRACK (SWITCH ⇄)</span>
            <span className="dashboard__sidebar-track-name" style={{ color: 'var(--track-fullstack)' }}>
              🌐 {userData.track}
            </span>
          </Link>
        </aside>

        {/* Main Content */}
        <main className="dashboard__main">
          {/* Greeting */}
          <div className="dashboard__greeting" id="dashboard-greeting">
            <h1 className="dashboard__greeting-text">
              {greeting} <span className="dashboard__greeting-fire">🔥</span>
            </h1>
            <p className="dashboard__greeting-quote">"{quote}"</p>
          </div>

          {/* Content Grid (Tab-aware on mobile, 2-column on desktop) */}
          <div className={`dashboard__grid dashboard__grid--tab-${mobileTab}`}>
            {/* Primary Col (Streak, Today's Mission, 60-day heatmap) */}
            <div className="dashboard__col-main">
              {(mobileTab === 'today' || mobileTab === 'all') && (
                <>
                  <StreakCard
                    currentStreak={userData.currentStreak}
                    longestStreak={userData.longestStreak}
                    daysCompleted={userData.totalDaysCompleted}
                    totalDays={userData.totalDaysInChallenge}
                    xp={userData.xp}
                  />
                  <TaskCard task={dashboardData.todayTask} />
                </>
              )}

              {(mobileTab === 'map' || mobileTab === 'all') && (
                <HeatmapGrid dayEntries={dayEntries} />
              )}
            </div>

            {/* Secondary Col (Badges, Activity, Community Leaderboard) */}
            <div className="dashboard__col-side">
              {(mobileTab === 'community' || mobileTab === 'all') && (
                <>
                  <BadgeShelf badges={userData.badges} />
                  <CommunityBoard
                    highlights={dashboardData.communityHighlights}
                    userRank={userData.rank}
                    totalParticipants={userData.totalParticipants}
                  />
                  <ActivityFeed activities={dashboardData.recentActivity} />
                </>
              )}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Bottom Nav */}
      <nav className="dashboard__mobile-nav" id="mobile-nav">
        <Link to="/" className="dashboard__mobile-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
          <span>Home</span>
        </Link>
        <Link to="/tracks" className="dashboard__mobile-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
          <span>Tracks</span>
        </Link>
        <Link to="/dashboard" className="dashboard__mobile-link dashboard__mobile-link--active">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          <span>Dashboard</span>
        </Link>
        <Link to="/day/13" className="dashboard__mobile-link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          <span>Today</span>
        </Link>
      </nav>

      <Footer variant="dark" />
      <AIChatbot />
    </div>
  );
}
