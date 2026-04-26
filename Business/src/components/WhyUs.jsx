const reasons = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Save 10+ Hours Weekly',
    desc: 'Automate the repetitive tasks your team does every day — give them time for real work.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
    title: 'Zero Errors',
    desc: 'Software is consistent. No missed follow-ups, no forgotten invoices, no human slip-ups.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
    title: 'Instant Responses',
    desc: 'Customers get a reply in seconds — even at 2am on a Sunday. Never miss a hot lead.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"/>
        <line x1="18" y1="20" x2="18" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="16"/>
      </svg>
    ),
    title: '40% More Sales',
    desc: 'Automated follow-ups mean leads never go cold. More conversions without extra effort.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10H12V2z"/>
        <path d="M12 2a10 10 0 0 1 10 10"/>
      </svg>
    ),
    title: 'Built Just for You',
    desc: 'Not a template. We study your business and build software that fits your exact workflows.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Ongoing Support',
    desc: 'One dedicated person from our team. Always available. Never leaves you stranded.',
  },
]

export default function WhyUs() {
  return (
    <section className="why-section" id="why">
      <div className="section-inner">
        <span className="section-label">Why AutoFlow</span>
        <h2 className="section-title">
          Results you'll see in<br />the first 30 days
        </h2>
        <p className="section-sub">
          We don't sell generic software. We build around your business, your customers, your workflows.
        </p>
        <div className="divider" />

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
