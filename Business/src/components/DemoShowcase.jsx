import { useState } from 'react'

const demos = [
  {
    id: 'crm',
    icon: '📊',
    color: '#3B9EFF',
    bg: 'rgba(59,158,255,0.08)',
    border: 'rgba(59,158,255,0.2)',
    title: 'Lead Tracking Tool (CRM)',
    desc: 'See all your leads in one place. The system automatically reminds you to follow up, shows where each lead is in your sales process, and tells you how much money you are making.',
    features: [
      'Reminds you to call or message leads on time',
      'Captures leads from WhatsApp, your website, and more',
      'Shows all leads in a simple list — no Excel needed',
      'Gives you a daily report of what is happening',
    ],
    demoRoute: '/demo/crm',
  },
  {
    id: 'whatsapp',
    icon: '💬',
    color: '#25D366',
    bg: 'rgba(37,211,102,0.08)',
    border: 'rgba(37,211,102,0.2)',
    title: 'WhatsApp Auto-Reply Bot',
    desc: 'When someone messages you on WhatsApp, the bot replies instantly — even at 2am. It answers common questions, collects their details, and books appointments. You do nothing.',
    features: [
      'Replies to every WhatsApp message in seconds',
      'Asks the customer the right questions to understand their need',
      'Books appointments or calls without your help',
      'Sends bulk messages to all your customers at once',
    ],
    demoRoute: '/demo/whatsapp',
  },
  {
    id: 'invoice',
    icon: '🧾',
    color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.2)',
    title: 'Invoice Maker (Auto)',
    desc: 'Stop making invoices by hand in Word or Excel. Our system creates a proper GST invoice, sends it to your client, and reminds them if they have not paid. All automatic.',
    features: [
      'Creates GST invoices in one click',
      'Sends the invoice to your client by email or WhatsApp',
      'Tracks which invoices are paid and which are pending',
      'Gives you a monthly report of all your income',
    ],
    demoRoute: '/demo/invoice',
  },
]

export default function DemoShowcase() {
  const [active, setActive] = useState('crm')
  const current = demos.find(d => d.id === active)

  return (
    <section className="demo-section" id="demo">
      <div className="section-inner">
        <span className="section-label">See It Working</span>
        <h2 className="section-title">
          Click below to see what we<br />actually build for businesses
        </h2>
        <p className="section-sub">
          These are real examples of tools we have built. You can show these to any business owner and they will understand right away.
        </p>
        <div className="divider" />

        {/* Tab selector */}
        <div className="demo-tabs">
          {demos.map(d => (
            <button
              key={d.id}
              className={`demo-tab ${active === d.id ? 'demo-tab--active' : ''}`}
              style={active === d.id ? { borderColor: d.color, color: d.color, background: d.bg } : {}}
              onClick={() => setActive(d.id)}
            >
              <span className="demo-tab-icon">{d.icon}</span>
              {d.title}
            </button>
          ))}
        </div>

        {/* Preview card */}
        <div className="demo-preview" style={{ borderColor: current.border }}>

          {/* Left: info */}
          <div className="demo-info">
            <div className="demo-info-icon" style={{ background: current.bg, color: current.color }}>
              {current.icon}
            </div>
            <h3 className="demo-info-title">{current.title}</h3>
            <p className="demo-info-desc">{current.desc}</p>
            <ul className="demo-features">
              {current.features.map(f => (
                <li key={f} className="demo-feature">
                  <span className="demo-check" style={{ color: current.color }}>✓</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="demo-actions">
              <a
                href={current.demoRoute}
                className="demo-cta"
                style={{ background: current.color }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Live Demo →
              </a>
              <a href="#contact" className="demo-secondary">Build This for My Business</a>
            </div>
          </div>

          {/* Right: mock visual */}
          <div className="demo-visual">
            {active === 'crm'      && <CrmPreview />}
            {active === 'whatsapp' && <WhatsAppPreview />}
            {active === 'invoice'  && <InvoicePreview />}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── CRM Mini Preview ── */
function CrmPreview() {
  return (
    <div className="dp dp-crm">
      <div className="dp-header">
        <div className="dp-dots"><span /><span /><span /></div>
        <div className="dp-title">Lead Tracking Dashboard</div>
        <div className="dp-live"><span />Live</div>
      </div>

      <div className="dp-kpi-row">
        {[
          ['1,284', 'Total Leads',  '#3B9EFF'],
          ['₹4.8L', 'Money Made',   '#00C896'],
          ['342',   'Follow-ups',   '#F59E0B'],
        ].map(([v, l, c]) => (
          <div key={l} className="dp-kpi">
            <div style={{ color: c, fontWeight: 800, fontSize: '1.2rem', fontFamily: 'Sora,sans-serif' }}>{v}</div>
            <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{l}</div>
          </div>
        ))}
      </div>

      <div className="dp-bars-wrap">
        <div style={{ fontSize: '0.6rem', color: 'rgba(255,255,255,0.35)', marginBottom: 6 }}>
          Leads converted this week
        </div>
        <div className="dp-bars">
          {[38, 55, 47, 72, 90, 78, 100].map((h, i) => (
            <div key={i} className="dp-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="dp-days">
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => <span key={i}>{d}</span>)}
        </div>
      </div>

      <div className="dp-rows">
        {[
          ['PM', 'Priya Mehta',  'Hot',       '#FF6B6B'],
          ['AS', 'Ankit Sharma', 'Follow-up', '#F59E0B'],
          ['RG', 'Rohan Gupta',  'New',       '#3B9EFF'],
        ].map(([av, name, st, c]) => (
          <div key={name} className="dp-row">
            <div className="dp-row-av">{av}</div>
            <span style={{ flex: 1, fontSize: '0.68rem', color: 'rgba(255,255,255,0.75)' }}>{name}</span>
            <span style={{ fontSize: '0.6rem', color: c, fontWeight: 600 }}>{st}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── WhatsApp Mini Preview ── */
function WhatsAppPreview() {
  const msgs = [
    {
      from: 'user',
      text: 'Hi, I want to know your price. What do you charge?',
    },
    {
      from: 'bot',
      text: '👋 Hello! Thank you for messaging AutoFlow Solutions.\n\nOur packages start at just ₹15,000.\n\nWhat would you like to do?\n1️⃣ Learn more about what we do\n2️⃣ Book a free demo call\n3️⃣ Get a price for my business',
    },
    {
      from: 'user',
      text: '2',
    },
    {
      from: 'bot',
      text: 'Great! Please tell me a good time for the call — morning or evening? I will book it for you right now.',
    },
  ]

  return (
    <div className="dp dp-wa">
      <div className="dp-wa-header">
        <div className="dp-wa-av">AF</div>
        <div>
          <div className="dp-wa-name">AutoFlow Bot</div>
          <div className="dp-wa-status">
            <span className="dp-wa-online" />
            Online — replies in seconds
          </div>
        </div>
      </div>

      <div className="dp-wa-body">
        {msgs.map((m, i) => (
          <div key={i} className={`dp-wa-msg dp-wa-msg--${m.from}`}>
            {m.text.split('\n').map((line, j) => (
              <p key={j} style={{ margin: '2px 0' }}>{line}</p>
            ))}
          </div>
        ))}
        <div className="dp-wa-typing">
          <span /><span /><span />
        </div>
      </div>

      <div className="dp-wa-input">
        <span>Type a message…</span>
        <div className="dp-wa-send">➤</div>
      </div>
    </div>
  )
}

/* ── Invoice Mini Preview ── */
function InvoicePreview() {
  const lineItems = [
    ['CRM Setup',           '1',     '₹35,000', '₹35,000'],
    ['WhatsApp Bot',        '1',     '₹9,000',  '₹9,000' ],
    ['Training & Support',  '2 hrs', '₹2,500',  '₹5,000' ],
  ]

  return (
    <div className="dp dp-inv">
      <div className="dp-inv-header">
        <div>
          <div className="dp-inv-brand">⚡ AutoFlow Solutions</div>
          <div className="dp-inv-addr">Jaipur, Rajasthan · GSTIN: 08XXXXX1234Z1</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div className="dp-inv-num">GST INVOICE</div>
          <div style={{ fontSize: '0.6rem', color: '#888' }}>#INV-0047</div>
          <div className="dp-inv-badge">PAID ✓</div>
        </div>
      </div>

      <div className="dp-inv-to">
        <div style={{ fontSize: '0.6rem', color: '#888', marginBottom: 2 }}>BILL TO</div>
        <div style={{ fontWeight: 700, fontSize: '0.75rem' }}>Priya Mehta</div>
        <div style={{ fontSize: '0.6rem', color: '#888' }}>VedaHealth Clinics, Jaipur</div>
      </div>

      <table className="dp-inv-table">
        <thead>
          <tr>
            <th>What We Did</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map(([item, qty, rate, amt]) => (
            <tr key={item}>
              <td>{item}</td>
              <td>{qty}</td>
              <td>{rate}</td>
              <td style={{ fontWeight: 600 }}>{amt}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="dp-inv-total">
        <div className="dp-inv-subtotals">
          <div className="dp-inv-line"><span>Total (before tax)</span><span>₹49,000</span></div>
          <div className="dp-inv-line"><span>GST 18%</span><span>₹8,820</span></div>
          <div className="dp-inv-line dp-inv-grand">
            <span>Amount to Pay</span>
            <span style={{ color: '#0A84FF' }}>₹57,820</span>
          </div>
        </div>
      </div>

      <div className="dp-inv-footer">
        This invoice was created automatically by AutoFlow · Thank you 🙏
      </div>
    </div>
  )
}
