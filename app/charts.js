// Small hand-built SVG charts (no library): barChart, lineChart, hbarChart.
// Each returns an SVG string sized by viewBox so it scales to its container.
// Colours follow the site palette: deep red #a31621, gold #c9a227, ink #1f2937.

const RED = '#a31621';
const GOLD = '#c9a227';
const INK = '#1f2937';
const GREY = '#9aa3ad';

function esc(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function niceMax(max) {
  if (max <= 0) return 1;
  const pow = Math.pow(10, Math.floor(Math.log10(max)));
  const n = max / pow;
  // Smallest "nice" step at or above n, so the axis hugs the data instead
  // of jumping to the next power of ten (e.g. 5.53 -> 6, not 10).
  const steps = [1, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10];
  for (const s of steps) if (n <= s) return s * pow;
  return 10 * pow;
}

// Vertical bars with value labels. `min` lets a series start above zero.
export function barChart(series, opts = {}) {
  const w = opts.width || 560;
  const h = opts.height || 260;
  const padL = 44;
  const padB = 30;
  const padT = 26;
  const min = opts.min ?? 0;
  const max = opts.max ?? niceMax(Math.max(...series.map((d) => d.value)) * 1.08);
  const innerW = w - padL - 14;
  const innerH = h - padT - padB;
  const slot = innerW / series.length;
  const barW = Math.min(46, slot * 0.58);
  let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(opts.label || 'Bar chart')}">`;
  // Gridlines at 0, 25, 50, 75, 100 percent of the scale.
  for (let i = 0; i <= 4; i++) {
    const v = min + ((max - min) * i) / 4;
    const y = padT + innerH - (innerH * i) / 4;
    s += `<line x1="${padL}" y1="${y}" x2="${w - 14}" y2="${y}" stroke="#e5e0d8" stroke-width="1"/>`;
    s += `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" font-size="11" fill="${GREY}">${fmtAxis(v, opts.decimals)}</text>`;
  }
  series.forEach((d, i) => {
    const bh = (innerH * (d.value - min)) / (max - min);
    const x = padL + slot * i + (slot - barW) / 2;
    const y = padT + innerH - bh;
    const fill = d.highlight ? RED : d.negative ? '#c2703d' : '#c8a24a';
    s += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barW}" height="${Math.max(bh, 1).toFixed(1)}" rx="3" fill="${fill}"/>`;
    s += `<text x="${(x + barW / 2).toFixed(1)}" y="${(y - 6).toFixed(1)}" text-anchor="middle" font-size="12" font-weight="700" fill="${INK}">${d.display ?? d.value}</text>`;
    s += `<text x="${(x + barW / 2).toFixed(1)}" y="${h - 10}" text-anchor="middle" font-size="11" fill="#5b6470">${esc(d.label)}</text>`;
  });
  return s + '</svg>';
}

function fmtAxis(v, decimals = 0) {
  return decimals ? v.toFixed(decimals) : String(Math.round(v));
}

// Line chart with dots and value labels; supports negative values.
export function lineChart(series, opts = {}) {
  const w = opts.width || 560;
  const h = opts.height || 260;
  const padL = 44;
  const padB = 30;
  const padT = 26;
  const values = series.map((d) => d.value);
  const lo = opts.min ?? Math.min(0, ...values);
  const hi = opts.max ?? niceMax(Math.max(...values) * 1.08);
  const innerW = w - padL - 14;
  const innerH = h - padT - padB;
  const xAt = (i) => padL + (innerW * i) / (series.length - 1);
  const yAt = (v) => padT + innerH - ((v - lo) / (hi - lo)) * innerH;
  let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(opts.label || 'Line chart')}">`;
  for (let i = 0; i <= 4; i++) {
    const v = lo + ((hi - lo) * i) / 4;
    const y = yAt(v);
    s += `<line x1="${padL}" y1="${y}" x2="${w - 14}" y2="${y}" stroke="#e5e0d8" stroke-width="1"/>`;
    s += `<text x="${padL - 6}" y="${y + 4}" text-anchor="end" font-size="11" fill="${GREY}">${fmtAxis(v, opts.decimals)}</text>`;
  }
  if (lo < 0) {
    const y0 = yAt(0);
    s += `<line x1="${padL}" y1="${y0}" x2="${w - 14}" y2="${y0}" stroke="#b9b2a6" stroke-width="1"/>`;
  }
  const pts = series.map((d, i) => `${xAt(i).toFixed(1)},${yAt(d.value).toFixed(1)}`).join(' ');
  s += `<polyline points="${pts}" fill="none" stroke="${RED}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>`;
  series.forEach((d, i) => {
    s += `<circle cx="${xAt(i).toFixed(1)}" cy="${yAt(d.value).toFixed(1)}" r="4.5" fill="#fff" stroke="${RED}" stroke-width="2.5"/>`;
    // Keep end labels inside the frame: first label left-aligned, last right-aligned.
    const anchor = i === 0 ? 'start' : i === series.length - 1 ? 'end' : 'middle';
    const tx = i === 0 ? xAt(i) + 8 : i === series.length - 1 ? xAt(i) - 8 : xAt(i);
    s += `<text x="${tx.toFixed(1)}" y="${(yAt(d.value) - 10).toFixed(1)}" text-anchor="${anchor}" font-size="12" font-weight="700" fill="${INK}">${d.display ?? d.value}</text>`;
    const lx = i === 0 ? xAt(i) : i === series.length - 1 ? xAt(i) - 4 : xAt(i);
    const lAnchor = i === 0 ? 'start' : i === series.length - 1 ? 'end' : 'middle';
    s += `<text x="${lx.toFixed(1)}" y="${h - 10}" text-anchor="${lAnchor}" font-size="11" fill="#5b6470">${esc(d.label)}</text>`;
  });
  return s + '</svg>';
}

// Horizontal bars for ranked lists (generations, drivers, provinces).
export function hbarChart(series, opts = {}) {
  const w = opts.width || 560;
  const rowH = opts.rowHeight || 34;
  const h = series.length * rowH + 14;
  const labelW = opts.labelWidth || 190;
  const max = Math.max(...series.map((d) => d.value));
  // Leave a value column (~120px) after the longest bar so its label fits.
  const innerW = w - labelW - 128;
  let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(opts.label || 'Horizontal bar chart')}">`;
  series.forEach((d, i) => {
    const y = 8 + i * rowH;
    const bw = Math.max(2, (innerW * d.value) / max);
    const fill = d.highlight ? RED : GOLD;
    s += `<text x="0" y="${y + 15}" font-size="12" fill="${INK}">${esc(d.label)}</text>`;
    s += `<rect x="${labelW}" y="${y + 2}" width="${bw.toFixed(1)}" height="18" rx="3" fill="${fill}"/>`;
    s += `<text x="${(labelW + bw + 8).toFixed(1)}" y="${y + 16}" font-size="12" font-weight="700" fill="${INK}">${d.display ?? d.value}</text>`;
  });
  return s + '</svg>';
}

export { RED, GOLD, INK };
