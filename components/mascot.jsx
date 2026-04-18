// Rabbit mascot — chunky pixel-art style. Rect-based grid, flat fills.
// Each "pixel" is a rect on an integer grid so it reads as sprite art at any size.

// 18-col × 18-row grid. '.' = empty, 'C' = coral (currentColor), 'D' = dark (inner), 'N' = nose/dark accent
const RABBIT_GRID = [
  "..................",
  "..CC........CC....",
  "..CC........CC....",
  "..CCC......CCC....",
  "..CCC......CCC....",
  "..CCCC....CCCC....",
  "...CCC....CCC.....",
  "..CCCCCCCCCCCC....",
  ".CCCCCCCCCCCCCC...",
  ".CCCCCCCCCCCCCC...",
  ".CCDCCCCCCCCDCC...",
  ".CCDCCCCNNCCDCC...",
  ".CCCCCCCNNCCCCC...",
  ".CCCCCCCCCCCCCC...",
  "..CCCCCCCCCCCC....",
  "...CCCCCCCCCC.....",
  "....CC......CC....",
  "..................",
];

function PixelRabbit({ size = 120, className = "" }) {
  const cells = 18;
  const unit = 100 / cells; // use 0-100 viewBox
  const rects = [];
  for (let y = 0; y < RABBIT_GRID.length; y++) {
    const row = RABBIT_GRID[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === '.') continue;
      let fill = 'currentColor';
      if (ch === 'D') fill = 'rgba(21,16,11,0.35)';
      if (ch === 'N') fill = '#15100B';
      rects.push(
        <rect key={`${x}-${y}`} x={x*unit} y={y*unit} width={unit+0.5} height={unit+0.5} fill={fill} shapeRendering="crispEdges" />
      );
    }
  }
  return (
    <span className={`mascot ${className}`} style={{ width: size, height: size, display: 'inline-block', lineHeight: 0 }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        {rects}
      </svg>
    </span>
  );
}

// Small pixel rabbit head icon — 10×10 sprite for nav-scale use
const MARK_GRID = [
  "CC....CC..",
  "CC....CC..",
  "CCC..CCC..",
  "CCCCCCCC..",
  "CCCCCCCC..",
  "CDCCCCDC..",
  "CCCNNCCC..",
  "CCCCCCCC..",
  ".CCCCCC...",
  "..........",
];

function PixelRabbitMark({ size = 22 }) {
  const cells = 10;
  const unit = 100 / cells;
  const rects = [];
  for (let y = 0; y < MARK_GRID.length; y++) {
    const row = MARK_GRID[y];
    for (let x = 0; x < row.length; x++) {
      const ch = row[x];
      if (ch === '.') continue;
      let fill = 'currentColor';
      if (ch === 'D') fill = 'rgba(21,16,11,0.4)';
      if (ch === 'N') fill = '#15100B';
      rects.push(
        <rect key={`${x}-${y}`} x={x*unit} y={y*unit} width={unit+0.5} height={unit+0.5} fill={fill} shapeRendering="crispEdges" />
      );
    }
  }
  return (
    <span className="mascot" style={{ width: size, height: size, display: 'inline-block', lineHeight: 0 }}>
      <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" shapeRendering="crispEdges">
        {rects}
      </svg>
    </span>
  );
}

// Keep old names for backward compatibility — components import `Rabbit` and `RabbitMark`
const Rabbit = PixelRabbit;
const RabbitMark = PixelRabbitMark;

// Mic icon for buttons
function MicIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <rect x="5.5" y="1.5" width="5" height="8" rx="2.5" fill="currentColor" />
      <path d="M3 7.5 Q 3 11 8 11 Q 13 11 13 7.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
      <path d="M8 11 L 8 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M6 14 L 10 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ArrowRight({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none">
      <path d="M2 7 L 12 7 M 8 3 L 12 7 L 8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

Object.assign(window, { Rabbit, RabbitMark, PixelRabbit, PixelRabbitMark, MicIcon, ArrowRight });
