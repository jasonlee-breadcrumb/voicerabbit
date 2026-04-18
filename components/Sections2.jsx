// Personas, integrations, testimonials
function Personas() {
  const items = [
    { tag:'for writers', h:'Drafts at the speed of thought.', p:'Capture the sentence before it slips away. Voice Rabbit cleans the filler and keeps your voice.', label:'[ writer illustration ]' },
    { tag:'for founders', h:'Inbox zero in half the time.', p:'Reply to investors, recruiters, and customers without opening a keyboard tab.', label:'[ founder illustration ]' },
    { tag:'for developers', h:'Dictate code, prompts, and PRs.', p:'Syntax-aware — handles camelCase, snake_case, file names, and CLI commands in Cursor and VS Code.', label:'[ developer illustration ]' },
    { tag:'for support', h:'4× more tickets resolved.', p:'Personalized snippets and shared dictionaries keep your whole team on-brand.', label:'[ support illustration ]' },
  ];
  return (
    <section className="block" id="use-cases" style={{background:'linear-gradient(180deg, transparent, rgba(255,255,255,0.012))'}}>
      <div className="container">
        <div className="section-head">
          <div className="section-tag">
            <span className="section-tag-dash" />
            <span className="section-tag-mark">// use_cases</span>
          </div>
          <h2>Built for <span className="accent">anyone</span> who writes a lot.</h2>
          <p>Email, essays, code reviews, customer replies, spec docs, texts to mom. If it's a text field, Voice Rabbit fills it.</p>
        </div>
        <div className="grid-2" style={{gridTemplateColumns:'repeat(4, 1fr)'}}>
          {items.map((it,i)=>(
            <div className="persona" key={i}>
              <div className="persona-tag">{it.tag}</div>
              <h3>{it.h}</h3>
              <p>{it.p}</p>
              <div className="persona-ill">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 1050px) { #use-cases .grid-2 { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 600px) { #use-cases .grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

function Integrations() {
  const apps = [
    'Gmail','Slack','Notion','Cursor','Figma','Linear','Docs','GitHub',
    'VS Code','Discord','WhatsApp','Jira','Superhuman','ChatGPT','Claude','Safari',
  ];
  return (
    <section className="block tight" id="integrations">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">
            <span className="section-tag-dash" />
            <span className="section-tag-mark">// works_everywhere</span>
          </div>
          <h2>Works in the apps you <span className="accent">already</span> use.</h2>
          <p>No plugins to install, no per-app configuration. If it takes keyboard input, it takes your voice.</p>
        </div>
        <div className="integration-grid">
          {apps.map((a,i)=>(
            <div className="int-tile" key={i}>
              <AppGlyph name={a} />
              <span className="int-label">{a}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AppGlyph({ name }) {
  // Generate a simple distinguishable glyph per app — initial in a colored tile
  const hue = [...name].reduce((a,c)=>a + c.charCodeAt(0), 0) * 37 % 360;
  return (
    <div style={{
      width: 36, height: 36, borderRadius: 9,
      background: `oklch(0.55 0.12 ${hue} / 0.7)`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: '#fff', fontFamily: 'var(--display)', fontWeight: 600, fontSize: 15,
      letterSpacing: '-0.02em',
      marginBottom: 14,
    }}>{name[0]}</div>
  );
}

function Testimonials() {
  const items = [
    { q:'I wrote my last two pitch decks by talking to my laptop. I didn\'t know how much typing was slowing me down until it stopped.', who:'Maya R.', role:'Founder, Linehop', ini:'M' },
    { q:'Voice Rabbit handles my Slack, my Gmail, and half my Cursor prompts. It\'s the first new tool in years that earned a permanent keyboard shortcut.', who:'Devon K.', role:'Staff Engineer, Clerk', ini:'D' },
    { q:'English is my third language. Voice Rabbit catches my accent better than any tool I\'ve tried — and it lets me dictate in Portuguese when I need to.', who:'Luana P.', role:'Product Designer', ini:'L' },
    { q:'I dictate my case notes walking between courtrooms. What used to be 90 minutes of evening typing is now 15 minutes of review.', who:'James O.', role:'Trial Attorney', ini:'J' },
    { q:'The whisper mode is genuinely wild. I dictate on the train without anyone noticing.', who:'Priya S.', role:'Management Consultant', ini:'P' },
    { q:'We rolled it out to support. Ticket response time dropped 38% in the first month — no kidding.', who:'Ravi M.', role:'Head of CX, Northflux', ini:'R' },
  ];
  return (
    <section className="block" id="testimonials">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">
            <span className="section-tag-dash" />
            <span className="section-tag-mark">// don't_take_our_word_for_it</span>
          </div>
          <h2>What people are <span className="accent">saying</span>.</h2>
          <p>Early users across writing, engineering, law, and support.</p>
        </div>
        <div className="grid-3">
          {items.map((t,i)=>(
            <div className="quote" key={i}>
              <blockquote>"{t.q}"</blockquote>
              <div className="quote-attrib">
                <div className="avatar">{t.ini}</div>
                <div>
                  <div className="quote-who">{t.who}</div>
                  <div className="quote-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Personas, Integrations, Testimonials });
