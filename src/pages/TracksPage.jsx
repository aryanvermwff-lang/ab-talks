import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';
import { tracks, userData } from '../data/mockData';
import './TracksPage.css';

export default function TracksPage() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);
  const [enrolledTrackId, setEnrolledTrackId] = useState('t_01');
  const [activeTab, setActiveTab] = useState('curriculum');
  const navigate = useNavigate();
  const detailRef = useRef(null);

  function handleTrackSelect(track) {
    setSelectedTrack(track);
    setActiveTab('curriculum');
    // Scroll to the top of the detail card after a brief render
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  }

  function handleEnroll(track) {
    setEnrolledTrackId(track.id);
    userData.track = track.name;
    // Show quick confirmation and route to dashboard
    navigate('/dashboard');
  }

  return (
    <div className="tracks-page dark-page" id="all-tracks-page">
      <Navbar variant="dark" />

      <main className="tracks-page__main container">
        {/* Header */}
        <div className="tracks-page__header">
          <span className="badge-yellow">CAREER TRACKS ✦</span>
          <h1 className="tracks-page__title display-xl">
            CHOOSE YOUR <span className="text-accent" style={{ color: selectedTrack.color }}>PROOF OF WORK</span>
          </h1>
          <p className="tracks-page__subtitle">
            Every track is a complete 60-day curriculum with daily commits, hands-on capstones, and recruiter visibility.
          </p>
        </div>

        {/* Track Selector Tabs */}
        <div className="tracks-page__tabs" id="track-tabs">
          {tracks.map((track) => (
            <button
              key={track.id}
              className={`tracks-page__tab ${selectedTrack.id === track.id ? 'tracks-page__tab--active' : ''}`}
              style={{
                borderColor: selectedTrack.id === track.id ? track.color : 'transparent',
                boxShadow: selectedTrack.id === track.id ? `0 0 15px ${track.color}44` : 'none',
              }}
              onClick={() => handleTrackSelect(track)}
              id={`tab-${track.id}`}
            >
              <span className="tracks-page__tab-icon">{track.icon}</span>
              <div className="tracks-page__tab-info">
                <span className="tracks-page__tab-name">{track.name}</span>
                <span className="tracks-page__tab-participants mono">{track.participants} enrolled</span>
              </div>
              {enrolledTrackId === track.id && (
                <span className="tracks-page__tab-badge">Active</span>
              )}
            </button>
          ))}
        </div>

        {/* Selected Track Detail Card */}
        <div ref={detailRef} className="tracks-page__detail glass-card" style={{ borderColor: `${selectedTrack.color}44` }}>
          <div className="tracks-page__detail-header">
            <div className="tracks-page__detail-lead">
              <span className="tracks-page__detail-icon">{selectedTrack.icon}</span>
              <div>
                <div className="tracks-page__detail-tags-top">
                  <span className="tracks-page__difficulty" data-level={selectedTrack.difficulty.toLowerCase()}>
                    {selectedTrack.difficulty} Level
                  </span>
                  <span className="tracks-page__days mono">🗓️ 60 Days</span>
                  <span className="tracks-page__students">👥 {selectedTrack.participants} Students</span>
                </div>
                <h2 className="tracks-page__detail-title" style={{ color: selectedTrack.color }}>
                  {selectedTrack.name}
                </h2>
                <p className="tracks-page__detail-tagline">"{selectedTrack.tagline}"</p>
              </div>
            </div>

            <button
              className="btn-primary tracks-page__enroll-btn"
              style={{ background: selectedTrack.color, color: '#fff' }}
              onClick={() => handleEnroll(selectedTrack)}
              id={`enroll-${selectedTrack.id}`}
            >
              {enrolledTrackId === selectedTrack.id ? 'CONTINUE TRACK →' : 'START THIS TRACK →'}
            </button>
          </div>

          <p className="tracks-page__detail-description">{selectedTrack.description}</p>

          {/* Sub Navigation */}
          <div className="tracks-page__subtabs">
            <button
              className={`tracks-page__subtab ${activeTab === 'curriculum' ? 'tracks-page__subtab--active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              📚 60-Day Curriculum
            </button>
            <button
              className={`tracks-page__subtab ${activeTab === 'projects' ? 'tracks-page__subtab--active' : ''}`}
              onClick={() => setActiveTab('projects')}
            >
              🚀 Capstone Projects ({selectedTrack.projects?.length || 0})
            </button>
            <button
              className={`tracks-page__subtab ${activeTab === 'skills' ? 'tracks-page__subtab--active' : ''}`}
              onClick={() => setActiveTab('skills')}
            >
              ⚡ Skills & Tech Stack
            </button>
          </div>

          {/* Tab 1: Curriculum */}
          {activeTab === 'curriculum' && (
            <div className="tracks-page__curriculum">
              {selectedTrack.modules?.map((mod, idx) => (
                <div key={idx} className="tracks-page__module-card">
                  <div className="tracks-page__module-week mono" style={{ color: selectedTrack.color }}>
                    {mod.week}
                  </div>
                  <h4 className="tracks-page__module-title">{mod.title}</h4>
                  <p className="tracks-page__module-desc">{mod.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tab 2: Projects */}
          {activeTab === 'projects' && (
            <div className="tracks-page__projects">
              {selectedTrack.projects?.map((proj, idx) => (
                <div key={idx} className="tracks-page__project-card">
                  <span className="tracks-page__project-num mono" style={{ background: `${selectedTrack.color}22`, color: selectedTrack.color }}>
                    P0{idx + 1}
                  </span>
                  <div className="tracks-page__project-info">
                    <h4 className="tracks-page__project-title">{proj}</h4>
                    <span className="tracks-page__project-badge">Production Ready</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tab 3: Skills & Hiring */}
          {activeTab === 'skills' && (
            <div className="tracks-page__skills-view">
              <div className="tracks-page__skills-section">
                <h4 className="tracks-page__section-subtitle">Core Skills Mastered</h4>
                <div className="tracks-page__skill-tags">
                  {selectedTrack.skills?.map((skill) => (
                    <span key={skill} className="tracks-page__skill-tag" style={{ borderColor: `${selectedTrack.color}55` }}>
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="tracks-page__skills-section">
                <h4 className="tracks-page__section-subtitle">Full Tech Stack</h4>
                <div className="tracks-page__tech-tags">
                  {selectedTrack.tags?.map((tag) => (
                    <span key={tag} className="tracks-page__tech-tag mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="tracks-page__skills-section">
                <h4 className="tracks-page__section-subtitle">Alumni Hiring Companies</h4>
                <div className="tracks-page__hiring-list">
                  {selectedTrack.hiringAt?.map((company) => (
                    <span key={company} className="tracks-page__hiring-company">
                      🏢 {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer variant="dark" />
      <AIChatbot />
    </div>
  );
}
