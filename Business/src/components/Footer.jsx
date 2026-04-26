import { Link } from 'react-router-dom'

const LinkedInIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)
const TwitterIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
const WhatsAppIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
  </svg>
)
const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
)
const LogoIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="17 1 21 5 17 9"/>
    <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
    <polyline points="7 23 3 19 7 15"/>
    <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon"><LogoIcon /></div>
              <span>Vel<span className="logo-accent">oxo</span></span>
            </div>
            <p>
              We build software that saves time, cuts manual work, and helps your business grow.
              Built for small and medium businesses across India.
            </p>
            <div className="footer-socials">
              <a href="https://linkedin.com/company/veloxo" className="social-btn" title="LinkedIn" target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
              <a href="https://twitter.com/veloxo_in" className="social-btn" title="Twitter / X" target="_blank" rel="noopener noreferrer"><TwitterIcon /></a>
              <a href="https://wa.me/919413973399" className="social-btn" title="WhatsApp" target="_blank" rel="noopener noreferrer"><WhatsAppIcon /></a>
              <a href="https://instagram.com/veloxo.in" className="social-btn" title="Instagram" target="_blank" rel="noopener noreferrer"><InstagramIcon /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>What We Build</h4>
            <ul>
              <li><a href="#services">Auto Reply System</a></li>
              <li><a href="#services">Lead & CRM Tool</a></li>
              <li><a href="#services">Invoice System</a></li>
              <li><a href="#services">Task Automation</a></li>
              <li><a href="#services">Customer Follow-up</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#process">How We Work</a></li>
              <li><a href="#results">Results</a></li>
              <li><a href="#testimonials">Client Reviews</a></li>
              <li><a href="#">Join Our Team</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+919413973399">+91 94139 73399</a></li>
              <li><a href="#">Jaipur, Rajasthan</a></li>
              <li><a href="#contact">Book a Free Call</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Veloxo. All rights reserved.</p>
          <p>
            <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            {' · '}
            <Link to="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
