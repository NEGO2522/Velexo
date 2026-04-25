export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-grid" />
      <div className="hero-bg-radial" />
      <div className="hero-bg-accent" />

      <div className="hero-layout">

        {/* ── LEFT: Copy ── */}
        <div className="hero-copy">

          <div className="hero-eyebrow">
            <span className="hero-eyebrow-pulse" />
            Built for Indian Businesses
          </div>

          <h1 className="hero-h1">
            Automate the work.<br />
            <span className="hero-h1-gradient">Grow faster.</span>
          </h1>

          <p className="hero-lead">
            We build custom software that handles WhatsApp replies, lead follow-ups,
            invoices, and daily tasks — so your team focuses on what matters.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="hero-btn-primary">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book a Free Call
            </a>
            <a href="#services" className="hero-btn-secondary">
              See What We Build
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <div className="hero-stat-num">10+</div>
              <div className="hero-stat-label">Hours saved / week</div>
            </div>
            <div>
              <div className="hero-stat-num">40%</div>
              <div className="hero-stat-label">More leads converted</div>
            </div>
            <div>
              <div className="hero-stat-num">24/7</div>
              <div className="hero-stat-label">Automated replies</div>
            </div>
          </div>
        </div>

        {/* ── RIGHT: Dashboard Visual ── */}
        <div className="hero-visual">
          <div className="hero-visual-glow" />

          <div className="hero-browser">
            <div className="hero-browser-bar">
              <div className="hero-browser-dots">
                <span style={{ background: '#FF5F56' }} />
                <span style={{ background: '#FFBD2E' }} />
                <span style={{ background: '#27C93F' }} />
              </div>
              <div className="hero-browser-url">
                <span className="hero-url-lock">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                </span>
                app.veloxo.in/dashboard
              </div>
              <div className="hero-browser-actions">
                <div className="hero-browser-btn" />
                <div className="hero-browser-btn" />
              </div>
            </div>

            {/* CRM Dashboard */}
            <div className="hero-crm">
              {/* Sidebar */}
              <div className="hero-crm-sidebar">
                <div className="hcs-logo">
                  <div className="hcs-logo-icon">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="17 1 21 5 17 9"/>
                      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                      <polyline points="7 23 3 19 7 15"/>
                      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                  </div>
                  <span>Veloxo</span>
                </div>

                {[
                  { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>, label: 'Dashboard', active: true },
                  { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: 'Leads', active: false },
                  { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, label: 'Messages', active: false },
                  { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>, label: 'Invoices', active: false },
                  { icon: <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>, label: 'Automations', active: false },
                ].map(n => (
                  <div key={n.label} className={`hcs-nav ${n.active ? 'hcs-nav--on' : ''}`}>
                    <span>{n.icon}</span>
                    <span>{n.label}</span>
                    {n.active && <span className="hcs-nav-dot" />}
                  </div>
                ))}

                <div className="hcs-user">
                  <div className="hcs-av">RS</div>
                  <div>
                    <div className="hcs-name">Rahul S.</div>
                    <div className="hcs-role">Admin</div>
                  </div>
                  <div className="hcs-online" />
                </div>
              </div>

              {/* Main panel */}
              <div className="hero-crm-main">
                <div className="hcm-topbar">
                  <div>
                    <div className="hcm-greeting">Good morning, Rahul</div>
                    <div className="hcm-sub">Here's what's happening today</div>
                  </div>
                  <div className="hcm-topbar-r">
                    <div className="hcm-search">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                      Search…
                    </div>
                    <div className="hcm-bell">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
                      <span className="hcm-bell-dot" />
                    </div>
                  </div>
                </div>

                {/* KPI cards */}
                <div className="hcm-kpis">
                  {[
                    { label: 'Total Leads',   val: '1,284', d: '+12%', up: true  },
                    { label: 'Revenue',       val: '₹4.8L', d: '+28%', up: true  },
                    { label: 'Follow-ups',    val: '342',   d: 'Today', up: true  },
                    { label: 'Pending Bills', val: '17',    d: '-3',   up: false },
                  ].map(k => (
                    <div key={k.label} className="hcm-kpi">
                      <div className="hcm-kpi-icon">
                        <div style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--accent)', opacity: 0.6 }} />
                      </div>
                      <div className="hcm-kpi-lbl">{k.label}</div>
                      <div className="hcm-kpi-val">{k.val}</div>
                      <div className={`hcm-kpi-d ${k.up ? 'hcm-up' : 'hcm-dn'}`}>
                        {k.up ? '▲' : '▼'} {k.d}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart + Pipeline */}
                <div className="hcm-mid">
                  <div className="hcm-chart">
                    <div className="hcm-chart-title">Leads Converted — Last 7 Days</div>
                    <div className="hcm-bars">
                      {[['M',38],['T',55],['W',47],['T',73],['F',91],['S',78],['S',100]].map(([day, h], i) => (
                        <div key={i} className="hcm-bar-col">
                          <div className="hcm-bar" style={{ height: `${h}%`, opacity: i >= 4 ? 1 : 0.3 }} />
                          <span className="hcm-bar-day">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hcm-pipe">
                    <div className="hcm-chart-title">Pipeline</div>
                    {[
                      { s: 'New',       n: 48, p: 90 },
                      { s: 'Contacted', n: 31, p: 62 },
                      { s: 'Demo',      n: 19, p: 38 },
                      { s: 'Offer',     n: 11, p: 22 },
                      { s: 'Closed',    n:  7, p: 14 },
                    ].map(p => (
                      <div key={p.s} className="hcm-pipe-row">
                        <span className="hcm-pipe-s">{p.s}</span>
                        <div className="hcm-pipe-track">
                          <div className="hcm-pipe-fill" style={{ width: `${p.p}%` }} />
                        </div>
                        <span className="hcm-pipe-n">{p.n}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recent leads */}
                <div className="hcm-leads">
                  <div className="hcm-leads-title">Recent Leads</div>
                  <div className="hcm-table">
                    <div className="hcm-thead">
                      <span>Name</span><span>Source</span><span>Status</span><span>Value</span>
                    </div>
                    {[
                      { n: 'Priya Mehta',  src: 'WhatsApp',  st: 'Hot',       sc: 'hot',    v: '₹85,000' },
                      { n: 'Ankit Sharma', src: 'Website',   st: 'Follow-up', sc: 'follow', v: '₹42,000' },
                      { n: 'Rohan Gupta',  src: 'Referral',  st: 'New',       sc: 'new',    v: '₹1.2L'   },
                      { n: 'Sunita Patel', src: 'Instagram', st: 'Won',       sc: 'won',    v: '₹55K'    },
                    ].map(l => (
                      <div key={l.n} className="hcm-trow">
                        <span className="hcm-tname">
                          <div className="hcm-tav">{l.n.slice(0,2)}</div>
                          {l.n}
                        </span>
                        <span className="hcm-tsrc">{l.src}</span>
                        <span><span className={`hcm-badge hcm-badge--${l.sc}`}>{l.st}</span></span>
                        <span className="hcm-tval">{l.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notifications */}
          <div className="hero-notif hero-notif--1">
            <div className="hero-notif-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <div>
              <div className="hero-notif-title">12 follow-ups sent</div>
              <div className="hero-notif-sub">Auto-completed · 2 min ago</div>
            </div>
          </div>

          <div className="hero-notif hero-notif--2">
            <div className="hero-notif-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            </div>
            <div>
              <div className="hero-notif-title">Invoice auto-sent</div>
              <div className="hero-notif-sub">₹57,820 · Just now</div>
            </div>
          </div>

          <div className="hero-notif hero-notif--3">
            <div className="hero-notif-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <div>
              <div className="hero-notif-title">New WhatsApp lead</div>
              <div className="hero-notif-sub">Priya Mehta · Now</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
