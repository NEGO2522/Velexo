import { useEffect, useRef, useState } from 'react'

function useCounter(target, duration = 1200, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = (ts) => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [start, target, duration])
  return val
}

const NAV_ITEMS = [
  { label: 'Dashboard',   active: true,  icon: 'M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z' },
  { label: 'Leads',       active: false, icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z' },
  { label: 'Messages',    active: false, icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { label: 'Invoices',    active: false, icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6' },
  { label: 'Automations', active: false, icon: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14' },
]

const BAR_DATA = [
  { day: 'M', h: 38 }, { day: 'T', h: 55 }, { day: 'W', h: 47 },
  { day: 'T', h: 72 }, { day: 'F', h: 91 }, { day: 'S', h: 78 }, { day: 'S', h: 100 },
]

const LEADS = [
  { initials: 'PM', name: 'Priya Mehta',  src: 'WhatsApp',  st: 'Hot',       badge: 'hot',    val: '₹85,000' },
  { initials: 'AS', name: 'Ankit Sharma', src: 'Website',   st: 'Follow-up', badge: 'follow', val: '₹42,000' },
  { initials: 'RG', name: 'Rohan Gupta',  src: 'Referral',  st: 'New',       badge: 'new',    val: '₹1.2L'   },
  { initials: 'SP', name: 'Sunita Patel', src: 'Instagram', st: 'Won',       badge: 'won',    val: '₹55K'    },
]

/* ── Short text so nothing ever clips ── */
const NOTIFICATIONS = [
  { icon: '✓',  title: 'Follow-ups sent',   sub: 'Auto-completed · 2m ago', color: '#3b82f6' },
  { icon: '📄', title: 'Invoice auto-sent',  sub: '₹57,820 · Just now',      color: '#f59e0b' },
  { icon: '💬', title: 'New WhatsApp lead',  sub: 'Priya M. · Now',           color: '#10b981' },
]

export default function Hero() {
  const sectionRef = useRef(null)
  const [visible, setVisible]           = useState(false)
  const [barHeights, setBarHeights]     = useState(BAR_DATA.map(() => 0))
  const [pipeWidths, setPipeWidths]     = useState([0, 0, 0, 0, 0])
  const [notifVisible, setNotifVisible] = useState([false, false, false])
  const [activeLead, setActiveLead]     = useState(null)

  const leads    = useCounter(1284, 1400, visible)
  const revenue  = useCounter(48,   1600, visible)
  const followup = useCounter(342,  1300, visible)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    setTimeout(() => setBarHeights(BAR_DATA.map(b => b.h)), 200)
  }, [visible])

  useEffect(() => {
    if (!visible) return
    ;[90, 62, 38, 22, 14].forEach((target, i) =>
      setTimeout(() => setPipeWidths(p => { const n = [...p]; n[i] = target; return n }), 300 + i * 80)
    )
  }, [visible])

  useEffect(() => {
    if (!visible) return
    NOTIFICATIONS.forEach((_, i) =>
      setTimeout(() => setNotifVisible(p => { const n = [...p]; n[i] = true; return n }), 800 + i * 400)
    )
  }, [visible])

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-bg-grid" />
      <div className="hero-bg-radial" />
      <div className="hero-bg-accent" />

      <div className="hero-layout">

        {/* ── LEFT ── */}
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-pulse" />
            Built for Indian Businesses
          </div>

          <h1 className="hero-h1">
            Automate work.<br />
            <span className="hero-h1-gradient">Grow faster.</span>
          </h1>

          <p className="hero-lead">
            WhatsApp bots, lead tracking, auto invoicing —
            custom software that runs your business.
          </p>

          <a href="#contact" className="hero-btn-primary">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/>
              <line x1="16" y1="2" x2="16" y2="6"/>
              <line x1="8"  y1="2" x2="8"  y2="6"/>
              <line x1="3"  y1="10" x2="21" y2="10"/>
            </svg>
            Book a Free Call
          </a>
        </div>

        {/* ── RIGHT: dashboard ── */}
        <div className="hero-visual">
          <div className="hero-visual-glow" />

          <div className="hero-browser" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-browser-bar">
              <div className="hero-browser-dots">
                <span style={{ background: '#FF5F56' }} />
                <span style={{ background: '#FFBD2E' }} />
                <span style={{ background: '#27C93F' }} />
              </div>
              <div className="hero-browser-url">
                <span className="hero-url-lock">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                app.veloxo.in/dashboard
              </div>
              <div className="hero-browser-actions">
                <div className="hero-browser-btn" />
                <div className="hero-browser-btn" />
              </div>
            </div>

            <div className="hero-crm">
              {/* Sidebar */}
              <div className="hero-crm-sidebar">
                <div className="hcs-logo">
                  <div className="hcs-logo-icon">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                      <polyline points="17 1 21 5 17 9"/>
                      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                      <polyline points="7 23 3 19 7 15"/>
                      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                  </div>
                  <span>Veloxo</span>
                </div>
                {NAV_ITEMS.map(n => (
                  <div key={n.label} className={`hcs-nav ${n.active ? 'hcs-nav--on' : ''}`}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d={n.icon} />
                    </svg>
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
                      <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
                      </svg>
                      Search…
                    </div>
                    <div className="hcm-bell">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                        <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
                      </svg>
                      <span className="hcm-bell-dot" />
                    </div>
                  </div>
                </div>

                {/* KPI cards */}
                <div className="hcm-kpis">
                  {[
                    { label: 'Total Leads',   val: leads.toLocaleString(),         d: '+12%', up: true,  color: '#3b82f6' },
                    { label: 'Revenue',       val: `₹${(revenue/10).toFixed(1)}L`, d: '+28%', up: true,  color: '#10b981' },
                    { label: 'Follow-ups',    val: followup.toLocaleString(),       d: 'Today',up: true,  color: '#f59e0b' },
                    { label: 'Pending Bills', val: '17',                            d: '-3',   up: false, color: '#ef4444' },
                  ].map(k => (
                    <div key={k.label} className="hcm-kpi">
                      <div className="hcm-kpi-icon">
                        <div style={{ width:7, height:7, borderRadius:'50%', background:k.color, boxShadow:`0 0 6px ${k.color}` }} />
                      </div>
                      <div className="hcm-kpi-lbl">{k.label}</div>
                      <div className="hcm-kpi-val" style={{ color: k.color }}>{k.val}</div>
                      <div className={`hcm-kpi-d ${k.up ? 'hcm-up' : 'hcm-dn'}`}>{k.up ? '▲' : '▼'} {k.d}</div>
                    </div>
                  ))}
                </div>

                {/* Chart + Pipeline */}
                <div className="hcm-mid">
                  <div className="hcm-chart">
                    <div className="hcm-chart-title">Leads Converted — Last 7 Days</div>
                    <div className="hcm-bars">
                      {BAR_DATA.map((b, i) => (
                        <div key={i} className="hcm-bar-col">
                          <div className="hcm-bar" style={{
                            height: `${barHeights[i]}%`,
                            opacity: i >= 4 ? 1 : 0.3,
                            background: i >= 4 ? 'linear-gradient(to top,#c84b2f,#f0896a)' : 'rgba(255,255,255,0.12)',
                            transition: `height ${0.4 + i * 0.06}s cubic-bezier(0.34,1.56,0.64,1)`,
                          }} />
                          <span className="hcm-bar-day">{b.day}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="hcm-pipe">
                    <div className="hcm-chart-title">Pipeline</div>
                    {['New','Contacted','Demo','Offer','Closed'].map((s, i) => (
                      <div key={s} className="hcm-pipe-row">
                        <span className="hcm-pipe-s">{s}</span>
                        <div className="hcm-pipe-track">
                          <div className="hcm-pipe-fill" style={{
                            width: `${pipeWidths[i]}%`,
                            background: ['#3b82f6','#8b5cf6','#f59e0b','#10b981','#ef4444'][i],
                            transition: `width 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s`,
                          }} />
                        </div>
                        <span className="hcm-pipe-n">{[48,31,19,11,7][i]}</span>
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
                    {LEADS.map((l, i) => (
                      <div key={l.name} className="hcm-trow"
                        style={{
                          cursor: 'pointer',
                          background: activeLead === i ? 'rgba(200,75,47,0.08)' : '',
                          animation: visible ? `fadeSlideIn 0.4s ease both ${0.8 + i * 0.1}s` : 'none',
                          opacity: visible ? 1 : 0,
                        }}
                        onClick={() => setActiveLead(activeLead === i ? null : i)}
                      >
                        <span className="hcm-tname">
                          <div className="hcm-tav">{l.initials}</div>
                          {l.name}
                        </span>
                        <span className="hcm-tsrc">{l.src}</span>
                        <span><span className={`hcm-badge hcm-badge--${l.badge}`}>{l.st}</span></span>
                        <span className="hcm-tval">{l.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating notifications */}
          {NOTIFICATIONS.map((n, i) => (
            <div key={i} className={`hero-notif hero-notif--${i + 1}`} style={{
              opacity: notifVisible[i] ? 1 : 0,
              transform: notifVisible[i] ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.95)',
              transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
              <div className="hero-notif-icon" style={{ background: `${n.color}20`, color: n.color }}>
                {n.icon}
              </div>
              <div>
                <div className="hero-notif-title">{n.title}</div>
                <div className="hero-notif-sub">{n.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
