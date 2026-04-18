// Tweaks panel — color / font / mascot toggle
function Tweaks({ open, color, setColor, font, setFont, mascot, setMascot }) {
  const colors = [
    { name: 'coral', c: 'oklch(0.74 0.17 35)', c2: 'oklch(0.82 0.14 60)' },
    { name: 'violet', c: 'oklch(0.7 0.2 295)', c2: 'oklch(0.78 0.15 320)' },
    { name: 'mint', c: 'oklch(0.78 0.17 160)', c2: 'oklch(0.85 0.14 140)' },
    { name: 'cyan', c: 'oklch(0.78 0.14 215)', c2: 'oklch(0.85 0.12 200)' },
    { name: 'amber', c: 'oklch(0.82 0.17 80)', c2: 'oklch(0.88 0.15 95)' },
  ];
  return (
    <div className={`tweaks ${open?'open':''}`}>
      <h5>Tweaks</h5>
      <div className="tweak-row">
        <label>Accent color</label>
        <div className="swatch-row">
          {colors.map(col => (
            <button
              key={col.name}
              className={`swatch ${color===col.name?'active':''}`}
              style={{background:col.c}}
              onClick={()=>setColor(col.name)}
              aria-label={col.name}
            />
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label>Display font</label>
        <div className="seg-row">
          <button className={`seg-btn ${font==='sans'?'active':''}`} onClick={()=>setFont('sans')}>Sans</button>
          <button className={`seg-btn ${font==='serif'?'active':''}`} onClick={()=>setFont('serif')}>Serif</button>
          <button className={`seg-btn ${font==='mono'?'active':''}`} onClick={()=>setFont('mono')}>Mono</button>
        </div>
      </div>
      <div className="tweak-row tweak-toggle">
        <label style={{margin:0}}>Rabbit mascot</label>
        <div className={`toggle-switch ${mascot?'on':''}`} onClick={()=>setMascot(!mascot)} role="switch" aria-checked={mascot} />
      </div>
      <div style={{fontSize:11, color:'var(--fg-mute)', marginTop:12, fontFamily:'var(--mono)', letterSpacing:'0.04em', lineHeight:1.5}}>
        Toggle "Tweaks" in the top-right toolbar to show/hide.
      </div>
    </div>
  );
}

Object.assign(window, { Tweaks });
