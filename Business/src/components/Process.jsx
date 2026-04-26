const steps = [
  {
    num: '01',
    title: 'Free Discovery Call',
    desc: "We learn your business — what you do, where you're losing time, and what needs fixing. No prep needed.",
  },
  {
    num: '02',
    title: 'We Map the Automation',
    desc: 'We identify exactly which tasks to automate and show you how much time and money it saves every month.',
  },
  {
    num: '03',
    title: 'We Build It',
    desc: 'Custom software tailored to your workflows — not a template. Built around how your business actually works.',
  },
  {
    num: '04',
    title: 'Launch & Support',
    desc: 'We set everything up, train your team, and stay available. One dedicated person — always reachable.',
  },
]

export default function Process() {
  return (
    <section className="process-section" id="process">
      <div className="section-inner">
        <span className="eyebrow">How It Works</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'end', marginBottom: '3rem' }}>
          <h2 className="section-title">
            From first call to<br /><em>live system</em> in 4 steps
          </h2>
          <p className="section-sub">
            Simple, transparent, and fast. You're kept in the loop at every stage — no jargon, no surprises.
          </p>
        </div>

        <div className="process-steps">
          {steps.map((s, i) => (
            <div className="process-step" key={i}>
              <div className="step-num-circle">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
