import { useState, useRef, useEffect } from 'react'

/* ─── Tab definitions ─── */
const demos = [
  {
    id: 'crm', icon: '📊', color: '#3B9EFF',
    bg: 'rgba(59,158,255,0.08)', border: 'rgba(59,158,255,0.2)',
    title: 'Lead Tracking Tool (CRM)',
    desc: 'Click any lead to see details. Filter by status. Add a new lead using the button. This is exactly what we build for your business.',
    features: [
      'Reminds you to follow up on time — automatically',
      'Captures leads from WhatsApp, website, and more',
      'All leads in one place — no Excel needed',
      'Daily reports sent to you automatically',
    ],
  },
  {
    id: 'whatsapp', icon: '💬', color: '#25D366',
    bg: 'rgba(37,211,102,0.08)', border: 'rgba(37,211,102,0.2)',
    title: 'WhatsApp Auto-Reply Bot',
    desc: 'Type any message below and see the bot reply instantly. This is the exact same bot we set up on your real business WhatsApp number.',
    features: [
      'Replies to every message in seconds — even at 2am',
      'Asks the right questions to understand customer needs',
      'Books appointments or calls without your help',
      'Sends bulk messages to all customers at once',
    ],
  },
  {
    id: 'invoice', icon: '🧾', color: '#F59E0B',
    bg: 'rgba(245,158,11,0.08)', border: 'rgba(245,158,11,0.2)',
    title: 'Invoice Maker (Auto)',
    desc: 'Click "Add Item" and watch the total update live. Click "Send to Client" and it goes instantly. This is how it works for real businesses too.',
    features: [
      'Creates GST invoices in one click',
      'Sends to client by WhatsApp or email automatically',
      'Tracks which invoices are paid vs pending',
      'Monthly income report generated automatically',
    ],
  },
]

export default function DemoShowcase() {
  const [active, setActive] = useState('crm')
  const current = demos.find(d => d.id === active)

  return (
    <section className="demo-section" id="demo">
      <div className="section-inner">
        <span className="section-label">Try It Yourself</span>
        <h2 className="section-title">
          Live demos — click around and see<br />what we build for businesses
        </h2>
        <p className="section-sub">
          Everything below is interactive. Type messages, add items, filter leads — and see how it would work for your business.
        </p>
        <div className="divider" />

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

        <div className="demo-preview" style={{ borderColor: current.border }}>
          <div className="demo-info">
            <div style={{ width: 52, height: 52, borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.6rem', marginBottom: '1.25rem', background: current.bg }}>
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
            <div className="demo-actions" style={{ marginTop: '1.5rem' }}>
              <a href="#contact" className="demo-cta" style={{ background: current.color }}>
                Build This for My Business →
              </a>
            </div>
          </div>

          <div className="demo-visual">
            {active === 'crm'      && <CrmDemo />}
            {active === 'whatsapp' && <WhatsAppDemo />}
            {active === 'invoice'  && <InvoiceDemo />}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════
   CRM DEMO — filter, expand, add leads
═══════════════════════════════════════ */
const INITIAL_LEADS = [
  { id:1, initials:'PM', name:'Priya Mehta',  company:'VedaHealth', src:'WhatsApp',  status:'Hot',       value:'₹85,000', phone:'+91 98765 43210', note:'Interested in full CRM + WhatsApp bot package.' },
  { id:2, initials:'AS', name:'Ankit Sharma', company:'TechBridge', src:'Website',   status:'Follow-up', value:'₹42,000', phone:'+91 98123 45678', note:'Called once. Needs follow up this week.' },
  { id:3, initials:'RG', name:'Rohan Gupta',  company:'GuptaTex',   src:'Referral',  status:'New',       value:'₹1.2L',   phone:'+91 99887 65432', note:'Referred by Priya. Wants invoice automation.' },
  { id:4, initials:'SP', name:'Sunita Patel', company:'SunCrafts',  src:'Instagram', status:'Won',       value:'₹55,000', phone:'+91 97654 32109', note:'Deal closed. Onboarding on Monday.' },
  { id:5, initials:'KJ', name:'Karan Joshi',  company:'JoshiExim',  src:'WhatsApp',  status:'New',       value:'₹28,000', phone:'+91 91234 56789', note:'First message received. Not yet contacted.' },
]
const SC = {
  Hot:         { bg:'rgba(239,68,68,0.15)',   color:'#dc2626' },
  'Follow-up': { bg:'rgba(245,158,11,0.15)',  color:'#b45309' },
  New:         { bg:'rgba(59,130,246,0.15)',   color:'#2563eb' },
  Won:         { bg:'rgba(16,185,129,0.15)',   color:'#059669' },
}

function CrmDemo() {
  const [leads, setLeads]     = useState(INITIAL_LEADS)
  const [filter, setFilter]   = useState('All')
  const [expanded, setExpand] = useState(null)
  const [newName, setNewName] = useState('')
  const [showAdd, setShowAdd] = useState(false)
  const [toast, setToast]     = useState(null)

  const show = filter === 'All' ? leads : leads.filter(l => l.status === filter)

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(null), 2500) }

  const addLead = () => {
    if (!newName.trim()) return
    setLeads(p => [{
      id: Date.now(), initials: newName.slice(0,2).toUpperCase(),
      name: newName, company:'New Company', src:'Manual',
      status:'New', value:'—', phone:'—', note:'Newly added lead.',
    }, ...p])
    setNewName(''); setShowAdd(false); flash('Lead added!')
  }

  return (
    <div style={{ background:'#0B0F1A', borderRadius:12, overflow:'hidden', fontFamily:'DM Sans,sans-serif', position:'relative' }}>
      {toast && (
        <div style={{ position:'absolute', top:8, right:8, zIndex:20, background:'#10b981', color:'white', fontSize:'0.68rem', fontWeight:600, padding:'5px 12px', borderRadius:7, boxShadow:'0 4px 14px rgba(16,185,129,0.4)', animation:'fsIn .3s ease' }}>
          ✓ {toast}
        </div>
      )}

      {/* Header bar */}
      <div style={{ display:'flex', alignItems:'center', gap:7, background:'#080E1A', padding:'9px 13px', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display:'flex', gap:5 }}>
          {['#FF5F56','#FFBD2E','#27C93F'].map(c => <span key={c} style={{ width:8,height:8,borderRadius:'50%',background:c,display:'block' }} />)}
        </div>
        <span style={{ fontSize:'0.62rem', color:'rgba(255,255,255,0.35)', margin:'0 auto' }}>Lead Tracking CRM</span>
        <span style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.58rem', color:'#00C896', fontWeight:600 }}>
          <span style={{ width:5,height:5,borderRadius:'50%',background:'#00C896',display:'block' }} />Live
        </span>
      </div>

      {/* Toolbar */}
      <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between', padding:'8px 13px', borderBottom:'1px solid rgba(255,255,255,0.05)', gap:6, flexWrap:'wrap' }}>
        <div style={{ display:'flex', gap:4, flexWrap:'wrap' }}>
          {['All','Hot','New','Follow-up','Won'].map(f => (
            <button key={f} onClick={() => { setFilter(f); setExpand(null) }} style={{ fontSize:'0.58rem', fontWeight:600, padding:'3px 8px', borderRadius:5, border:'1px solid', borderColor:filter===f?'#3b82f6':'rgba(255,255,255,0.1)', background:filter===f?'rgba(59,130,246,0.18)':'rgba(255,255,255,0.04)', color:filter===f?'#60a5fa':'rgba(255,255,255,0.45)', cursor:'pointer', transition:'all .15s' }}>{f}</button>
          ))}
        </div>
        <button onClick={() => setShowAdd(s => !s)} style={{ fontSize:'0.58rem', fontWeight:700, padding:'3px 10px', borderRadius:5, border:'1px solid rgba(59,130,246,0.4)', background:'rgba(59,130,246,0.15)', color:'#60a5fa', cursor:'pointer' }}>
          + Add Lead
        </button>
      </div>

      {/* Add lead input */}
      {showAdd && (
        <div style={{ display:'flex', gap:6, padding:'8px 13px', background:'rgba(59,130,246,0.06)', borderBottom:'1px solid rgba(59,130,246,0.12)' }}>
          <input
            value={newName} onChange={e => setNewName(e.target.value)}
            onKeyDown={e => e.key==='Enter' && addLead()}
            placeholder="Type lead name and press Enter…"
            autoFocus
            style={{ flex:1, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.12)', borderRadius:6, padding:'5px 9px', fontSize:'0.67rem', color:'white', outline:'none', fontFamily:'DM Sans,sans-serif' }}
          />
          <button onClick={addLead} style={{ fontSize:'0.64rem', fontWeight:700, padding:'4px 10px', borderRadius:6, background:'#3b82f6', color:'white', border:'none', cursor:'pointer' }}>Add</button>
        </div>
      )}

      {/* Table header */}
      <div style={{ display:'grid', gridTemplateColumns:'1.8fr 0.9fr 0.8fr 0.7fr', padding:'6px 13px', fontSize:'0.49rem', color:'rgba(255,255,255,0.28)', fontWeight:700, textTransform:'uppercase', letterSpacing:'0.06em', borderBottom:'1px solid rgba(255,255,255,0.04)' }}>
        <span>Name</span><span>Source</span><span>Status</span><span>Value</span>
      </div>

      {/* Lead rows */}
      <div style={{ maxHeight:265, overflowY:'auto' }}>
        {show.length === 0 && (
          <div style={{ padding:20, textAlign:'center', fontSize:'0.66rem', color:'rgba(255,255,255,0.28)' }}>No leads with this status</div>
        )}
        {show.map(l => (
          <div key={l.id}>
            <div
              onClick={() => setExpand(expanded === l.id ? null : l.id)}
              style={{ display:'grid', gridTemplateColumns:'1.8fr 0.9fr 0.8fr 0.7fr', padding:'7px 13px', fontSize:'0.6rem', borderBottom:'1px solid rgba(255,255,255,0.04)', cursor:'pointer', alignItems:'center', background:expanded===l.id?'rgba(59,130,246,0.1)':'transparent', transition:'background .15s' }}
            >
              <span style={{ display:'flex', alignItems:'center', gap:7, color:'rgba(255,255,255,0.85)', fontWeight:500 }}>
                <div style={{ width:22,height:22,borderRadius:'50%',background:'linear-gradient(135deg,#3b82f6,#2563eb)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.46rem',fontWeight:700,color:'white',flexShrink:0 }}>{l.initials}</div>
                {l.name}
              </span>
              <span style={{ color:'rgba(255,255,255,0.38)', fontSize:'0.57rem' }}>{l.src}</span>
              <span>
                <span style={{ fontSize:'0.5rem', fontWeight:700, padding:'2px 6px', borderRadius:4, background:SC[l.status]?.bg, color:SC[l.status]?.color }}>
                  {l.status}
                </span>
              </span>
              <span style={{ color:'#10b981', fontWeight:600, fontSize:'0.58rem' }}>{l.value}</span>
            </div>

            {expanded === l.id && (
              <div style={{ padding:'9px 13px', background:'rgba(59,130,246,0.06)', borderBottom:'1px solid rgba(59,130,246,0.12)', animation:'fsIn .25s ease' }}>
                <div style={{ fontSize:'0.59rem', color:'rgba(255,255,255,0.48)', lineHeight:1.9 }}>
                  <div>📱 <span style={{ color:'rgba(255,255,255,0.8)' }}>{l.phone}</span></div>
                  <div>🏢 <span style={{ color:'rgba(255,255,255,0.8)' }}>{l.company}</span></div>
                  <div>📝 {l.note}</div>
                </div>
                <div style={{ display:'flex', gap:6, marginTop:7 }}>
                  {['📞 Call','💬 WhatsApp','✅ Mark Won'].map(a => (
                    <button key={a} onClick={e => { e.stopPropagation(); flash(`${a} → ${l.name}`) }} style={{ fontSize:'0.54rem', fontWeight:600, padding:'3px 8px', borderRadius:5, border:'1px solid rgba(255,255,255,0.12)', background:'rgba(255,255,255,0.05)', color:'rgba(255,255,255,0.65)', cursor:'pointer' }}>{a}</button>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer stats */}
      <div style={{ padding:'7px 13px', display:'flex', gap:14, fontSize:'0.56rem', color:'rgba(255,255,255,0.3)', borderTop:'1px solid rgba(255,255,255,0.04)' }}>
        <span>{leads.length} total</span>
        <span style={{ color:'#10b981' }}>{leads.filter(l=>l.status==='Won').length} won</span>
        <span style={{ color:'#ef4444' }}>{leads.filter(l=>l.status==='Hot').length} hot</span>
        <span style={{ color:'#f59e0b' }}>{leads.filter(l=>l.status==='Follow-up').length} follow-up</span>
      </div>

      <style>{`@keyframes fsIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}

/* ═══════════════════════════════════════
   WHATSAPP DEMO — real keyword bot
═══════════════════════════════════════ */
const BOT_RULES = [
  { kw:['price','cost','charge','rate','fee','how much','kitna'],
    r:'Our packages start at ₹15,000.\n\nFull system (WhatsApp + CRM + Invoices) = ₹45,000 — one-time, yours forever.\n\nShall I book you a free 30-min call to discuss?' },
  { kw:['demo','show','example','how it works','kaise'],
    r:"You're already using our demo right now 😄\n\nYou type → we reply automatically. Same thing happens on your real business WhatsApp number.\n\nWant to see everything on a call?" },
  { kw:['book','call','schedule','appointment','meet','meeting'],
    r:'Perfect!\n\nWhich time works best for you?\n1️⃣ Morning (9am – 12pm)\n2️⃣ Afternoon (2pm – 5pm)\n3️⃣ Evening (6pm – 8pm)\n\nJust reply with 1, 2, or 3.' },
  { kw:['1','morning'], r:'✅ Booked! Call confirmed for tomorrow at 10:00 AM IST.\n\nWe will call you on WhatsApp. You will get a reminder 30 mins before.\n\nSee you then! 🙏' },
  { kw:['2','afternoon'], r:'✅ Booked! Call confirmed for tomorrow at 3:00 PM IST.\n\nWe will call you on WhatsApp. You will get a reminder 30 mins before.\n\nSee you then! 🙏' },
  { kw:['3','evening'], r:'✅ Booked! Call confirmed for tomorrow at 7:00 PM IST.\n\nWe will call you on WhatsApp. You will get a reminder 30 mins before.\n\nSee you then! 🙏' },
  { kw:['invoice','bill','billing','payment'],
    r:'We build automatic invoice systems!\n\n✅ GST invoice in 1 click\n✅ Sent to client automatically\n✅ Payment reminders\n✅ Monthly income reports\n\nWant to see a live example?' },
  { kw:['crm','lead','customer','track','manage'],
    r:'We build custom CRM tools:\n• All leads in one dashboard\n• Auto follow-up reminders\n• WhatsApp lead capture\n• Daily reports\n\nType "Book a call" to see it live.' },
  { kw:['whatsapp','bot','auto','automate','reply'],
    r:'Yes, we build WhatsApp bots!\n\nYour bot can:\n✅ Reply to customers 24/7\n✅ Answer FAQs automatically\n✅ Collect name, number, need\n✅ Book appointments\n\nInterested? Type "Book a call".' },
  { kw:['hi','hello','hey','hii','helo','namaste','namaskar'],
    r:'👋 Hello! Welcome to AutoFlow Solutions.\n\nWe build software that automates your business:\n• WhatsApp auto-reply\n• Lead tracking (CRM)\n• Auto invoicing\n\nHow can I help you today?' },
]
const DEFAULT_REPLY = 'Thanks! 🙏\n\nI didn\'t quite understand that. Try:\n• "What is your price?"\n• "Book a call"\n• "Tell me about CRM"\n• "How does WhatsApp bot work?"'

function getReply(msg) {
  const l = msg.toLowerCase()
  const rule = BOT_RULES.find(r => r.kw.some(k => l.includes(k)))
  return rule ? rule.r : DEFAULT_REPLY
}

const INIT_MSGS = [{ from:'bot', text:'👋 Hello! Welcome to AutoFlow Solutions.\n\nWe build software that automates your business.\n\nTry typing:\n"What is your price?" or "Book a call"' }]
const QUICK = ['What is your price?', 'Book a call', 'Tell me about CRM']

function WhatsAppDemo() {
  const [msgs, setMsgs]   = useState(INIT_MSGS)
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef  = useRef(null)

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior:'smooth' }) }, [msgs, typing])

  const send = () => {
    const text = input.trim()
    if (!text) return
    setInput('')
    setMsgs(p => [...p, { from:'user', text }])
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMsgs(p => [...p, { from:'bot', text: getReply(text) }])
    }, 1000 + Math.random() * 700)
  }

  return (
    <div style={{ background:'#0A1A0F', border:'1px solid rgba(37,211,102,0.15)', borderRadius:12, overflow:'hidden', fontFamily:'DM Sans,sans-serif', display:'flex', flexDirection:'column' }}>
      {/* Header */}
      <div style={{ display:'flex', alignItems:'center', gap:10, background:'#0D2114', padding:'11px 14px', borderBottom:'1px solid rgba(37,211,102,0.1)' }}>
        <div style={{ width:32,height:32,borderRadius:'50%',background:'linear-gradient(135deg,#25D366,#128C7E)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.62rem',fontWeight:800,color:'white' }}>AF</div>
        <div>
          <div style={{ fontSize:'0.72rem', fontWeight:700, color:'white' }}>AutoFlow Bot</div>
          <div style={{ display:'flex', alignItems:'center', gap:4, fontSize:'0.55rem', color:'rgba(255,255,255,0.4)' }}>
            <span style={{ width:5,height:5,borderRadius:'50%',background:'#25D366',display:'block' }} />
            Online — replies instantly
          </div>
        </div>
        <button onClick={() => { setMsgs(INIT_MSGS); setTyping(false) }} style={{ marginLeft:'auto', fontSize:'0.53rem', color:'rgba(255,255,255,0.35)', background:'none', border:'none', cursor:'pointer' }}>Reset</button>
      </div>

      {/* Quick chips */}
      <div style={{ display:'flex', gap:5, padding:'7px 12px', flexWrap:'wrap', borderBottom:'1px solid rgba(37,211,102,0.08)', background:'rgba(0,0,0,0.1)' }}>
        {QUICK.map(q => (
          <button key={q} onClick={() => { setInput(q); setTimeout(() => inputRef.current?.focus(), 0) }} style={{ fontSize:'0.55rem', padding:'3px 8px', borderRadius:20, border:'1px solid rgba(37,211,102,0.3)', background:'rgba(37,211,102,0.08)', color:'#25D366', cursor:'pointer' }}>{q}</button>
        ))}
      </div>

      {/* Messages */}
      <div style={{ flex:1, padding:12, display:'flex', flexDirection:'column', gap:8, overflowY:'auto', maxHeight:260, background:'linear-gradient(180deg,#0A1A0F,#081208)', minHeight:200 }}>
        {msgs.map((m, i) => (
          <div key={i} style={{ maxWidth:'86%', alignSelf:m.from==='user'?'flex-end':'flex-start', animation:'fsIn .3s ease' }}>
            <div style={{ padding:'8px 11px', borderRadius:m.from==='user'?'12px 12px 3px 12px':'12px 12px 12px 3px', fontSize:'0.67rem', lineHeight:1.6, background:m.from==='user'?'#005C4B':'#1F2C34', color:'rgba(255,255,255,0.88)' }}>
              {m.text.split('\n').map((line, j) => <p key={j} style={{ margin:'1px 0' }}>{line}</p>)}
            </div>
          </div>
        ))}
        {typing && (
          <div style={{ display:'flex', gap:4, padding:4, alignSelf:'flex-start' }}>
            {[0,.2,.4].map((d,i) => <span key={i} style={{ width:6,height:6,borderRadius:'50%',background:'rgba(255,255,255,0.3)',display:'block',animation:`typingDot 1.2s ${d}s ease-in-out infinite` }} />)}
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ display:'flex', alignItems:'center', gap:8, padding:'9px 13px', background:'#1F2C34', borderTop:'1px solid rgba(255,255,255,0.06)' }}>
        <input
          ref={inputRef} value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key==='Enter' && send()}
          placeholder="Type a message and press Enter…"
          style={{ flex:1, background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.1)', borderRadius:20, padding:'6px 12px', fontSize:'0.68rem', color:'rgba(255,255,255,0.88)', outline:'none', fontFamily:'DM Sans,sans-serif' }}
        />
        <button onClick={send} style={{ width:30,height:30,borderRadius:'50%',background:'#25D366',border:'none',cursor:'pointer',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'0.8rem',color:'white',flexShrink:0 }}>➤</button>
      </div>

      <style>{`
        @keyframes fsIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}
        @keyframes typingDot{0%,80%,100%{transform:scale(.8);opacity:.4}40%{transform:scale(1.1);opacity:1}}
      `}</style>
    </div>
  )
}

/* ═══════════════════════════════════════
   INVOICE DEMO — add items, live totals
═══════════════════════════════════════ */
const PRESETS = [
  { desc:'WhatsApp Bot Setup',  qty:1, rate:18000 },
  { desc:'CRM Tool',            qty:1, rate:25000 },
  { desc:'Invoice Automation',  qty:1, rate:12000 },
  { desc:'Monthly Support',     qty:3, rate:3500  },
  { desc:'Training Session',    qty:2, rate:2500  },
]

function InvoiceDemo() {
  const [items, setItems] = useState([
    { id:1, desc:'WhatsApp Bot Setup', qty:1, rate:18000 },
    { id:2, desc:'CRM Tool',           qty:1, rate:25000 },
  ])
  const [paid, setPaid]   = useState(false)
  const [toast, setToast] = useState(null)

  const subtotal = items.reduce((s, it) => s + it.qty * it.rate, 0)
  const gst      = Math.round(subtotal * 0.18)
  const total    = subtotal + gst

  const flash = (msg) => { setToast(msg); setTimeout(() => setToast(null), 3000) }

  const addItem = () => {
    const unused = PRESETS.find(p => !items.some(it => it.desc === p.desc))
    if (!unused) { flash('All items already added!'); return }
    setItems(p => [...p, { id:Date.now(), ...unused }])
  }

  const allAdded = PRESETS.every(p => items.some(it => it.desc === p.desc))

  return (
    <div style={{ background:'white', borderRadius:12, padding:18, fontFamily:'DM Sans,sans-serif', fontSize:'0.68rem', position:'relative', boxShadow:'0 4px 24px rgba(0,0,0,0.08)' }}>
      {toast && (
        <div style={{ position:'absolute', top:10, right:10, zIndex:20, background:'#10b981', color:'white', fontSize:'0.66rem', fontWeight:600, padding:'5px 11px', borderRadius:7, boxShadow:'0 4px 14px rgba(16,185,129,0.35)', animation:'fsIn .3s ease' }}>
          ✓ {toast}
        </div>
      )}

      {/* Invoice header */}
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:13, paddingBottom:11, borderBottom:'1px solid #E2E8F0' }}>
        <div>
          <div style={{ fontWeight:800, fontSize:'0.9rem', color:'#0A84FF', fontFamily:'Sora,sans-serif' }}>⚡ AutoFlow Solutions</div>
          <div style={{ fontSize:'0.6rem', color:'#888', marginTop:2 }}>Jaipur · GSTIN: 08XXXXX1234Z1</div>
        </div>
        <div style={{ textAlign:'right' }}>
          <div style={{ fontSize:'0.6rem', fontWeight:700, color:'#1A2035', textTransform:'uppercase', letterSpacing:'0.05em' }}>GST Invoice</div>
          <div style={{ fontSize:'0.58rem', color:'#888', marginTop:1 }}>#INV-0048 · Apr 25, 2025</div>
          <div style={{ display:'inline-block', marginTop:4, padding:'2px 8px', borderRadius:5, fontSize:'0.55rem', fontWeight:700, background:paid?'#DCFCE7':'#FEF9C3', color:paid?'#16A34A':'#854D0E', transition:'all .3s' }}>
            {paid ? 'PAID ✓' : 'PENDING'}
          </div>
        </div>
      </div>

      {/* Bill to */}
      <div style={{ marginBottom:11, padding:'7px 10px', background:'#F8FAFD', borderRadius:7 }}>
        <div style={{ fontSize:'0.54rem', color:'#888', marginBottom:2, textTransform:'uppercase', letterSpacing:'0.05em' }}>Bill To</div>
        <div style={{ fontWeight:700, fontSize:'0.78rem' }}>Priya Mehta</div>
        <div style={{ fontSize:'0.6rem', color:'#888' }}>VedaHealth Clinics, Jaipur</div>
      </div>

      {/* Items */}
      <table style={{ width:'100%', borderCollapse:'collapse', marginBottom:8 }}>
        <thead>
          <tr>
            {['Description','Qty','Rate','Amount',''].map((h, i) => (
              <th key={i} style={{ textAlign:i===0?'left':'right', fontSize:'0.49rem', fontWeight:700, color:'#888', paddingBottom:5, borderBottom:'1px solid #E2E8F0', textTransform:'uppercase', letterSpacing:'0.05em', width:i===4?18:undefined }}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.map(it => (
            <tr key={it.id} style={{ animation:'fsIn .3s ease' }}>
              <td style={{ padding:'5px 0', borderBottom:'1px solid #F1F5F9', fontSize:'0.65rem' }}>{it.desc}</td>
              <td style={{ textAlign:'right', padding:'5px 4px', borderBottom:'1px solid #F1F5F9', color:'#64748b', fontSize:'0.62rem' }}>{it.qty}</td>
              <td style={{ textAlign:'right', padding:'5px 4px', borderBottom:'1px solid #F1F5F9', color:'#64748b', fontSize:'0.62rem' }}>₹{it.rate.toLocaleString()}</td>
              <td style={{ textAlign:'right', padding:'5px 0 5px 4px', borderBottom:'1px solid #F1F5F9', fontWeight:600, fontSize:'0.65rem' }}>₹{(it.qty*it.rate).toLocaleString()}</td>
              <td style={{ textAlign:'right', padding:'5px 0', borderBottom:'1px solid #F1F5F9' }}>
                <button onClick={() => setItems(p => p.filter(i => i.id !== it.id))} style={{ color:'#ef4444', background:'none', border:'none', cursor:'pointer', fontSize:'0.75rem', opacity:.55, lineHeight:1 }}>×</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add item */}
      <button onClick={addItem} disabled={allAdded} style={{ fontSize:'0.62rem', fontWeight:600, color:'#0A84FF', background:'rgba(10,132,255,0.06)', border:'1px dashed rgba(10,132,255,0.3)', borderRadius:6, padding:'5px 10px', cursor:allAdded?'default':'pointer', marginBottom:10, width:'100%', opacity:allAdded?.45:1, transition:'opacity .2s' }}>
        {allAdded ? 'All items added' : '+ Add Line Item'}
      </button>

      {/* Totals */}
      <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap:3, marginBottom:12 }}>
        {[['Subtotal', subtotal],['GST 18%', gst]].map(([l,v]) => (
          <div key={l} style={{ display:'flex', justifyContent:'space-between', width:'56%', fontSize:'0.62rem', color:'#64748b' }}>
            <span>{l}</span><span>₹{v.toLocaleString()}</span>
          </div>
        ))}
        <div style={{ display:'flex', justifyContent:'space-between', width:'56%', fontSize:'0.78rem', fontWeight:800, color:'#0A84FF', borderTop:'1.5px solid #E2E8F0', paddingTop:4, transition:'all .3s' }}>
          <span>Total</span><span>₹{total.toLocaleString()}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div style={{ display:'flex', gap:7 }}>
        <button onClick={() => flash('Invoice sent via WhatsApp & email!')} style={{ flex:1, fontSize:'0.65rem', fontWeight:700, padding:8, borderRadius:8, background:'#0A84FF', color:'white', border:'none', cursor:'pointer' }}>
          📤 Send to Client
        </button>
        <button onClick={() => { if (!paid) { setPaid(true); flash('Marked as paid! Client notified.') } }} disabled={paid} style={{ flex:1, fontSize:'0.65rem', fontWeight:700, padding:8, borderRadius:8, background:paid?'#DCFCE7':'#10b981', color:paid?'#16A34A':'white', border:'none', cursor:paid?'default':'pointer', transition:'all .3s' }}>
          {paid ? '✓ Paid' : '✅ Mark as Paid'}
        </button>
      </div>

      <div style={{ fontSize:'0.54rem', color:'#aaa', textAlign:'center', marginTop:9 }}>
        Auto-generated by AutoFlow · Thank you 🙏
      </div>

      <style>{`@keyframes fsIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </div>
  )
}
