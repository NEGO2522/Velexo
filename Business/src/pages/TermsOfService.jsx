import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function TermsOfService() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="legal-hero-inner">
          <div className="legal-eyebrow">Legal</div>
          <h1 className="legal-title">Terms of Service</h1>
          <p className="legal-meta">Last updated: April 25, 2025 · Veloxo, Jaipur, Rajasthan, India</p>
        </div>
      </div>

      <div className="legal-body">
        <div className="legal-inner">

          <div className="legal-intro">
            These Terms of Service govern your use of the Veloxo website and any services we provide. By accessing our website or engaging our services, you agree to these terms. Please read them carefully.
          </div>

          <div className="legal-toc">
            <div className="legal-toc-title">Contents</div>
            {[
              ['1', 'Acceptance of Terms'],
              ['2', 'Our Services'],
              ['3', 'Client Responsibilities'],
              ['4', 'Payment Terms'],
              ['5', 'Intellectual Property'],
              ['6', 'Confidentiality'],
              ['7', 'Limitation of Liability'],
              ['8', 'Project Timelines'],
              ['9', 'Termination'],
              ['10', 'Governing Law'],
              ['11', 'Changes to Terms'],
              ['12', 'Contact Us'],
            ].map(([n, title]) => (
              <a key={n} href={`#tos-${n}`} className="legal-toc-item">
                <span className="legal-toc-num">{n}</span>
                {title}
              </a>
            ))}
          </div>

          <section id="tos-1" className="legal-section">
            <h2>1. Acceptance of Terms</h2>
            <p>By visiting our website (veloxo.in), submitting a booking form, or engaging Veloxo for any service, you confirm that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.</p>
            <p>If you are entering into these terms on behalf of a company or organisation, you represent that you have the authority to do so.</p>
          </section>

          <section id="tos-2" className="legal-section">
            <h2>2. Our Services</h2>
            <p>Veloxo provides custom business automation software and related services, including but not limited to:</p>
            <ul>
              <li>WhatsApp auto-reply systems and chatbots</li>
              <li>CRM and lead management tools</li>
              <li>Automated invoicing and billing systems</li>
              <li>Task and workflow automation</li>
              <li>Customer follow-up systems</li>
              <li>Strategy consulting and discovery calls</li>
            </ul>
            <p>The specific scope of work for each project is agreed upon in writing before development begins. Anything outside that agreed scope is considered additional work and may be quoted separately.</p>
            <p>Initial discovery calls are provided free of charge with no obligation to proceed.</p>
          </section>

          <section id="tos-3" className="legal-section">
            <h2>3. Client Responsibilities</h2>
            <p>For a successful project, you agree to:</p>
            <ul>
              <li>Provide accurate and complete information about your business and requirements</li>
              <li>Respond to our requests for feedback, approvals, or content within agreed timelines</li>
              <li>Ensure you have the legal right to use any content, data, or materials you provide to us</li>
              <li>Not use our software for any illegal, fraudulent, or harmful purpose</li>
              <li>Keep your login credentials and API keys confidential</li>
              <li>Notify us promptly of any issues or changes that may affect the project</li>
            </ul>
            <p>Delays caused by late responses from the client may affect agreed project timelines without liability on Veloxo's part.</p>
          </section>

          <section id="tos-4" className="legal-section">
            <h2>4. Payment Terms</h2>
            <p>Payment terms are agreed in writing before each project begins. Standard terms are:</p>
            <ul>
              <li><strong>Deposit</strong> — 50% of the project fee is due before development begins</li>
              <li><strong>Final payment</strong> — The remaining 50% is due upon project completion, before final delivery</li>
              <li><strong>Ongoing retainers</strong> — Monthly support fees are due at the start of each month</li>
            </ul>
            <p>All prices are quoted in Indian Rupees (INR) and are exclusive of GST unless stated otherwise. GST will be charged at the applicable rate.</p>
            <p>Late payments may result in work being paused until payment is received. If payment is more than 30 days overdue, we reserve the right to terminate the agreement and retain the deposit.</p>
            <p>All sales are final. Refunds are considered on a case-by-case basis and are at our sole discretion.</p>
          </section>

          <section id="tos-5" className="legal-section">
            <h2>5. Intellectual Property</h2>
            <h3>Your content</h3>
            <p>You retain full ownership of all content, data, logos, and materials you provide to us. By sharing them, you grant Veloxo a licence to use them solely for the purpose of delivering your project.</p>
            <h3>Our work product</h3>
            <p>Upon receipt of full payment, you own the custom software and code we build specifically for you. You may use, modify, and distribute it freely.</p>
            <h3>Our tools and frameworks</h3>
            <p>Any pre-existing tools, libraries, templates, or frameworks we use remain the property of Veloxo (or their respective open-source owners). We grant you a non-exclusive licence to use these as part of your delivered project.</p>
            <h3>Portfolio rights</h3>
            <p>Unless you request otherwise in writing, we reserve the right to mention your business name and describe the type of work we did for you in our portfolio or marketing materials. We will not share confidential business details without your consent.</p>
          </section>

          <section id="tos-6" className="legal-section">
            <h2>6. Confidentiality</h2>
            <p>Both parties agree to keep confidential any sensitive business information shared during the project. This includes business processes, customer data, pricing, and technical details.</p>
            <p>This obligation does not apply to information that is publicly available, was already known to the receiving party, or is required to be disclosed by law.</p>
            <p>On request, we are happy to sign a Non-Disclosure Agreement (NDA) before discussions begin.</p>
          </section>

          <section id="tos-7" className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>Veloxo provides its services on an "as is" basis. While we work hard to deliver high-quality software, we do not guarantee that our software will be error-free, uninterrupted, or suitable for every specific purpose.</p>
            <p>To the maximum extent permitted by law, Veloxo shall not be liable for:</p>
            <ul>
              <li>Loss of revenue, profits, or business opportunities</li>
              <li>Loss of data or data breaches caused by third-party platforms</li>
              <li>Indirect, consequential, or special damages</li>
              <li>Issues caused by third-party services, APIs, or platforms we integrate with</li>
            </ul>
            <p>Our total liability for any claim shall not exceed the total amount paid by you for the specific service that gave rise to the claim.</p>
          </section>

          <section id="tos-8" className="legal-section">
            <h2>8. Project Timelines</h2>
            <p>Estimated timelines are provided in good faith but are not guaranteed. Timelines may be affected by:</p>
            <ul>
              <li>Delays in client feedback or approvals</li>
              <li>Changes to project scope requested by the client</li>
              <li>Technical dependencies on third-party platforms</li>
              <li>Force majeure events</li>
            </ul>
            <p>We will communicate any expected delays as early as possible and work with you to find a resolution.</p>
          </section>

          <section id="tos-9" className="legal-section">
            <h2>9. Termination</h2>
            <p>Either party may terminate a project agreement with 14 days written notice.</p>
            <p>On termination:</p>
            <ul>
              <li>You are responsible for payment of all work completed up to the termination date</li>
              <li>The deposit is non-refundable unless termination is due to a material breach by Veloxo</li>
              <li>We will deliver all completed work and transfer relevant files and access</li>
              <li>Both parties remain bound by confidentiality obligations</li>
            </ul>
            <p>We reserve the right to terminate immediately if you use our services for illegal purposes, fail to pay, or breach these terms in a material way.</p>
          </section>

          <section id="tos-10" className="legal-section">
            <h2>10. Governing Law</h2>
            <p>These Terms of Service are governed by the laws of India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan, India.</p>
            <p>We encourage resolving disputes amicably first. If a dispute cannot be resolved informally within 30 days, either party may pursue legal remedies.</p>
          </section>

          <section id="tos-11" className="legal-section">
            <h2>11. Changes to Terms</h2>
            <p>We may update these Terms of Service from time to time. We will notify existing clients of significant changes. The latest version will always be available on our website. Continued use of our services after changes constitutes acceptance of the updated terms.</p>
          </section>

          <section id="tos-12" className="legal-section">
            <h2>12. Contact Us</h2>
            <p>If you have questions about these terms or wish to discuss a project, reach out to us:</p>
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
            <Link to="/privacy-policy" className="legal-nav-link">
              Read our Privacy Policy
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>

        </div>
      </div>
    </div>
  )
}
