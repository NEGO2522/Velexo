const metrics = [
  {
    pct: '60%',
    title: 'Faster Customer Replies',
    desc: 'Clients respond in seconds instead of hours. Happier customers, more sales.',
  },
  {
    pct: '40%',
    title: 'More Leads Convert',
    desc: 'Automated follow-ups keep leads warm. No more lost deals from a missed call-back.',
  },
  {
    pct: '80%',
    title: 'Less Manual Work',
    desc: 'Invoices, messages, records — the software does it. Your team does real work.',
  },
]

export default function Results() {
  return (
    <section className="results-section" id="results">
      <div className="section-inner">
        <span className="section-label">Real Results</span>
        <h2 className="section-title">
          Numbers from businesses<br />using AutoFlow right now
        </h2>
        <p className="section-sub">
          Not promises — actual data from our clients.
        </p>
        <div className="divider" />
        <div className="results-wrapper">

          {/* Dashboard Mockup */}
          <div className="dashboard-mockup">
            <div className="mock-header">
              <div className="mock-dot" style={{ background: '#FF5F56' }} />
              <div className="mock-dot" style={{ background: '#FFBD2E' }} />
              <div className="mock-dot" style={{ background: '#27C93F' }} />
              <span className="mock-title">AutoFlow Live Dashboard</span>
            </div>
            <div className="mock-stats">
              <div className="mock-stat">
                <div className="mock-stat-val">247</div>
                <div className="mock-stat-label">Leads This Month</div>
              </div>
              <div className="mock-stat">
                <div className="mock-stat-val">98%</div>
                <div className="mock-stat-label">Auto-Replied</div>
              </div>
              <div className="mock-stat">
                <div className="mock-stat-val">₹2.4L</div>
                <div className="mock-stat-label">Invoiced</div>
              </div>
            </div>
            <div className="mock-chart">
              <div style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.3)', marginBottom: '8px', fontWeight: 600 }}>
                Conversions — Last 7 Days
              </div>
              <div className="mock-bars">
                <div className="mock-bar" style={{ height: '40%' }} />
                <div className="mock-bar" style={{ height: '55%' }} />
                <div className="mock-bar" style={{ height: '45%' }} />
                <div className="mock-bar active" style={{ height: '75%' }} />
                <div className="mock-bar active" style={{ height: '88%' }} />
                <div className="mock-bar active" style={{ height: '80%' }} />
                <div className="mock-bar active" style={{ height: '100%' }} />
              </div>
            </div>
            <div className="mock-line">
              {[
                ['New Enquiries Today', '+34'],
                ['Invoices Auto-Sent', '18 / 18'],
                ['Follow-ups Queued', '52 ready'],
              ].map(([label, val]) => (
                <div className="mock-row" key={label}>
                  <span className="mock-row-label">{label}</span>
                  <span className="mock-row-val">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Metric cards */}
          <div className="results-metrics">
            {metrics.map((m, i) => (
              <div className="result-metric" key={i}>
                <div className="result-pct">{m.pct}</div>
                <div className="result-info">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
