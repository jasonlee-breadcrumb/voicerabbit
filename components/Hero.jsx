// Hero section — dictation demo window on the right
function HeroDemo() {
  const [phase, setPhase] = React.useState(0);
  // Phases: 0 idle typing-ghost, 1 speaking (fillers), 2 cleaning, 3 final
  React.useEffect(() => {
    const id = setInterval(() => setPhase(p => (p + 1) % 4), 2600);
    return () => clearInterval(id);
  }, []);

  const content = {
    0: (
      <>
        <span className="ghost">Hey Sarah, thanks for the follow up on the </span>
        <span className="demo-caret" />
      </>
    ),
    1: (
      <>
        Hey Sarah, thanks for the follow up <span className="fixing">um</span> on the Q4 roadmap <span className="fixing">like</span> <span className="demo-caret" />
      </>
    ),
    2: (
      <>
        Hey Sarah, thanks for the follow-up on the Q4 roadmap. <span className="added">I've reviewed the draft</span><span className="demo-caret" />
      </>
    ),
    3: (
      <>
        Hey Sarah, thanks for the follow-up on the Q4 roadmap. I've reviewed the draft and have a few suggestions — let's sync tomorrow at <span className="added">3 PM</span>.
      </>
    ),
  };

  const status = {
    0: <>ready — hold <span className="mono" style={{color:'var(--accent)'}}>⌥ Space</span> to speak</>,
    1: <><span className="live">● listening</span> · 142 wpm</>,
    2: <><span className="live">● refining</span> · removing fillers</>,
    3: <>✓ inserted into Gmail · 2.4s</>,
  }[phase];

  return (
    <div className="demo-window">
      <div className="demo-titlebar">
        <div className="dots"><span/><span/><span/></div>
        <div className="demo-title">voicerabbit · active session</div>
      </div>
      <div className="demo-body">
        <div className="demo-app">
          <svg width="11" height="11" viewBox="0 0 12 12"><rect x="1" y="2" width="10" height="8" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1"/><path d="M1.5 3 L 6 6.5 L 10.5 3" fill="none" stroke="currentColor" strokeWidth="1"/></svg>
          GMAIL · COMPOSE
        </div>
        <div className="demo-text">{content[phase]}</div>
        <div className="demo-mic">
          <div className="mic-btn">
            <MicIcon size={18} />
          </div>
          <div className="waveform">
            {Array.from({length:10}).map((_,i)=><span key={i}/>)}
          </div>
          <div className="demo-status" style={{ marginLeft: 'auto' }}>{status}</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid-bg" />
      <div className="container">
        <div className="hero-row">
          <div>
            <div className="section-tag">
              <span className="section-tag-dash" />
              <span className="section-tag-mark">// voicerabbit v1.0 — now on macOS & Windows</span>
            </div>
            <h1>
              <span className="through">Stop typing</span><br/>
              Start <span className="accent">talking.</span>
            </h1>
            <p className="hero-sub">
              Speak naturally. Get clean, ready-to-send text in any app. 4× faster than typing — with AI edits, auto-punctuation, and 100+ languages built in.
            </p>
            <div className="hero-ctas">
              <a href="#" className="btn-primary">
                <MicIcon size={14} /> Download for Mac
              </a>
              <a href="#" className="btn-secondary">
                Get for Windows <ArrowRight />
              </a>
            </div>
            <div className="hero-meta">
              <span>Free for 14 days</span>
              <span className="dot" />
              <span>No credit card</span>
              <span className="dot" />
              <span>2-min install</span>
            </div>

            <div className="stat-row">
              <div className="stat"><div className="stat-num">4×</div><div className="stat-label">faster than typing</div></div>
              <div className="stat"><div className="stat-num">20h</div><div className="stat-label">saved per month</div></div>
              <div className="stat"><div className="stat-num">100+</div><div className="stat-label">languages</div></div>
              <div className="stat"><div className="stat-num">99.1%</div><div className="stat-label">word accuracy</div></div>
            </div>
          </div>
          <div style={{ position: 'relative' }}>
            <HeroDemo />
            <div className="mascot-hide" style={{
              position:'absolute', top:-36, right:-20, width:90, height:90,
              transform:'rotate(8deg)',
            }}>
              <Rabbit size={90} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero });
