// Logo cloud — abstract wordmark placeholders
function LogoCloud() {
  const logos = [
    { name: 'Kepler', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic' } },
    { name: 'NORTH★', style: { letterSpacing: '0.1em' } },
    { name: 'helix.', style: { fontWeight: 700 } },
    { name: 'Arcadia', style: { fontFamily: 'serif', fontWeight: 500 } },
    { name: 'MONARCH', style: { letterSpacing: '0.2em', fontSize: 14 } },
    { name: 'fathom', style: { fontWeight: 700, letterSpacing: '-0.04em' } },
  ];
  return (
    <section className="logo-cloud">
      <div className="container">
        <div className="logo-cloud-label">Trusted by 12,000+ teams at fast-moving companies</div>
        <div className="logo-row">
          {logos.map((l, i) => (
            <div key={i} className="logo" style={l.style}>{l.name}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

// How it works — 3 steps
function HowItWorks() {
  const steps = [
    {
      n: '01',
      tag: '// press_to_talk',
      title: 'Hold a key. Start speaking.',
      body: 'One global shortcut works anywhere — in Gmail, Slack, your code editor, a CRM, anything with a text field. No app-switching, no dictation mode.',
      visual: 'shortcut'
    },
    {
      n: '02',
      tag: '// refine_on_the_fly',
      title: 'Voice Rabbit edits while you speak.',
      body: 'Backtracks ("actually, 3 PM"), removes fillers, adds punctuation, formats lists. Corrections happen in real time, so the final text reads like you wrote it carefully.',
      visual: 'edit'
    },
    {
      n: '03',
      tag: '// paste_and_ship',
      title: 'Clean text lands where your cursor is.',
      body: 'Average 2.4 seconds from word to text. It matches the tone of the app you\'re in — formal in docs, casual in chat — and remembers your names, jargon, and style.',
      visual: 'paste'
    },
  ];

  return (
    <section className="block" id="how">
      <div className="container">
        <div className="section-head">
          <div className="section-tag">
            <span className="section-tag-dash" />
            <span className="section-tag-mark">// how_it_works</span>
          </div>
          <h2>Three steps. <span className="accent">Zero</span> friction.</h2>
          <p>Voice Rabbit sits quietly in your menu bar until you need it. Press, speak, release — text appears. That's the whole flow.</p>
        </div>
        <div className="grid-3">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{s.n}</div>
              <div>
                <div className="eyebrow" style={{marginBottom:6}}><span className="slash">//</span>{s.tag.replace('// ','')}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
              <div className="step-visual">
                {s.visual === 'shortcut' && <ShortcutVisual />}
                {s.visual === 'edit' && <EditVisual />}
                {s.visual === 'paste' && <PasteVisual />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ShortcutVisual() {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:10, justifyContent:'center', padding:'14px 0' }}>
      <Key label="⌥" />
      <span style={{color:'var(--fg-mute)', fontFamily:'var(--mono)'}}>+</span>
      <Key label="Space" wide />
      <span style={{color:'var(--fg-mute)', fontFamily:'var(--mono)', fontSize:12, marginLeft:10}}>→ listen</span>
    </div>
  );
}
function Key({ label, wide=false }) {
  return (
    <span style={{
      display:'inline-flex', alignItems:'center', justifyContent:'center',
      minWidth: wide ? 68 : 36, height: 36,
      padding:'0 12px',
      background:'linear-gradient(180deg, #23232E, #16161D)',
      border:'1px solid var(--border-strong)',
      borderBottomWidth: 2,
      borderRadius: 8,
      fontFamily:'var(--mono)', fontSize:13, color:'var(--fg)',
      boxShadow:'inset 0 1px 0 rgba(255,255,255,0.06)'
    }}>{label}</span>
  );
}

function EditVisual() {
  return (
    <div style={{ fontFamily:'var(--mono)', fontSize:13, lineHeight:1.7 }}>
      <div style={{color:'var(--fg-mute)'}}>
        "Let's meet <span style={{color:'var(--accent)', textDecoration:'line-through'}}>at 2 um actually</span> at 3 PM"
      </div>
      <div style={{color:'var(--fg)', marginTop:6, paddingTop:6, borderTop:'1px dashed var(--border)'}}>
        Let's meet at 3 PM.
      </div>
    </div>
  );
}

function PasteVisual() {
  return (
    <div style={{ display:'flex', gap:8, flexWrap:'wrap' }}>
      {['Gmail','Slack','Notion','Cursor','Figma','Linear'].map(a => (
        <span key={a} style={{
          padding:'5px 10px', borderRadius:999,
          background:'rgba(255,255,255,0.03)',
          border:'1px solid var(--border)',
          fontFamily:'var(--mono)', fontSize:11, color:'var(--fg-dim)',
          letterSpacing:'0.04em'
        }}>{a}</span>
      ))}
    </div>
  );
}

Object.assign(window, { LogoCloud, HowItWorks });
