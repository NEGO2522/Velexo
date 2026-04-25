import { useState } from 'react'

/* ── CRM Demo ── */
function CRMDemo() {
  const leads = [
    { name: 'Priya Mehta',   company: 'HealthPlus',    status: 'Hot',      val: '₹1.2L', src: 'WhatsApp', time: '2m',  sc: 'hot'    },
    { name: 'Ankit Sharma',  company: 'SwiftLogix',    status: 'Follow-up', val: '₹85K', src: 'Web',      time: '1h',  sc: 'follow' },
    { name: 'Rohan Gupta',   company: 'BuildCore',     status: 'New',       val: '₹60K', src: 'Referral', time: '3h',  sc: 'new'    },
    { name: 'Sunita Patel',  company: 'AcademyPro',   status: 'Won',       val: '₹2.0L', src: 'Insta',    time: '1d',  sc: 'won'    },
    { name: 'Vikram Joshi',  company: 'NextGen Retail',status: 'New',       val: '₹45K', src: 'Email',    time: '2d',  sc: 'new'    },
  ]
  return (
    <div className="demo-panel">
      <div className="demo-panel-toolbar">
        <div className="demo-toolbar-left">
          <span className="demo-toolbar-title">👤 Lead Management — CRM</span>
          <span className="demo-toolbar-tag">5 active leads</span>
        </div>
        <div className="demo-toolbar-right">
          <button className="demo-tb-btn">+ Add Lead</button>
          <button className="demo-tb-btn demo-tb-btn--primary">⚡ Auto Follow-up All</button>
        </div>
      </div>

      {/* Pipeline strip */}
      <div className="demo-pipeline-strip">
        {[
          { label: 'New',       n: 12, c: '#0A84FF' },
          { label: 'Contacted', n: 8,  c: '#A78BFA' },
          { label: 'Demo',      n: 5,  c: '#F59E0B' },
          { label: 'Proposal',  n: 3,  c: '#00C896' },
          { label: 'Won',       n: 2,  c: '#22C55E' },
        ].map(s => (
          <div key={s.label} className="demo-pipe-stage">
            <div className="demo-pipe-bar">
              <div className="demo-pipe-fill" style={{ background: s.c }} />
            </div>
            <div className="demo-pipe-label">{s.label}</div>
            <div className="demo-pipe-count" style={{ color: s.c }}>{s.n}</div>
          </div>
        ))}
      </div>

      {/* Leads table */}
      <div className="demo-table">
        <div className="demo-table-head">
          <span>Contact</span><span>Company</span><span>Status</span><span>Source</span><span>Value</span><span>Last Touch</span><span>Actions</span>
        </div>
        {leads.map(l => (
          <div key={l.name} className="demo-table-row">
            <span className="demo-lead-name">
              <div className="demo-av">{l.name.slice(0,2)}</div>
              <div>
                <div className="demo-av-name">{l.name}</div>
              </div>
            </span>
            <span className="demo-cell-muted">{l.company}</span>
            <span><span className={`demo-badge demo-badge--${l.sc}`}>{l.status}</span></span>
            <span className="demo-cell-muted">{l.src}</span>
            <span className="demo-cell-val">{l.val}</span>
            <span className="demo-cell-muted">{l.time} ago</span>
            <span className="demo-actions">
              <button className="demo-action-btn" title="Call">📞</button>
              <button className="demo-action-btn" title="WhatsApp">💬</button>
              <button className="demo-action-btn" title="Note">📝</button>
            </span>
          </div>
        ))}
      </div>

      {/* Footer bar */}
      <div className="demo-footer-bar">
        <span>🤖 AutoFlow AI: <strong>3 leads</strong> need follow-up today. <a href="#contact" className="demo-ai-link">Send auto-messages →</a></span>
      </div>
    </div>
  )
}

/* ── WhatsApp Demo ── */
function WhatsAppDemo() {
  const messages = [
    { from: 'lead',  text: 'Hi, I saw your ad. Can you tell me more about your services?',            time: '10:02 AM' },
    { from: 'bot',   text: 'Hi there! 👋 Thanks for reaching out to AutoFlow Solutions. I\'m the virtual assistant. How can I help you today?\n\n1️⃣ View Services\n2️⃣ Book a Consultation\n3️⃣ Get Pricing\n4️⃣ Talk to a Human', time: '10:02 AM' },
    { from: 'lead',  text: '2',                                                                        time: '10:03 AM' },
    { from: 'bot',   text: 'Great choice! 🗓️ Please share your name and the best time to call you, and our team will confirm your slot within 30 minutes.', time: '10:03 AM' },
    { from: 'lead',  text: 'Priya Mehta — available after 3 PM',                                      time: '10:04 AM' },
    { from: 'bot',   text: '✅ Got it, Priya! Your consultation request has been logged.\n\nOur team will call you after 3 PM today. Meanwhile, here\'s a quick overview of what we offer:\n👉 autoflowsolutions.in', time: '10:04 AM' },
    { from: 'bot',   text: '📋 Lead captured automatically. Rahul (your sales rep) has been notified.',time: '10:04 AM', system: true },
  ]
  return (
    <div className="demo-panel">
      <div className="demo-panel-toolbar">
        <div className="demo-toolbar-left">
          <span className="demo-toolbar-title">💬 WhatsApp Automation Flow</span>
          <span className="demo-toolbar-tag demo-toolbar-tag--green">● Live & Responding</span>
        </div>
        <div className="demo-toolbar-right">
          <span className="demo-cell-muted" style={{fontSize:'0.75rem'}}>342 auto-replies today</span>
          <button className="demo-tb-btn demo-tb-btn--primary">Edit Flow</button>
        </div>
      </div>

      <div className="demo-wa-wrap">
        {/* Flow steps left */}
        <div className="demo-wa-flow">
          <div className="demo-wa-flow-title">Automation Flow</div>
          {[
            { icon: '📲', label: 'Message Received',   desc: 'Any new WhatsApp message',   active: true  },
            { icon: '🤖', label: 'AI Intent Detection', desc: 'Understand what they want',  active: true  },
            { icon: '💬', label: 'Auto Reply Sent',     desc: 'Menu or smart response',      active: true  },
            { icon: '📋', label: 'Lead Captured',       desc: 'Saved to CRM automatically', active: true  },
            { icon: '🔔', label: 'Team Notified',       desc: 'Sales rep gets instant alert',active: false },
            { icon: '📅', label: 'Follow-up Scheduled', desc: 'Reminder set in 24 hours',   active: false },
          ].map((s, i) => (
            <div key={i} className={`demo-flow-step ${s.active ? 'demo-flow-step--done' : ''}`}>
              <div className="demo-flow-icon">{s.icon}</div>
              <div>
                <div className="demo-flow-label">{s.label}</div>
                <div className="demo-flow-desc">{s.desc}</div>
              </div>
              {s.active && <span className="demo-flow-check">✓</span>}
            </div>
          ))}
        </div>

        {/* Chat window right */}
        <div className="demo-wa-chat">
          <div className="demo-wa-header">
            <div className="demo-wa-av">AF</div>
            <div>
              <div className="demo-wa-name">AutoFlow Bot</div>
              <div className="demo-wa-status">● Online · Responding instantly</div>
            </div>
          </div>
          <div className="demo-wa-messages">
            {messages.map((m, i) => (
              m.system
                ? <div key={i} className="demo-wa-system">{m.text}</div>
                : <div key={i} className={`demo-wa-msg demo-wa-msg--${m.from}`}>
                    <div className="demo-wa-bubble">{m.text}</div>
                    <div className="demo-wa-time">{m.time}</div>
                  </div>
            ))}
          </div>
          <div className="demo-wa-input">
            <span className="demo-wa-input-box">Type a message…</span>
            <button className="demo-wa-send">▶</button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Invoice Demo ── */
function InvoiceDemo() {
  return (
    <div className="demo-panel">
      <div className="demo-panel-toolbar">
        <div className="demo-toolbar-left">
          <span className="demo-toolbar-title">🧾 Invoice & Billing Automation</span>
          <span className="demo-toolbar-tag">GST Ready · Auto-Send · PDF Export</span>
        </div>
        <div className="demo-toolbar-right">
          <button className="demo-tb-btn">📄 Download PDF</button>
          <button className="demo-tb-btn demo-tb-btn--primary">⚡ Send via WhatsApp</button>
        </div>
      </div>

      <div className="demo-invoice-wrap">

        {/* Invoice preview */}
        <div className="demo-invoice">
          <div className="demo-inv-header">
            <div>
              <div className="demo-inv-brand">⚡ AutoFlow Solutions</div>
              <div className="demo-inv-addr">Jaipur, Rajasthan · GST: 08XXXXX1234Z1</div>
              <div className="demo-inv-addr">hello@autoflowsolutions.in · +91 98765 43210</div>
            </div>
            <div className="demo-inv-meta">
              <div className="demo-inv-num">INVOICE</div>
              <div className="demo-inv-id">#INV-2025-0047</div>
              <div className="demo-inv-dates">
                <div><span>Date:</span> 25 Apr 2025</div>
                <div><span>Due:</span> 25 May 2025</div>
              </div>
            </div>
          </div>

          <div className="demo-inv-bill">
            <div className="demo-inv-bill-col">
              <div className="demo-inv-bill-label">Bill To</div>
              <div className="demo-inv-bill-name">Rohan Gupta</div>
              <div className="demo-inv-bill-co">BuildCore Pvt. Ltd.</div>
              <div className="demo-inv-bill-addr">Mumbai, Maharashtra</div>
            </div>
            <div className="demo-inv-status-pill">
              <span className="demo-badge demo-badge--follow">Pending Payment</span>
            </div>
          </div>

          <div className="demo-inv-table">
            <div className="demo-inv-thead">
              <span>#</span><span>Description</span><span>Qty</span><span>Rate</span><span>Amount</span>
            </div>
            {[
              { n: 1, desc: 'CRM Setup & Lead Automation',         qty: 1, rate: '₹35,000', amt: '₹35,000' },
              { n: 2, desc: 'WhatsApp Bot — 3 Month Licence',       qty: 3, rate: '₹5,000',  amt: '₹15,000' },
              { n: 3, desc: 'Monthly Maintenance & Support',        qty: 1, rate: '₹8,000',  amt: '₹8,000'  },
            ].map(r => (
              <div key={r.n} className="demo-inv-row">
                <span className="demo-inv-num-cell">{r.n}</span>
                <span>{r.desc}</span>
                <span>{r.qty}</span>
                <span>{r.rate}</span>
                <span className="demo-inv-amt">{r.amt}</span>
              </div>
            ))}
          </div>

          <div className="demo-inv-totals">
            <div className="demo-inv-total-row"><span>Subtotal</span><span>₹58,000</span></div>
            <div className="demo-inv-total-row"><span>GST @18%</span><span>₹10,440</span></div>
            <div className="demo-inv-total-row demo-inv-total-row--grand"><span>Total</span><span>₹68,440</span></div>
          </div>

          <div className="demo-inv-footer">
            <div className="demo-inv-note">
              <strong>Payment Note:</strong> Please pay within 30 days via UPI / Bank Transfer.<br />
              UPI: autoflow@upi · Account: XXXX XXXX 4321
            </div>
            <div className="demo-inv-auto-tag">⚡ Generated automatically by AutoFlow</div>
          </div>
        </div>

        {/* Sidebar stats */}
        <div className="demo-inv-sidebar">
          <div className="demo-inv-sb-title">Billing Overview</div>
          {[
            { label: 'Invoices This Month', val: '23',    color: '#0A84FF' },
            { label: 'Total Billed',        val: '₹6.4L', color: '#00C896' },
            { label: 'Paid',                val: '₹5.1L', color: '#22C55E' },
            { label: 'Overdue',             val: '₹72K',  color: '#FF6B6B' },
          ].map(s => (
            <div key={s.label} className="demo-inv-sb-card">
              <div className="demo-inv-sb-label">{s.label}</div>
              <div className="demo-inv-sb-val" style={{ color: s.color }}>{s.val}</div>
            </div>
          ))}

          <div className="demo-inv-sb-title" style={{marginTop:'1.5rem'}}>Recent Invoices</div>
          {[
            { id:'INV-0046', client:'Priya M.',  amt:'₹42K', sc:'won',    status:'Paid'    },
            { id:'INV-0045', client:'Ankit S.',  amt:'₹28K', sc:'hot',    status:'Sent'    },
            { id:'INV-0044', client:'Sunita P.', amt:'₹1.1L',sc:'follow', status:'Overdue' },
          ].map(r => (
            <div key={r.id} className="demo-inv-recent-row">
              <div>
                <div style={{fontSize:'0.78rem',fontWeight:600,color:'var(--dark)'}}>{r.id}</div>
                <div style={{fontSize:'0.7rem',color:'var(--muted)'}}>{r.client}</div>
              </div>
              <div style={{textAlign:'right'}}>
                <div style={{fontSize:'0.78rem',fontWeight:700,color:'var(--dark)'}}>{r.amt}</div>
                <span className={`demo-badge demo-badge--${r.sc}`} style={{fontSize:'0.62rem'}}>{r.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ── Main Demo Section ── */
const tabs = [
  { id: 'crm',       icon: '📊', label: 'CRM Dashboard',        sub: 'Lead tracking & pipeline' },
  { id: 'whatsapp',  icon: '💬', label: 'WhatsApp Automation',   sub: 'Auto-reply bot flow'      },
  { id: 'invoice',   icon: '🧾', label: 'Invoice System',        sub: 'GST billing & PDF export' },
]

export default function DemoSection() {
  const [active, setActive] = useState('crm')
  return (
    <section className="demo-section" id="demo">
      <div className="section-inner">
        <span className="section-label">Live Demo</span>
        <h2 className="section-title">See exactly what we build for you</h2>
        <p className="section-sub">
          Click any product below to see a live interactive demo of what your custom system will look like — before you commit to anything.
        </p>
        <div className="divider" />

        {/* Tab pills */}
        <div className="demo-tabs">
          {tabs.map(t => (
            <button
              key={t.id}
              className={`demo-tab ${active === t.id ? 'demo-tab--active' : ''}`}
              onClick={() => setActive(t.id)}
            >
              <span className="demo-tab-icon">{t.icon}</span>
              <div>
                <div className="demo-tab-label">{t.label}</div>
                <div className="demo-tab-sub">{t.sub}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="demo-panel-wrap">
          {active === 'crm'      && <CRMDemo />}
          {active === 'whatsapp' && <WhatsAppDemo />}
          {active === 'invoice'  && <InvoiceDemo />}
        </div>

        {/* CTA below */}
        <div className="demo-cta-row">
          <p className="demo-cta-text">This is exactly the kind of system we build for your business — customised to your workflows and branding.</p>
          <a href="#contact" className="btn-primary">Get This Built for My Business →</a>
        </div>
      </div>
    </section>
  )
}
