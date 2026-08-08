import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import TrackCard from '../components/TrackCard';
import FAQAccordion from '../components/FAQAccordion';
import Footer from '../components/Footer';
import { tracks, faqData, socialLinks } from '../data/mockData';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <div className="landing" id="landing-page">
      <Navbar variant="light" />

      {/* === HERO SECTION === */}
      <section className="hero" id="hero-section">
        <div className="hero__inner container">
          <div className="hero__content">
            <span className="badge-yellow hero__badge">FOR AMBITIOUS STUDENTS ✦</span>
            <h1 className="hero__title">
              <span className="hero__title-line">60 DAYS.</span>
              <span className="hero__title-line">ONE COMMIT.</span>
              <span className="hero__title-line hero__title-accent">YOUR CAREER.</span>
            </h1>
            <p className="hero__subtitle">
              Build <span className="hero__highlight">real skills</span>, real projects, and{' '}
              <span className="hero__highlight">real momentum</span> before everyone else catches up.
            </p>
            <div className="hero__actions">
              <Link to="/tracks" className="btn-primary" id="hero-cta-primary">
                EXPLORE TRACKS →
              </Link>
              <a
                href={socialLinks.discord}
                className="btn-secondary"
                id="hero-cta-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN DISCORD ⚡
              </a>
            </div>
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">1,200+</span>
                <span className="hero__stat-label">Active Students</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-number">4</span>
                <span className="hero__stat-label">Career Tracks</span>
              </div>
              <div className="hero__stat-divider" />
              <div className="hero__stat">
                <span className="hero__stat-number">60</span>
                <span className="hero__stat-label">Days to Ship</span>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__card hero__card--float1">
              <span className="hero__card-icon">🔥</span>
              <div>
                <span className="hero__card-title">12-Day Streak</span>
                <span className="hero__card-sub">Keep it going!</span>
              </div>
            </div>
            <div className="hero__card hero__card--float2">
              <span className="hero__card-icon">✅</span>
              <div>
                <span className="hero__card-title">Day 12 Submitted</span>
                <span className="hero__card-sub mono">feat: add REST API</span>
              </div>
            </div>
            <div className="hero__card hero__card--float3">
              <span className="hero__card-icon">⚡</span>
              <div>
                <span className="hero__card-title">Badge Earned!</span>
                <span className="hero__card-sub">7-Day Streak 🎉</span>
              </div>
            </div>
            <div className="hero__doodle hero__doodle--crown">👑</div>
            <div className="hero__doodle hero__doodle--sparkle">✨</div>
            <div className="hero__doodle hero__doodle--rocket">🚀</div>
          </div>
        </div>
      </section>

      {/* === OFFICIAL COMMUNITY CHANNELS STRIP === */}
      <section className="community-strip" id="community-strip">
        <div className="community-strip__inner container">
          <span className="community-strip__badge">OFFICIAL CHANNELS & COMMUNITY ✦</span>
          <div className="community-strip__links">
            <a
              href={socialLinks.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="community-strip__item"
              id="strip-discord"
            >
              <span className="community-strip__icon">👾</span>
              <div>
                <span className="community-strip__title">Discord Community</span>
                <span className="community-strip__desc">Join 1,200+ active coders</span>
              </div>
              <span className="community-strip__arrow">→</span>
            </a>

            <a
              href={socialLinks.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="community-strip__item"
              id="strip-youtube"
            >
              <span className="community-strip__icon">📺</span>
              <div>
                <span className="community-strip__title">YouTube Channel</span>
                <span className="community-strip__desc">@abtalksonai Tutorials & AI</span>
              </div>
              <span className="community-strip__arrow">→</span>
            </a>

            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="community-strip__item"
              id="strip-linkedin"
            >
              <span className="community-strip__icon">💼</span>
              <div>
                <span className="community-strip__title">LinkedIn Company</span>
                <span className="community-strip__desc">Career network & proof of work</span>
              </div>
              <span className="community-strip__arrow">→</span>
            </a>

            <a
              href={socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="community-strip__item"
              id="strip-instagram"
            >
              <span className="community-strip__icon">📸</span>
              <div>
                <span className="community-strip__title">Instagram</span>
                <span className="community-strip__desc">Daily coding reels @abtalksonai</span>
              </div>
              <span className="community-strip__arrow">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* === WHY STUDENTS JOIN === */}
      <section className="features" id="features-section">
        <div className="features__inner container">
          <span className="badge-yellow features__badge">WHY STUDENTS JOIN ABTALKS ✦</span>
          <h2 className="features__title display-xl">
            COLLEGE GIVES YOU A DEGREE
            <br />
            WE HELP YOU <span className="text-blue">BUILD MOMENTUM</span>
          </h2>
          <p className="features__subtitle">
            Learn The Skills, Mindset, And Network That <span className="hero__highlight">Actually</span> Move You Ahead Early.
          </p>

          <div className="features__grid">
            {[
              { num: '01', title: 'BUILD', accent: 'REAL PROJECTS', desc: 'Stop Consuming Only Start Building. Ship real products that employers care about.', icon: '💻' },
              { num: '02', title: 'FIND', accent: 'AMBITIOUS PEOPLE', desc: 'Surround Yourself With People Who Actually Want More. Your tribe matters.', icon: '👥' },
              { num: '03', title: 'START', accent: 'EARLIER', desc: 'Most Students Wait Till Final Year. Get a 3-year head start on your career.', icon: '🏃' },
              { num: '04', title: 'PROOF', accent: 'OF WORK', desc: 'Every day is a commit, a post, and a public trail of your relentless consistency.', icon: '📜' },
            ].map((f) => (
              <div key={f.num} className="feature-card" id={`feature-${f.num}`}>
                <div className="feature-card__badge">{f.num}</div>
                <h3 className="feature-card__title">
                  {f.title} <span className="text-blue">{f.accent}</span>
                </h3>
                <p className="feature-card__desc">{f.desc}</p>
                <span className="feature-card__icon">{f.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* === TRACK PREVIEW === */}
      <section className="tracks-preview" id="tracks">
        <div className="tracks-preview__inner container">
          <div className="tracks-preview__header">
            <div>
              <span className="badge-yellow">CHOOSE YOUR PATH ✦</span>
              <h2 className="tracks-preview__title display-xl">
                4 SPECIALIZED
                <br />
                <span className="text-blue">CAREER TRACKS</span>
              </h2>
            </div>
            <Link to="/tracks" className="btn-secondary tracks-preview__all-cta">
              VIEW ALL 4 TRACKS →
            </Link>
          </div>

          <div className="tracks-preview__grid">
            {tracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* === COMPARISON === */}
      <section className="comparison" id="comparison-section">
        <div className="comparison__inner container">
          <span className="badge-yellow">THE HONEST TRUTH ✦</span>
          <h2 className="comparison__title display-xl">
            INDUSTRY HIRES FOR SKILLS
            <br />
            NOT EXAMS.
          </h2>
          <p className="comparison__subtitle">
            Degrees Matter But In Today's World, <span className="hero__highlight">Skills, Proof Of Work</span>, And <span className="hero__highlight">Execution</span> Matter More.
          </p>

          <div className="comparison__grid">
            <div className="comparison__card comparison__card--old" id="comparison-old">
              <h3 className="comparison__card-title comparison__card-title--old">THE TRADITIONAL PATH</h3>
              <p className="comparison__card-desc">The Old Way. Slow, Outdated, And Overcrowded.</p>
              <ul className="comparison__list">
                <li className="comparison__item comparison__item--bad">
                  <span className="comparison__icon">✗</span> Watch videos alone
                </li>
                <li className="comparison__item comparison__item--bad">
                  <span className="comparison__icon">✗</span> No real accountability
                </li>
                <li className="comparison__item comparison__item--bad">
                  <span className="comparison__icon">✗</span> Outdated content
                </li>
                <li className="comparison__item comparison__item--bad">
                  <span className="comparison__icon">✗</span> No projects / real results
                </li>
                <li className="comparison__item comparison__item--bad">
                  <span className="comparison__icon">✗</span> Isolated learning
                </li>
              </ul>
            </div>

            <div className="comparison__card comparison__card--new" id="comparison-new">
              <h3 className="comparison__card-title comparison__card-title--new">THE ABTALKS PATH</h3>
              <p className="comparison__card-desc">The new way. Practical, fast and future-ready.</p>
              <ul className="comparison__list">
                <li className="comparison__item comparison__item--good">
                  <span className="comparison__icon">✓</span> Build live with guidance
                </li>
                <li className="comparison__item comparison__item--good">
                  <span className="comparison__icon">✓</span> Daily commits & proof of work
                </li>
                <li className="comparison__item comparison__item--good">
                  <span className="comparison__icon">✓</span> Industry-relevant learning
                </li>
                <li className="comparison__item comparison__item--good">
                  <span className="comparison__icon">✓</span> Real-world projects
                </li>
                <li className="comparison__item comparison__item--good">
                  <span className="comparison__icon">✓</span> Community & momentum
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === FAQ SECTION === */}
      <section className="faq-section" id="faq-section-wrapper">
        <div className="faq-section__inner container">
          <div className="faq-section__left">
            <span className="badge-yellow">GOT QUESTIONS ✦</span>
            <h2 className="faq-section__title display-xl">
              FREQUENTLY ASKED
              <br />
              QUESTIONS.
            </h2>
            <p className="faq-section__subtitle">
              Starting something new feels confusing. Here are answers to the most common questions students ask{' '}
              <span className="hero__highlight">before joining.</span>
            </p>
          </div>
          <div className="faq-section__right">
            <FAQAccordion items={faqData} />
          </div>
        </div>
      </section>

      {/* === FINAL CTA === */}
      <section className="final-cta" id="final-cta-section">
        <div className="final-cta__inner container">
          <div className="final-cta__content">
            <span className="badge-yellow">THE NEXT GENERATION START EARLY ✦</span>
            <h2 className="final-cta__title display-xl">
              DON'T SPEND 4 YEARS
              <br />
              ATTENDING COLLEGE.
              <br />
              <span className="text-blue">BUILD. EXPLORE. GROW.</span>
            </h2>
            <div className="final-cta__actions">
              <Link to="/tracks" className="btn-primary" id="final-cta-primary">
                EXPLORE TRACKS →
              </Link>
              <a
                href={socialLinks.discord}
                className="btn-secondary"
                id="final-cta-discord"
                target="_blank"
                rel="noopener noreferrer"
              >
                JOIN THE DISCORD ⚡
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="light" />
    </div>
  );
}
