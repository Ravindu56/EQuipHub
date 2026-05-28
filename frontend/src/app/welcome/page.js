'use client';
import Link from 'next/link';
import './welcome.css';

export default function WelcomePage() {
  return (
    <main className="welcome-root">

      {/* ── Navbar ── */}
      <nav className="welcome-nav glass">
        <div className="welcome-nav-inner">
          <div className="welcome-logo">
            <img
              src="/logo.png"
              alt="EQuipHub Logo"
              width={38}
              height={38}
              style={{ borderRadius: '8px' }}
            />
            <span className="welcome-logo-text">
              <span style={{ color: 'var(--text)' }}>EQuip</span>
              <span style={{ color: 'var(--primary)' }}>Hub</span>
            </span>
          </div>
          <div className="welcome-nav-actions">
            <Link href="/login" className="btn btn-ghost btn-sm">Sign In</Link>
            <Link href="/register" className="btn btn-primary btn-sm">Get Started</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="welcome-hero">
        <div className="welcome-hero-inner">
          <div className="welcome-badge badge badge-primary animate-fade-in">
            🎓 Built for University Departments
          </div>
          <h1 className="welcome-heading animate-slide-up">
            Equipment Management,
            <br />
            <span className="welcome-heading-accent">Simplified.</span>
          </h1>
          <p className="welcome-sub animate-slide-up">
            EQuipHub streamlines the entire equipment lifecycle — from student
            requests and lecturer approvals to technical officer inspections and
            penalty tracking. One platform for every role.
          </p>
          <div className="welcome-cta-row animate-slide-up">
            <Link href="/login" className="btn btn-primary btn-lg">
              ⚡ Get Started
            </Link>
            <a
              href="https://github.com/Ravindu56/EQuipHub"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-lg"
            >
              ★ View on GitHub
            </a>
          </div>
        </div>

        {/* Floating stat cards */}
        <div className="welcome-hero-cards">
          <div className="glass-card welcome-stat-card animate-scale-in">
            <span className="welcome-stat-icon">📱</span>
            <div>
              <div className="welcome-stat-num">3</div>
              <div className="welcome-stat-label">Platforms</div>
            </div>
          </div>
          <div className="glass-card welcome-stat-card animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <span className="welcome-stat-icon">👥</span>
            <div>
              <div className="welcome-stat-num">8</div>
              <div className="welcome-stat-label">User Roles</div>
            </div>
          </div>
          <div className="glass-card welcome-stat-card animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <span className="welcome-stat-icon">🏛️</span>
            <div>
              <div className="welcome-stat-num">2</div>
              <div className="welcome-stat-label">Departments</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="welcome-section">
        <div className="welcome-section-inner">
          <div className="welcome-section-header">
            <h2 className="welcome-section-title">Everything your department needs</h2>
            <p className="welcome-section-sub">
              A unified system covering every step of the equipment borrowing workflow.
            </p>
          </div>
          <div className="welcome-features-grid">
            {[
              { icon: '📋', title: 'Equipment Requests', desc: 'Students browse and request lab equipment directly from any device with real-time availability.' },
              { icon: '✅', title: 'Approval Workflow', desc: 'Lecturers review and approve or reject requests with one tap. Full audit trail maintained.' },
              { icon: '🔧', title: 'Issuance & Returns', desc: 'Technical Officers log equipment issue, condition assessment on return, and inspection records.' },
              { icon: '⚠️', title: 'Penalty Management', desc: 'Automated penalty tracking for damages or late returns with a built-in student appeal system.' },
              { icon: '📊', title: 'Analytics Dashboard', desc: 'Admins get real-time insights into equipment utilisation, request trends, and departmental activity.' },
              { icon: '🔐', title: 'Secure & Role-Based', desc: 'JWT authentication with Spring Security. Every user sees only what their role permits.' },
            ].map((f, i) => (
              <div key={i} className="glass-card welcome-feature-card">
                <div className="welcome-feature-icon">{f.icon}</div>
                <h3 className="welcome-feature-title">{f.title}</h3>
                <p className="welcome-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="welcome-section welcome-section-alt">
        <div className="welcome-section-inner">
          <div className="welcome-section-header">
            <h2 className="welcome-section-title">Built on a modern stack</h2>
            <p className="welcome-section-sub">Production-grade technologies powering every layer.</p>
          </div>
          <div className="welcome-tech-grid">
            {[
              { layer: '📱 Mobile', items: ['React Native', 'Expo SDK 54', 'React 19'], color: 'var(--primary)' },
              { layer: '⚙️ Backend', items: ['Spring Boot 3.2', 'Java 17', 'Spring Security'], color: 'var(--primary-light)' },
              { layer: '🌐 Web', items: ['Next.js 14', 'Tailwind CSS', 'TypeScript 5'], color: 'var(--secondary)' },
              { layer: '🗄️ Database', items: ['PostgreSQL (Neon)', 'Redis (Upstash)', 'Spring JPA'], color: 'var(--muted)' },
            ].map((t, i) => (
              <div key={i} className="glass-card welcome-tech-card">
                <div className="welcome-tech-layer" style={{ color: t.color }}>{t.layer}</div>
                <ul className="welcome-tech-list">
                  {t.items.map((item, j) => (
                    <li key={j} className="welcome-tech-item">
                      <span className="welcome-tech-dot" style={{ background: t.color }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roles ── */}
      <section className="welcome-section">
        <div className="welcome-section-inner">
          <div className="welcome-section-header">
            <h2 className="welcome-section-title">A portal for every role</h2>
            <p className="welcome-section-sub">Tailored dashboards and workflows for each user type.</p>
          </div>
          <div className="welcome-roles-grid">
            {[
              { role: 'Student', icon: '🎓', desc: 'Browse equipment, submit requests, track status, manage penalties.' },
              { role: 'Lecturer', icon: '👨\u200d🏫', desc: 'Review and approve or reject student equipment requests.' },
              { role: 'Technical Officer', icon: '🔧', desc: 'Issue equipment, process returns, conduct condition inspections.' },
              { role: 'Dept. Admin', icon: '🏛️', desc: 'Manage department inventory, staff, students and configurations.' },
              { role: 'System Admin', icon: '⚙️', desc: 'System-wide oversight, department creation and global configuration.' },
            ].map((r, i) => (
              <div key={i} className="glass-card welcome-role-card">
                <div className="welcome-role-icon">{r.icon}</div>
                <div className="welcome-role-title">{r.role}</div>
                <p className="welcome-role-desc">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="welcome-cta-banner">
        <div className="welcome-cta-banner-inner">
          <h2 className="welcome-cta-banner-title">Ready to streamline your department?</h2>
          <p className="welcome-cta-banner-sub">
            Join the Department of Computer Engineering &amp; Department of Electrical &amp; Electronics Engineering.
          </p>
          <div className="welcome-cta-row" style={{ justifyContent: 'center' }}>
            <Link href="/login" className="btn btn-lg" style={{ background: 'var(--white)', color: 'var(--primary)', fontWeight: 700 }}>
              Sign In
            </Link>
            <Link href="/register" className="btn btn-lg btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'var(--white)' }}>
              Register as Student
            </Link>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="welcome-footer glass">
        <div className="welcome-footer-inner">
          <div className="welcome-logo">
            <img src="/logo.png" alt="EQuipHub" width={28} height={28} style={{ borderRadius: '6px' }} />
            <span style={{ fontWeight: 700, color: 'var(--text)' }}>EQuip<span style={{ color: 'var(--primary)' }}>Hub</span></span>
          </div>
          <p className="welcome-footer-copy">
            Built with ❤️ for university equipment management.
          </p>
          <a
            href="https://github.com/Ravindu56/EQuipHub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost btn-sm"
          >
            GitHub ↗
          </a>
        </div>
      </footer>

    </main>
  );
}
