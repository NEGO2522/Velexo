const steps = [
  {
    num: '01',
    title: 'Free Discovery Call',
    desc: "We learn your business — what you do, where you're losing time, and what needs fixing.",
  },
  {
    num: '02',
    title: 'We Map the Automation',
    desc: 'We identify exactly which tasks to automate and show you how much time it saves.',
  },
  {
    num: '03',
    title: 'We Build It',
    desc: 'Custom software tailored to your workflows — not a generic template.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We set everything up, train your team, and stay available for any help you need.',
  },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-inner">
        <span className="section-label">How It Works</span>
        <h2 className="section-title">
          From first call to<br />live system in 4 steps
        </h2>
        <p className="section-sub">
          Simple, transparent, and fast. You're kept in the loop at every stage.
        </p>
        <div className="divider" />
        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="step-num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
