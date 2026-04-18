// Pricing, FAQ, Footer CTA, Footer, Nav
function Pricing() {
  return (
    <section className="block" id="pricing">
      <div className="container">
        <div className="section-head" style={{textAlign:'center', margin:'0 auto 64px'}}>
          <div className="section-tag" style={{justifyContent:'center'}}>
            <span className="section-tag-dash" />
            <span className="section-tag-mark">// pricing</span>
            <span className="section-tag-dash" />
          </div>
          <h2>Start free. <span className="accent">Upgrade</span> when you speak a lot.</h2>
          <p style={{margin:'0 auto'}}>No trials cut short, no usage traps. If you dictate under 2,000 words a week, you may never need to upgrade.</p>
        </div>
        <div className="pricing-grid">
          <div className="price-card">
            <h3>Free</h3>
            <div className="price-amount">$0<span className="per">/forever</span></div>
            <p className="price-desc">Everything you need to get started and dictate casually.</p>
            <ul className="price-features">
              <li>2,000 words / week</li>
              <li>Works in any app</li>
              <li>100+ languages</li>
              <li>Auto-punctuation & filler removal</li>
              <li>Personal dictionary (50 terms)</li>
            </ul>
            <a href="#" className="btn-secondary" style={{justifyContent:'center', marginTop:'auto'}}>Download free</a>
          </div>
          <div className="price-card featured">
            <div className="badge-featured">Most popular</div>
            <h3>Pro</h3>
            <div className="price-amount">$12<span className="per">/month, billed yearly</span></div>
            <p className="price-desc">Unlimited dictation plus power features for heavy users.</p>
            <ul className="price-features">
              <li>Unlimited words</li>
              <li>Custom styles per app (formal, casual, etc.)</li>
              <li>Unlimited dictionary & snippets</li>
              <li>Whisper mode & background noise filter</li>
              <li>Advanced AI edits & tone-matching</li>
              <li>Priority support</li>
            </ul>
            <a href="#" className="btn-primary" style={{justifyContent:'center', marginTop:'auto'}}>
              <MicIcon size={14} /> Start 14-day Pro trial
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    { q:'Does Voice Rabbit send my voice to the cloud?', a:'Your audio is encrypted in transit and deleted immediately after transcription. We never retain raw audio, and transcripts are not used to train models. On-device mode (Pro) runs transcription locally for sensitive work.' },
    { q:'How accurate is it?', a:'99.1% word-level accuracy on our internal English test set, with comparable performance in 40+ other languages. It adapts to your vocabulary as you correct it — accuracy improves within the first few days of use.' },
    { q:'Which platforms are supported?', a:'macOS 12+ and Windows 10/11 at launch. iOS and Android apps are in beta — join the waitlist from your account page.' },
    { q:'Does it work offline?', a:'Pro users get an on-device model for English and Spanish that works fully offline. Other languages currently require a connection, but we\'re expanding offline support each quarter.' },
    { q:'Can I use it in meetings?', a:'Voice Rabbit is built for authoring, not transcribing conversations. It expects one speaker (you), dictating into a text field. For meeting notes, we recommend pairing it with a dedicated meeting tool.' },
    { q:'What if it mishears a name?', a:'Correct it once and Voice Rabbit remembers it forever — added automatically to your personal dictionary. Teams on Pro get a shared dictionary so colleagues, product names, and jargon stay consistent for everyone.' },
  ];
  return (
    <section className="block" id="faq">
      <div className="container">
        <div className="section-head" style={{textAlign:'center', margin:'0 auto 48px'}}>
          <div className="section-tag" style={{justifyContent:'center'}}>
            <span className="section-tag-dash" />
            <span className="section-tag-mark">// frequently_asked</span>
            <span className="section-tag-dash" />
          </div>
          <h2>Questions, <span className="accent">answered</span>.</h2>
        </div>
        <div className="faq">
          {items.map((it,i)=>(
            <details className="faq-item" key={i}>
              <summary>
                {it.q}
                <span className="faq-chev" />
              </summary>
              <div className="faq-body">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FooterCTA() {
  return (
    <section className="footer-cta">
      <div className="container">
        <div className="mascot-hide" style={{margin:'0 auto 24px', width:88, height:88}}>
          <Rabbit size={88} />
        </div>
        <h2>Ready to <span className="accent">stop</span> typing?</h2>
        <p>Free for 14 days. No card. 2-minute install.</p>
        <div style={{display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap'}}>
          <a href="#" className="btn-primary"><MicIcon size={14}/> Download for Mac</a>
          <a href="#" className="btn-secondary">Get for Windows <ArrowRight /></a>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div style={{display:'flex', alignItems:'center', gap:10, fontWeight:600}}>
              <span className="mascot-hide"><RabbitMark size={22} /></span>
              voicerabbit
            </div>
            <p>Voice-to-text for everywhere you write. Built by a small team in Sydney, Australia.</p>
          </div>
          <div>
            <h4>Product</h4>
            <ul>
              <li><a href="#how">How it works</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#integrations">Integrations</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Trust center</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Voice Rabbit, Inc.</span>
          <span>Made in SF · Listening since 2026</span>
        </div>
      </div>
    </footer>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="nav-logo">
          <span className="mascot-hide"><RabbitMark size={22} /></span>
          <span>voicerabbit</span>
        </div>
        <div className="nav-links">
          <a href="#how">How it works</a>
          <a href="#use-cases">Use cases</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#" className="nav-ghost">Sign in</a>
        <a href="#" className="nav-cta"><MicIcon size={12} /> Download free</a>
      </div>
    </nav>
  );
}

Object.assign(window, { Pricing, FAQ, FooterCTA, SiteFooter, Nav });
