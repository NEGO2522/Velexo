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
  { id: 'dashboard',   label: 'Dashboard',   icon: 'M3 3h7v7H3V3zm11 0h7v7h-7V3zM3 14h7v7H3v-7zm11 0h7v7h-7v-7z' },
  { id: 'leads',       label: 'Leads',       icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z' },
  { id: 'messages',    label: 'Messages',    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z' },
  { id: 'invoices',    label: 'Invoices',    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6' },
  { id: 'automations', label: 'Automations', icon: 'M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14' },
]

const BAR_DATA = [
  { day: 'M', h: 38, n: 4  },
  { day: 'T', h: 55, n: 6  },
  { day: 'W', h: 47, n: 5  },
  { day: 'T', h: 72, n: 8  },
  { day: 'F', h: 91, n: 11 },
  { day: 'S', h: 78, n: 9  },
  { day: 'S', h: 100,n: 12 },
]

const NOTIFICATIONS = [
  { icon: '✓',  title: 'Follow-ups sent',  sub: 'Auto-completed · 2m ago' },
  { icon: '📄', title: 'Invoice auto-sent', sub: '₹57,820 · Just now'      },
  { icon: '💬', title: 'New WhatsApp lead', sub: 'Priya M. · Now'           },
]

const ST     = 'rgba(255,255,255,0.88)'
const ST_DIM = 'rgba(255,255,255,0.45)'
const ST_BG  = 'rgba(255,255,255,0.10)'

/* ── Dashboard Panel ── */
function DashboardPanel({ visible, barHeights, pipeWidths, leads, revenue, followup, activeLead, setActiveLead }) {
  const [leadBars, setLeadBars] = useState([0, 0, 0, 0])

  useEffect(() => {
    if (!visible) return
    const targets = [100, 85, 55, 42]
    targets.forEach((t, i) =>
      setTimeout(() => setLeadBars(p => { const n = [...p]; n[i] = t; return n }), 900 + i * 120)
    )
  }, [visible])

  const LEAD_ROWS = [
    { initials:'PM', name:'Priya Mehta',  badge:'hot',    st:'Hot',       val:'₹85K'  },
    { initials:'RG', name:'Rohan Gupta',  badge:'new',    st:'New',       val:'₹1.2L' },
    { initials:'SP', name:'Sunita Patel', badge:'won',    st:'Won',       val:'₹55K'  },
    { initials:'AS', name:'Ankit Sharma', badge:'follow', st:'Follow-up', val:'₹42K'  },
  ]

  const totalWeek = BAR_DATA.reduce((s, b) => s + b.n, 0)

  return (
    <>
      <div className="hcm-topbar">
        <div>
          <div className="hcm-greeting">Good morning, Rahul</div>
          <div className="hcm-sub">Here&apos;s what&apos;s happening today</div>
        </div>
        <div className="hcm-topbar-r">
          <div className="hcm-search">
            <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            Search&hellip;
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

      <div className="hcm-kpis">
        {[
          { label: 'Total Leads',   val: leads.toLocaleString(),         d: '+12%', up: true  },
          { label: 'Revenue',       val: `₹${(revenue/10).toFixed(1)}L`, d: '+28%', up: true  },
          { label: 'Follow-ups',    val: followup.toLocaleString(),       d: 'Today', up: true },
          { label: 'Pending Bills', val: '17',                            d: '-3',   up: false },
        ].map(k => (
          <div key={k.label} className="hcm-kpi">
            <div className="hcm-kpi-icon" style={{ background: ST_BG }}>
              <div style={{ width:7, height:7, borderRadius:'50%', background: ST, boxShadow:'0 0 5px rgba(255,255,255,0.3)' }} />
            </div>
            <div className="hcm-kpi-lbl" style={{ color: ST_DIM }}>{k.label}</div>
            <div className="hcm-kpi-val" style={{ color: ST }}>{k.val}</div>
            <div className="hcm-kpi-d" style={{ color: k.up ? ST_DIM : 'rgba(255,255,255,0.3)' }}>
              {k.up ? '▲' : '▼'} {k.d}
            </div>
          </div>
        ))}
      </div>

      <div className="hcm-mid">
        <div className="hcm-chart">
          <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:4 }}>
            <div className="hcm-chart-title" style={{ marginBottom:0 }}>Leads Converted — Last 7 Days</div>
            <div style={{ fontSize:'0.52rem', fontWeight:700, color: ST }}>{totalWeek} total</div>
          </div>
          <div className="hcm-bars" style={{ height:46 }}>
            {BAR_DATA.map((b, i) => (
              <div key={i} className="hcm-bar-col">
                <span style={{ fontSize:'0.4rem', color: i === 6 ? ST : ST_DIM, fontWeight: i === 6 ? 700 : 400, marginBottom:1, lineHeight:1, opacity: visible ? 1 : 0, transition: `opacity 0.4s ease ${0.5 + i * 0.06}s` }}>{b.n}</span>
                <div className="hcm-bar" style={{
                  height: `${barHeights[i]}%`,
                  background: i === 6 ? 'rgba(255,255,255,0.85)' : `rgba(255,255,255,${0.08 + (i / BAR_DATA.length) * 0.18})`,
                  transition: `height ${0.4 + i * 0.06}s cubic-bezier(0.34,1.56,0.64,1)`,
                  boxShadow: i === 6 ? '0 0 6px rgba(255,255,255,0.3)' : 'none',
                }} />
                <span className="hcm-bar-day" style={{ color: i === 6 ? ST : ST_DIM, fontWeight: i === 6 ? 700 : 400 }}>{b.day}</span>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', justifyContent:'space-between', marginTop:4, paddingTop:4, borderTop:'1px solid rgba(255,255,255,0.07)' }}>
            <span style={{ fontSize:'0.46rem', color: ST_DIM }}>Best day: <span style={{ color: ST }}>Sun · 12</span></span>
            <span style={{ fontSize:'0.46rem', color: ST_DIM }}>Avg/day: <span style={{ color: ST }}>8</span></span>
            <span style={{ fontSize:'0.46rem', color: ST_DIM }}>▲ <span style={{ color: ST }}>+34%</span> vs last week</span>
          </div>
        </div>

        <div className="hcm-pipe">
          <div className="hcm-chart-title">Pipeline</div>
          {['New','Contacted','Demo','Offer','Closed'].map((s, i) => (
            <div key={s} className="hcm-pipe-row">
              <span className="hcm-pipe-s">{s}</span>
              <div className="hcm-pipe-track">
                <div className="hcm-pipe-fill" style={{
                  width: `${pipeWidths[i]}%`, background: ST,
                  opacity: [1, 0.8, 0.65, 0.5, 0.38][i],
                  transition: `width 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i * 0.08}s`,
                }} />
              </div>
              <span className="hcm-pipe-n" style={{ color: ST }}>{[48,31,19,11,7][i]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hcm-leads">
        <div className="hcm-leads-title">Recent Leads — Deal Value</div>
        <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
          {LEAD_ROWS.map((l, i) => (
            <div key={l.name} onClick={() => setActiveLead(activeLead === i ? null : i)}
              style={{ cursor:'pointer', background: activeLead===i?'rgba(255,255,255,0.06)':'rgba(255,255,255,0.03)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:5, padding:'5px 7px', animation: visible?`fadeSlideIn 0.4s ease both ${0.8+i*0.1}s`:'none', opacity: visible?1:0, transition:'background 0.15s' }}>
              <div style={{ display:'flex', alignItems:'center', gap:5, marginBottom:4 }}>
                <div className="hcm-tav" style={{ flexShrink:0 }}>{l.initials}</div>
                <span style={{ fontSize:'0.57rem', fontWeight:600, color: ST, flex:1 }}>{l.name}</span>
                <span className={`hcm-badge hcm-badge--${l.badge}`}>{l.st}</span>
                <span style={{ fontSize:'0.55rem', fontWeight:700, color: ST, fontFamily:'monospace', marginLeft:3 }}>{l.val}</span>
              </div>
              <div style={{ height:2.5, background:'rgba(255,255,255,0.07)', borderRadius:3, overflow:'hidden' }}>
                <div style={{ height:'100%', borderRadius:3, background:`rgba(255,255,255,${0.45-i*0.07})`, width:`${leadBars[i]}%`, transition:`width 0.8s cubic-bezier(0.34,1.56,0.64,1) ${0.9+i*0.13}s` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

/* ── Leads Panel — sab white/subtle, koi fancy color nahi ── */
function LeadsPanel({ visible }) {
  const [srcBars, setSrcBars]     = useState([0, 0, 0, 0, 0])
  const [scoreBars, setScoreBars] = useState([0, 0, 0, 0, 0])

  useEffect(() => {
    if (!visible) return
    ;[85,60,45,30,20].forEach((t,i) =>
      setTimeout(() => setSrcBars(p => { const n=[...p]; n[i]=t; return n }), 150 + i*80)
    )
    ;[92,88,74,61,45].forEach((t,i) =>
      setTimeout(() => setScoreBars(p => { const n=[...p]; n[i]=t; return n }), 200 + i*80)
    )
  }, [visible])

  /* No colors — sirf white opacity levels */
  const sources = [
    { label:'WhatsApp', val:85, count:'42' },
    { label:'Website',  val:60, count:'30' },
    { label:'Referral', val:45, count:'22' },
    { label:'Instagram',val:30, count:'15' },
    { label:'Other',    val:20, count:'10' },
  ]

  const leads = [
    { initials:'VM', name:'Vikram Mehta', score:92, scoreBar:scoreBars[0], val:'₹1.8L', badge:'hot',    st:'Hot'       },
    { initials:'SP', name:'Sunita Patel', score:88, scoreBar:scoreBars[1], val:'₹55K',  badge:'won',    st:'Won'       },
    { initials:'NK', name:'Neha Kapoor',  score:74, scoreBar:scoreBars[2], val:'₹65K',  badge:'follow', st:'Follow-up' },
    { initials:'AJ', name:'Arjun Joshi',  score:61, scoreBar:scoreBars[3], val:'₹90K',  badge:'new',    st:'New'       },
    { initials:'RD', name:'Rahul Desai',  score:45, scoreBar:scoreBars[4], val:'₹30K',  badge:'new',    st:'New'       },
  ]

  return (
    <>
      <div className="hcm-topbar">
        <div><div className="hcm-greeting">Lead Analytics</div><div className="hcm-sub">119 total leads · 12 need action today</div></div>
        <div className="hcm-topbar-r">
          <div className="hcm-search" style={{ fontSize:'0.52rem', padding:'2px 6px', cursor:'pointer' }}>+ Add Lead</div>
        </div>
      </div>

      <div className="hcm-kpis">
        {[{label:'New',n:18},{label:'Follow-up',n:14},{label:'Demo',n:9},{label:'Won',n:6}].map(s => (
          <div key={s.label} className="hcm-kpi">
            <div className="hcm-kpi-lbl" style={{ color: ST_DIM }}>{s.label}</div>
            <div className="hcm-kpi-val" style={{ color: ST, fontSize:'0.82rem' }}>{s.n}</div>
          </div>
        ))}
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:5 }}>

        {/* By Source — sab white bars, opacity se hierarchy */}
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:6, padding:'7px 8px' }}>
          <div style={{ fontSize:'0.52rem', fontWeight:700, color: ST_DIM, marginBottom:6, textTransform:'uppercase', letterSpacing:'0.06em' }}>By Source</div>
          <div style={{ display:'flex', flexDirection:'column', gap:5 }}>
            {sources.map((s,i) => (
              <div key={s.label} style={{ display:'flex', alignItems:'center', gap:5, animation: visible?`fadeSlideIn 0.3s ease both ${i*0.07}s`:'none', opacity: visible?1:0 }}>
                <span style={{ fontSize:'0.48rem', color: ST_DIM, width:36, flexShrink:0, textAlign:'right' }}>{s.label}</span>
                <div style={{ flex:1, height:5, background:'rgba(255,255,255,0.07)', borderRadius:3, overflow:'hidden' }}>
                  <div style={{
                    width: `${srcBars[i]}%`, height:'100%', borderRadius:3,
                    background: `rgba(255,255,255,${0.55 - i * 0.08})`,
                    transition: `width 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i*0.08}s`,
                  }} />
                </div>
                <span style={{ fontSize:'0.46rem', color: ST_DIM, width:20, flexShrink:0 }}>{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* New This Week — sab white bars, tallest bar brightest */}
        <div style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:6, padding:'7px 8px' }}>
          <div style={{ fontSize:'0.52rem', fontWeight:700, color: ST_DIM, marginBottom:6, textTransform:'uppercase', letterSpacing:'0.06em' }}>New This Week</div>
          <div style={{ display:'flex', alignItems:'flex-end', gap:3, height:42 }}>
            {[{day:'M',h:40,n:4},{day:'T',h:60,n:6},{day:'W',h:50,n:5},{day:'T',h:80,n:8},{day:'F',h:100,n:10},{day:'S',h:30,n:3},{day:'S',h:20,n:2}].map((b,i) => (
              <div key={i} style={{ flex:1, display:'flex', flexDirection:'column', alignItems:'center', gap:2, height:'100%', justifyContent:'flex-end' }}>
                <span style={{ fontSize:'0.38rem', color: ST_DIM }}>{b.n}</span>
                <div style={{
                  width:'100%', borderRadius:'2px 2px 0 0',
                  background: i===4 ? 'rgba(255,255,255,0.80)' : `rgba(255,255,255,${0.12 + (b.h/100)*0.18})`,
                  height: visible ? `${b.h}%` : '0%',
                  transition: `height ${0.4+i*0.06}s cubic-bezier(0.34,1.56,0.64,1) 0.1s`,
                  boxShadow: i===4 ? '0 0 5px rgba(255,255,255,0.3)' : 'none',
                }} />
                <span style={{ fontSize:'0.38rem', color: i===4 ? ST : 'rgba(255,255,255,0.25)' }}>{b.day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Score — sab white bars, brightness = score */}
      <div className="hcm-leads" style={{ flex:1 }}>
        <div className="hcm-leads-title">Lead Score Ranking</div>
        <div className="hcm-table">
          <div className="hcm-thead"><span>Name</span><span>Score</span><span>Status</span><span>Value</span></div>
          {leads.map((l,i) => (
            <div key={l.name} className="hcm-trow" style={{ animation: visible?`fadeSlideIn 0.35s ease both ${i*0.08}s`:'none', opacity: visible?1:0 }}>
              <span className="hcm-tname"><div className="hcm-tav">{l.initials}</div>{l.name}</span>
              <span>
                <div style={{ display:'flex', alignItems:'center', gap:3 }}>
                  <div style={{ width:28, height:3, background:'rgba(255,255,255,0.08)', borderRadius:2, overflow:'hidden' }}>
                    <div style={{
                      width: `${l.scoreBar}%`, height:'100%', borderRadius:2,
                      background: `rgba(255,255,255,${0.2 + (l.score/100)*0.65})`,
                      transition: `width 0.7s cubic-bezier(0.34,1.56,0.64,1) ${i*0.1}s`,
                    }} />
                  </div>
                  <span style={{ fontSize:'0.5rem', fontWeight:700, color: ST_DIM }}>{l.score}</span>
                </div>
              </span>
              <span><span className={`hcm-badge hcm-badge--${l.badge}`}>{l.st}</span></span>
              <span className="hcm-tval">{l.val}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

/* ── Messages Panel ── */
function MessagesPanel({ visible }) {
  const chats = [
    { initials:'PM', name:'Priya Mehta',  msg:'Can you send me the proposal?',       time:'2m',  unread:2 },
    { initials:'AS', name:'Ankit Sharma', msg:'Thanks! Will review and get back.',    time:'18m', unread:0 },
    { initials:'RG', name:'Rohan Gupta',  msg:'What is the setup timeline?',          time:'1h',  unread:1 },
    { initials:'VJ', name:'Vikram Joshi', msg:'Invoice received, payment on Friday.', time:'3h',  unread:0 },
  ]
  const msgs = [
    { from:'lead', text:'Can you send me the proposal?' },
    { from:'bot',  text:'Hi Priya! Sending the proposal right now. Scheduling a follow-up call for tomorrow 3PM — works for you?' },
    { from:'lead', text:'Yes, 3PM works!' },
    { from:'bot',  text:'Done! Call confirmed. You will get a WhatsApp reminder 30 mins before.' },
  ]
  return (
    <>
      <div className="hcm-topbar">
        <div><div className="hcm-greeting">Messages</div><div className="hcm-sub">3 unread · Auto-replies active</div></div>
        <div className="hcm-topbar-r">
          <div style={{ display:'flex', alignItems:'center', gap:3, fontSize:'0.55rem', color:'rgba(255,255,255,0.6)' }}>
            <span style={{ width:4, height:4, borderRadius:'50%', background:'rgba(255,255,255,0.6)', display:'inline-block' }} />Live
          </div>
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'0.9fr 1.1fr', gap:6, flex:1, minHeight:0 }}>
        <div style={{ display:'flex', flexDirection:'column', gap:3 }}>
          {chats.map((c,i) => (
            <div key={c.name} style={{ background: i===0?'rgba(255,255,255,0.06)':'', borderRadius:5, padding:'4px 5px', cursor:'pointer', animation: visible?`fadeSlideIn 0.3s ease both ${i*0.07}s`:'none', opacity: visible?1:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                <div className="hcm-tav" style={{ flexShrink:0 }}>{c.initials}</div>
                <div style={{ flex:1, minWidth:0 }}>
                  <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                    <span style={{ fontSize:'0.56rem', fontWeight:600, color: ST }}>{c.name}</span>
                    <span style={{ fontSize:'0.48rem', color: ST_DIM }}>{c.time}</span>
                  </div>
                  <div style={{ fontSize:'0.5rem', color: ST_DIM, whiteSpace:'nowrap', overflow:'hidden', textOverflow:'ellipsis', maxWidth:90 }}>{c.msg}</div>
                </div>
                {c.unread > 0 && <div style={{ width:12, height:12, borderRadius:'50%', background:'rgba(255,255,255,0.2)', color:'white', fontSize:'0.42rem', fontWeight:700, display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>{c.unread}</div>}
              </div>
            </div>
          ))}
        </div>
        <div style={{ display:'flex', flexDirection:'column', background:'rgba(255,255,255,0.03)', borderRadius:6, overflow:'hidden', border:'1px solid rgba(255,255,255,0.07)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:5, padding:'5px 8px', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
            <div className="hcm-tav">PM</div>
            <div>
              <div style={{ fontSize:'0.56rem', fontWeight:600, color: ST }}>Priya Mehta</div>
              <div style={{ fontSize:'0.48rem', color: ST_DIM }}>● Online</div>
            </div>
          </div>
          <div style={{ flex:1, padding:'6px 8px', display:'flex', flexDirection:'column', gap:4, overflowY:'hidden' }}>
            {msgs.map((m,i) => (
              <div key={i} style={{ display:'flex', justifyContent: m.from==='lead'?'flex-start':'flex-end' }}>
                <div style={{ fontSize:'0.52rem', lineHeight:1.4, padding:'4px 7px', borderRadius:7, maxWidth:'85%', background: m.from==='lead'?'rgba(255,255,255,0.08)':'rgba(255,255,255,0.18)', color: ST, animation: visible?`fadeSlideIn 0.3s ease both ${0.3+i*0.12}s`:'none', opacity: visible?1:0 }}>{m.text}</div>
              </div>
            ))}
          </div>
          <div style={{ display:'flex', alignItems:'center', gap:4, padding:'4px 8px', borderTop:'1px solid rgba(255,255,255,0.07)' }}>
            <div style={{ flex:1, fontSize:'0.5rem', color:'rgba(255,255,255,0.2)', padding:'3px 6px', background:'rgba(255,255,255,0.04)', borderRadius:4 }}>Reply…</div>
            <div style={{ width:16, height:16, borderRadius:'50%', background:'rgba(255,255,255,0.2)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'0.5rem', color:'white' }}>▶</div>
          </div>
        </div>
      </div>
    </>
  )
}

/* ── Invoices Panel ── */
function InvoicesPanel({ visible }) {
  const invs = [
    { id:'INV-0047', client:'Rohan Gupta',  amt:'₹68,440',   status:'Pending', badge:'follow' },
    { id:'INV-0046', client:'Priya Mehta',  amt:'₹42,000',   status:'Paid',    badge:'won'    },
    { id:'INV-0045', client:'Ankit Sharma', amt:'₹28,500',   status:'Sent',    badge:'hot'    },
    { id:'INV-0044', client:'Sunita Patel', amt:'₹1,10,000', status:'Overdue', badge:'new'    },
  ]
  return (
    <>
      <div className="hcm-topbar">
        <div><div className="hcm-greeting">Invoices &amp; Billing</div><div className="hcm-sub">23 invoices this month · GST ready</div></div>
        <div className="hcm-topbar-r"><div className="hcm-search" style={{ fontSize:'0.52rem' }}>+ New Invoice</div></div>
      </div>
      <div className="hcm-kpis">
        {[{label:'Total Billed',val:'₹6.4L'},{label:'Paid',val:'₹5.1L'},{label:'Pending',val:'₹98K'},{label:'Overdue',val:'₹72K'}].map(k => (
          <div key={k.label} className="hcm-kpi">
            <div className="hcm-kpi-lbl" style={{ color: ST_DIM }}>{k.label}</div>
            <div className="hcm-kpi-val" style={{ color: ST }}>{k.val}</div>
          </div>
        ))}
      </div>
      <div className="hcm-leads" style={{ flex:1 }}>
        <div className="hcm-leads-title">Recent Invoices</div>
        <div className="hcm-table">
          <div className="hcm-thead"><span>Invoice</span><span>Client</span><span>Status</span><span>Amount</span></div>
          {invs.map((inv,i) => (
            <div key={inv.id} className="hcm-trow" style={{ animation: visible?`fadeSlideIn 0.35s ease both ${i*0.08}s`:'none', opacity: visible?1:0 }}>
              <span style={{ fontSize:'0.52rem', color: ST_DIM, fontFamily:'monospace' }}>{inv.id}</span>
              <span className="hcm-tname" style={{ fontSize:'0.54rem' }}>{inv.client}</span>
              <span><span className={`hcm-badge hcm-badge--${inv.badge}`}>{inv.status}</span></span>
              <span className="hcm-tval">{inv.amt}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ fontSize:'0.52rem', padding:'5px 8px', background:'rgba(255,255,255,0.04)', borderRadius:5, color: ST_DIM }}>
        ⚡ <span style={{ color: ST }}>4 invoices</span> auto-sent this week via WhatsApp
      </div>
    </>
  )
}

/* ── Automations Panel ── */
function AutomationsPanel({ visible }) {
  const flows = [
    { icon:'💬', name:'WhatsApp Auto-Reply',  triggers:'342 triggered',    status:'on',  pct:92  },
    { icon:'📧', name:'Email Follow-up Seq.', triggers:'128 triggered',    status:'on',  pct:78  },
    { icon:'📋', name:'Lead Score Update',    triggers:'Auto · Real-time', status:'on',  pct:100 },
    { icon:'🧾', name:'Invoice Auto-Send',    triggers:'23 sent',           status:'on',  pct:85  },
    { icon:'🔔', name:'Overdue Reminder',     triggers:'Paused',            status:'off', pct:0   },
  ]
  return (
    <>
      <div className="hcm-topbar">
        <div><div className="hcm-greeting">Automations</div><div className="hcm-sub">4 active flows · saving ~6 hrs/day</div></div>
        <div className="hcm-topbar-r">
          <div style={{ fontSize:'0.52rem', color: ST_DIM, display:'flex', alignItems:'center', gap:3 }}>
            <span style={{ width:4, height:4, borderRadius:'50%', background: ST_DIM, display:'inline-block' }} />All systems live
          </div>
        </div>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap:5, flex:1 }}>
        {flows.map((f,i) => (
          <div key={f.name} style={{ display:'flex', alignItems:'center', gap:8, background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:6, padding:'6px 9px', animation: visible?`fadeSlideIn 0.35s ease both ${i*0.09}s`:'none', opacity: visible?1:0 }}>
            <div style={{ fontSize:'0.8rem', flexShrink:0 }}>{f.icon}</div>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:3 }}>
                <span style={{ fontSize:'0.56rem', fontWeight:600, color: f.status==='on'?ST:ST_DIM }}>{f.name}</span>
                <span style={{ fontSize:'0.48rem', color: f.status==='on'?ST:ST_DIM }}>{f.status==='on'?'● ON':'○ OFF'}</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                <div style={{ flex:1, height:2, background:'rgba(255,255,255,0.08)', borderRadius:2 }}>
                  <div style={{ width:`${f.pct}%`, height:'100%', background:'rgba(255,255,255,0.5)', borderRadius:2 }} />
                </div>
                <span style={{ fontSize:'0.46rem', color: ST_DIM, flexShrink:0 }}>{f.triggers}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize:'0.52rem', padding:'5px 8px', background:'rgba(255,255,255,0.04)', borderRadius:5, color: ST_DIM }}>
        🤖 AI saved <span style={{ color: ST }}>42 hrs</span> this month across all automations
      </div>
    </>
  )
}

/* ── Main Hero ── */
export default function Hero() {
  const sectionRef = useRef(null)
  const [visible, setVisible]           = useState(false)
  const [activeNav, setActiveNav]       = useState('dashboard')
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

  const panelProps = { visible, barHeights, pipeWidths, leads, revenue, followup, activeLead, setActiveLead }

  return (
    <section className="hero" id="home" ref={sectionRef}>
      <div className="hero-bg-grid" />
      <div className="hero-bg-radial" />
      <div className="hero-bg-accent" />

      <div className="hero-layout">
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

        <div className="hero-visual">
          <div className="hero-visual-glow" />
          <div className="hero-browser" style={{ position:'relative', zIndex:2 }}>
            <div className="hero-browser-bar">
              <div className="hero-browser-dots">
                <span style={{ background:'#FF5F56' }} />
                <span style={{ background:'#FFBD2E' }} />
                <span style={{ background:'#27C93F' }} />
              </div>
              <div className="hero-browser-url">
                <span className="hero-url-lock">
                  <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <rect x="3" y="11" width="18" height="11" rx="2"/>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                </span>
                app.veloxo.in/{activeNav}
              </div>
              <div className="hero-browser-actions">
                <div className="hero-browser-btn" /><div className="hero-browser-btn" />
              </div>
            </div>

            <div className="hero-crm">
              <div className="hero-crm-sidebar">
                <div className="hcs-logo">
                  <div className="hcs-logo-icon">
                    <svg width="11" height="11" viewBox="0 0 32 32" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20,4 24,8 20,12"/>
                      <path d="M8 14V12a4 4 0 0 1 4-4h12"/>
                      <polyline points="12,28 8,24 12,20"/>
                      <path d="M24 18v2a4 4 0 0 1-4 4H8"/>
                    </svg>
                  </div>
                  <span>Veloxo</span>
                </div>
                {NAV_ITEMS.map(n => (
                  <div key={n.id} className={`hcs-nav ${activeNav === n.id ? 'hcs-nav--on' : ''}`}
                    style={{ cursor:'pointer' }} onClick={() => setActiveNav(n.id)}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d={n.icon} />
                    </svg>
                    <span>{n.label}</span>
                    {activeNav === n.id && <span className="hcs-nav-dot" />}
                  </div>
                ))}
                <div className="hcs-user">
                  <div className="hcs-av">RS</div>
                  <div><div className="hcs-name">Rahul S.</div><div className="hcs-role">Admin</div></div>
                  <div className="hcs-online" />
                </div>
              </div>

              <div className="hero-crm-main" key={activeNav} style={{ animation:'fadeSlideIn 0.25s ease both' }}>
                {activeNav === 'dashboard'   && <DashboardPanel   {...panelProps} />}
                {activeNav === 'leads'       && <LeadsPanel       {...panelProps} />}
                {activeNav === 'messages'    && <MessagesPanel    {...panelProps} />}
                {activeNav === 'invoices'    && <InvoicesPanel    {...panelProps} />}
                {activeNav === 'automations' && <AutomationsPanel {...panelProps} />}
              </div>
            </div>
          </div>

          {NOTIFICATIONS.map((n, i) => (
            <div key={i} className={`hero-notif hero-notif--${i + 1}`} style={{
              opacity: notifVisible[i] ? 1 : 0,
              transform: notifVisible[i] ? 'translateY(0) scale(1)' : 'translateY(14px) scale(0.95)',
              transition: 'opacity 0.5s ease, transform 0.5s cubic-bezier(0.34,1.56,0.64,1)',
            }}>
              <div className="hero-notif-icon" style={{ background:'rgba(255,255,255,0.12)', color: ST }}>
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
