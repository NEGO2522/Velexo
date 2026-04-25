const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'WhatsApp Auto-Reply',
    desc: 'Instant replies to every customer message — 24/7. Capture leads, answer questions, book calls automatically.',
    tags: ['WhatsApp', 'Chatbot', 'Lead Capture'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'CRM & Lead Management',
    desc: 'All leads in one dashboard. Auto reminders, follow-ups, and a clear view of your sales pipeline.',
    tags: ['Lead Tracking', 'Dashboard', 'Follow-ups'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Automatic Invoicing',
    desc: 'GST invoices created and sent automatically. Track payments, chase dues — zero manual effort.',
    tags: ['GST Ready', 'Auto Invoice', 'PDF Export'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
      </svg>
    ),
    title: 'Task Automation',
    desc: 'Emails, approvals, record updates — automated. Your team gets hours back every single day.',
    tags: ['Workflows', 'Alerts', 'Team Tools'],
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Smart Follow-ups',
    desc: 'Auto-messages sent at the right time — after visits, purchases, or when a lead goes cold.',
    tags: ['Auto Follow-up', 'Campaigns', 'Retention'],
  },
]

export default function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-inner">
        <span className="section-label">What We Build</span>
        <h2 className="section-title">
          Software that runs your business<br />while you focus on growing it
        </h2>
        <p className="section-sub">
          Custom tools that handle the repetitive work — so nothing slips through the cracks.
        </p>
        <div className="divider" />
        <div className="services-grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, j) => <span className="service-tag" key={j}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
