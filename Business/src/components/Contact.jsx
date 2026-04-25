import { useState } from 'react'
import './Contact.css'

const SLOTS = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM']
const UNAVAILABLE = [1, 5, 11] // slot indices blocked
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']

function buildCalendar(year, month) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  return { firstDay, daysInMonth }
}

export default function Contact() {
  const today = new Date()
  const [viewYear, setViewYear] = useState(today.getFullYear())
  const [viewMonth, setViewMonth] = useState(today.getMonth())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [step, setStep] = useState(1) // 1=calendar, 2=confirm, 3=done
  const [phone, setPhone] = useState('')
  const [name, setName] = useState('')

  const { firstDay, daysInMonth } = buildCalendar(viewYear, viewMonth)

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11) }
    else setViewMonth(m => m - 1)
    setSelectedDate(null); setSelectedSlot(null)
  }
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0) }
    else setViewMonth(m => m + 1)
    setSelectedDate(null); setSelectedSlot(null)
  }

  const isPast = (day) => {
    const d = new Date(viewYear, viewMonth, day)
    d.setHours(0,0,0,0)
    const t = new Date(); t.setHours(0,0,0,0)
    return d < t
  }
  const isWeekend = (day) => {
    const dow = new Date(viewYear, viewMonth, day).getDay()
    return dow === 0 || dow === 6
  }

  const handleConfirm = () => setStep(3)

  const formattedDate = selectedDate
    ? `${DAYS[new Date(viewYear, viewMonth, selectedDate).getDay()]}, ${selectedDate} ${MONTHS[viewMonth]} ${viewYear}`
    : ''

  const cells = []
  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let d = 1; d <= daysInMonth; d++) cells.push(d)

  return (
    <section className="booking-section" id="contact">
      <div className="booking-inner">

        {/* Left panel */}
        <div className="booking-left">
          <div className="booking-host">
            <div className="booking-host-av">AF</div>
            <div>
              <div className="booking-host-name">Veloxo</div>
              <div className="booking-host-role">Business Automation Experts · Jaipur</div>
            </div>
          </div>
          <h2 className="booking-title">Free 1-on-1 Strategy Call</h2>
          <div className="booking-meta">
            <div className="booking-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              30 minutes
            </div>
            <div className="booking-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.96-1.05a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              Phone / WhatsApp call
            </div>
            <div className="booking-meta-item">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
              1-on-1 with our founder
            </div>
          </div>
          <p className="booking-desc">
            In 30 minutes we'll understand your business, identify the biggest time-wasters, and show you a clear automation plan — at zero cost.
          </p>
          <div className="booking-perks">
            {['No prep needed','No commitment','Get a free audit doc after the call'].map((p, i) => (
              <div key={i} className="booking-perk">
                <span className="booking-perk-check">✓</span> {p}
              </div>
            ))}
          </div>
          <div className="booking-contact-row">
            <a href="mailto:hello@veloxo.in" className="booking-contact-link">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            hello@veloxo.in
            </a>
            <a href="tel:+919876543210" className="booking-contact-link">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.96-1.05a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              +91 98765 43210
            </a>
          </div>
        </div>

        {/* Right panel */}
        <div className="booking-right">

          {step === 3 ? (
            /* ── Confirmed ── */
            <div className="booking-confirmed">
              <div className="booking-confirmed-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <h3>You're booked!</h3>
              <p>Your strategy call is confirmed. We'll WhatsApp you at <strong>{phone}</strong> shortly with the call details.</p>
              <div className="booking-confirmed-card">
                <div className="bcc-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {formattedDate}
                </div>
                <div className="bcc-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {selectedSlot} IST · 30 min
                </div>
                <div className="bcc-row">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M6 20v-2a6 6 0 0 1 12 0v2"/></svg>
                  {name}
                </div>
              </div>
              <button className="booking-reset" onClick={() => { setStep(1); setSelectedDate(null); setSelectedSlot(null); setPhone(''); setName('') }}>
                Book another slot
              </button>
            </div>
          ) : step === 2 ? (
            /* ── Confirm details ── */
            <div className="booking-confirm-step">
              <button className="booking-back" onClick={() => setStep(1)}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                Back
              </button>
              <h3 className="booking-step-title">Almost there!</h3>
              <div className="booking-slot-summary">
                <div className="bss-date">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  {formattedDate}
                </div>
                <div className="bss-time">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {selectedSlot} IST · 30 min
                </div>
              </div>
              <div className="booking-fields">
                <div className="booking-field">
                  <label>Your Name</label>
                  <input
                    type="text"
                    placeholder="Rajesh Kumar"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                </div>
                <div className="booking-field">
                  <label>WhatsApp Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="booking-confirm-btn"
                onClick={handleConfirm}
                disabled={!phone.trim() || !name.trim()}
              >
                Confirm My Call
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <p className="booking-privacy">🔒 We'll only use this to confirm your call. No spam.</p>
            </div>
          ) : (
            /* ── Step 1: Calendar + slots ── */
            <>
              {/* Calendar */}
              <div className="bk-cal">
                <div className="bk-cal-header">
                  <button className="bk-nav-btn" onClick={prevMonth}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                  </button>
                  <span className="bk-month-label">{MONTHS[viewMonth]} {viewYear}</span>
                  <button className="bk-nav-btn" onClick={nextMonth}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
                <div className="bk-cal-grid">
                  {DAYS.map(d => <div key={d} className="bk-day-label">{d}</div>)}
                  {cells.map((day, i) => (
                    <div
                      key={i}
                      className={[
                        'bk-day',
                        !day ? 'bk-day--empty' : '',
                        day && isPast(day) ? 'bk-day--past' : '',
                        day && isWeekend(day) ? 'bk-day--weekend' : '',
                        day && !isPast(day) && !isWeekend(day) ? 'bk-day--avail' : '',
                        day && selectedDate === day ? 'bk-day--selected' : '',
                      ].join(' ')}
                      onClick={() => {
                        if (day && !isPast(day) && !isWeekend(day)) {
                          setSelectedDate(day)
                          setSelectedSlot(null)
                        }
                      }}
                    >
                      {day || ''}
                    </div>
                  ))}
                </div>
                <div className="bk-cal-legend">
                  <span><span className="bk-legend-dot bk-legend-dot--avail" />Available</span>
                  <span><span className="bk-legend-dot bk-legend-dot--off" />Weekends off</span>
                </div>
              </div>

              {/* Time slots */}
              {selectedDate && (
                <div className="bk-slots">
                  <div className="bk-slots-title">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                    {formattedDate}
                  </div>
                  <div className="bk-slots-grid">
                    {SLOTS.map((slot, i) => (
                      <button
                        key={slot}
                        disabled={UNAVAILABLE.includes(i)}
                        className={[
                          'bk-slot',
                          UNAVAILABLE.includes(i) ? 'bk-slot--off' : '',
                          selectedSlot === slot ? 'bk-slot--selected' : '',
                        ].join(' ')}
                        onClick={() => setSelectedSlot(slot)}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {selectedSlot && (
                    <button className="bk-next-btn" onClick={() => setStep(2)}>
                      Continue with {selectedSlot}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                    </button>
                  )}
                </div>
              )}

              {!selectedDate && (
                <div className="bk-prompt">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{opacity:0.25}}><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                  <p>Pick a date above to see available time slots</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
