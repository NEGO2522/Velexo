import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-eyebrow">Legal</div>
          <h1 className="legal-title">Privacy Policy</h1>
          <p className="legal-meta">Last updated: April 25, 2025 · Veloxo, Jaipur, Rajasthan, India</p>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-inner">

          <div className="legal-intro">
            At Veloxo, we take your privacy seriously. This policy explains what information we collect, how we use it, and your rights around that data. By using our website or services, you agree to this policy.
          </div>

          <div className="legal-toc">
            <div className="legal-toc-title">Contents</div>
            {[
              ['1', 'Information We Collect'],
              ['2', 'How We Use Your Information'],
              ['3', 'Information Sharing'],
              ['4', 'Data Storage & Security'],
              ['5', 'Cookies'],
              ['6', 'Your Rights'],
              ['7', 'Third-Party Links'],
              ['8', 'Children\'s Privacy'],
              ['9', 'Changes to This Policy'],
              ['10', 'Contact Us'],
            ].map(([n, title]) => (
              <a key={n} href={`#section-${n}`} className="legal-toc-item">
                <span className="legal-toc-num">{n}</span>
                {title}
              </a>
            ))}
          </div>

          <section id="section-1" className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>We collect information in the following ways:</p>
            <h3>Information you give us directly</h3>
            <ul>
              <li><strong>Contact and booking details</strong> — When you fill our booking form, we collect your name, WhatsApp number, and business name.</li>
              <li><strong>Communication</strong> — If you email or WhatsApp us, we retain those messages to provide support and follow up.</li>
              <li><strong>Project information</strong> — When we work with you as a client, we may collect business details necessary to build your software.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li><strong>Usage data</strong> — We may collect basic analytics such as pages visited, time spent, and browser type via tools like Google Analytics.</li>
              <li><strong>Device information</strong> — IP address, browser version, and operating system for security and performance purposes.</li>
              <li><strong>Cookies</strong> — Small files stored on your device to improve your experience (see Section 5).</li>
            </ul>
          </section>

          <section id="section-2" className="legal-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and confirm bookings</li>
              <li>Deliver and improve our software services</li>
              <li>Send you relevant updates about your project or our services (you can opt out at any time)</li>
              <li>Analyse how our website is used so we can improve it</li>
              <li>Comply with legal obligations</li>
              <li>Prevent fraud and ensure the security of our systems</li>
            </ul>
            <p>We will never use your data for purposes you have not been informed about, and we will never sell your personal information to third parties.</p>
          </section>

          <section id="section-3" className="legal-section">
            <h2>3. Information Sharing</h2>
            <p>We do not sell, trade, or rent your personal information. We may share data only in the following limited circumstances:</p>
            <ul>
              <li><strong>Service providers</strong> — Trusted third-party tools we use to operate our business, such as Formspree (form submissions), Google Analytics (website analytics), and communication platforms. These providers are contractually bound to keep your data secure.</li>
              <li><strong>Legal requirements</strong> — If required by law, court order, or government authority, we may disclose your information.</li>
              <li><strong>Business transfers</strong> — In the unlikely event of a merger or acquisition, your data may be transferred as part of that transaction. You will be notified in advance.</li>
            </ul>
          </section>

          <section id="section-4" className="legal-section">
            <h2>4. Data Storage & Security</h2>
            <p>Your data is stored on secure servers. We implement industry-standard security measures including encryption in transit (HTTPS), access controls, and regular security reviews.</p>
            <p>However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.</p>
            <p>We retain your personal data only for as long as necessary to fulfil the purposes described in this policy, or as required by law. Booking enquiry data is retained for up to 2 years. Client project data is retained for the duration of the project and up to 3 years after.</p>
          </section>

          <section id="section-5" className="legal-section">
            <h2>5. Cookies</h2>
            <p>Our website uses cookies — small text files stored on your device. We use:</p>
            <ul>
              <li><strong>Essential cookies</strong> — Required for the website to function correctly (e.g. remembering your theme preference).</li>
              <li><strong>Analytics cookies</strong> — Help us understand how visitors use our site (e.g. Google Analytics). These are anonymous and do not identify you personally.</li>
            </ul>
            <p>You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website.</p>
          </section>

          <section id="section-6" className="legal-section">
            <h2>6. Your Rights</h2>
            <p>Under applicable Indian data protection laws (and GDPR where applicable), you have the right to:</p>
            <ul>
              <li><strong>Access</strong> — Request a copy of the personal data we hold about you</li>
              <li><strong>Correction</strong> — Ask us to correct inaccurate or incomplete data</li>
              <li><strong>Deletion</strong> — Request that we delete your personal data, subject to legal obligations</li>
              <li><strong>Objection</strong> — Object to how we process your data in certain circumstances</li>
              <li><strong>Portability</strong> — Request your data in a portable format</li>
              <li><strong>Withdraw consent</strong> — Where processing is based on consent, you can withdraw it at any time</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="tel:+919413973399">+91 94139 73399</a> or through our booking form.</p>
          </section>

          <section id="section-7" className="legal-section">
            <h2>7. Third-Party Links</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites. We encourage you to review their privacy policies before providing any personal information.</p>
          </section>

          <section id="section-8" className="legal-section">
            <h2>8. Children's Privacy</h2>
            <p>Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal data, please contact us immediately and we will delete it.</p>
          </section>

          <section id="section-9" className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date at the top of this page. For significant changes, we will notify existing clients directly. Continued use of our services after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section id="section-10" className="legal-section">
            <h2>10. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy or how we handle your data, please reach out:</p>
            <div className="legal-contact-card">
              <div className="legal-contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6 6l.96-1.05a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <a href="tel:+919413973399">+91 94139 73399</a>
              </div>
              <div className="legal-contact-row">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Jaipur, Rajasthan, India
              </div>
            </div>
          </section>

          <div className="legal-footer-nav">
            <Link to="/terms-of-service" className="legal-nav-link">
              Read our Terms of Service
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
