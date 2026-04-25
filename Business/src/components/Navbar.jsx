import { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#why',      label: 'Why Us'   },
  { href: '#process',  label: 'Process'  },
  { href: '#results',  label: 'Results'  },
  { href: '#contact',  label: 'Contact'  },
]

export default function Navbar() {
  const { dark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive]     = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const ids = links.map(l => l.href.slice(1))
    const obs = new IntersectionObserver(
      entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-inner">

          {/* ── Logo ── */}
          <a href="#home" className="nav-logo">
            <div className="logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="17 1 21 5 17 9"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                <polyline points="7 23 3 19 7 15"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
              </svg>
            </div>
            <span className="logo-text" style={{ fontFamily: "'Orbitron', sans-serif", fontSize: '1.05rem', letterSpacing: '0.12em', fontWeight: 900, textTransform: 'uppercase' }}>
              Vel<span className="logo-accent">oxo</span>
            </span>
          </a>

          {/* ── Desktop links ── */}
          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className={`nav-link ${active === l.href.slice(1) ? 'nav-link--active' : ''}`}>
                  {l.label}
                  <span className="nav-link-dot" />
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right controls ── */}
          <div className="nav-right">
            <button className="theme-toggle" onClick={toggle} aria-label={dark ? 'Switch to light' : 'Switch to dark'}>
              <span className="toggle-track">
                <span className="toggle-thumb">
                  {dark
                    ? <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    : <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                  }
                </span>
              </span>
            </button>

            <a href="#contact" className="nav-cta">
              Book a Call
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <button className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`} onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu">
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-drawer ${menuOpen ? 'mobile-drawer--open' : ''}`}>
        <ul className="mobile-links">
          {links.map(l => (
            <li key={l.href}>
              <a href={l.href} className="mobile-link" onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className="mobile-cta" onClick={() => setMenuOpen(false)}>Book a Call →</a>
          </li>
        </ul>
      </div>
    </>
  )
}
