const testimonials = [
  {
    quote: 'In 2 months, sales went up 45%. Our system now follows up on every lead automatically. I wish we had done this 2 years ago.',
    name: 'Rajesh Kumar',
    role: 'Director, Apex Realty Group',
    initials: 'RK',
  },
  {
    quote: 'We were wasting 15+ hours a week on manual invoices. AutoFlow automated it all. GST-ready, auto-sent, zero errors.',
    name: 'Priya Mehta',
    role: 'CFO, VedaHealth Clinics',
    initials: 'PM',
  },
  {
    quote: 'WhatsApp replies, lead tracking, invoices — all manual before. Now it runs on its own and we just focus on closing deals.',
    name: 'Ankit Sharma',
    role: 'Founder, SwiftLogix Pvt. Ltd.',
    initials: 'AS',
  },
]

const StarIcon = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
  </svg>
)

export default function Testimonials() {
  return (
    <section className="testi-section" id="testimonials">
      <div className="section-inner">
        <span className="section-label">Client Stories</span>
        <h2 className="section-title">
          Real businesses,<br />real results
        </h2>
        <p className="section-sub">
          Hear directly from the owners and founders who use AutoFlow every day.
        </p>
        <div className="divider" />
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <span className="testi-quote-mark">"</span>
              <div className="testi-stars">
                {[...Array(5)].map((_, j) => <StarIcon key={j} />)}
              </div>
              <blockquote>{t.quote}</blockquote>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
