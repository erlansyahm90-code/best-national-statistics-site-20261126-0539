// Page renderers: each returns the HTML for one hash route.
// All figures come from data-indicators.js and data-provinces.js and are
// printed with their source and year next to them — that is the point of
// this site. Charts are SVG strings from charts.js.

import {
  HEADLINE,
  POPULATION_TREND,
  GENERATIONS,
  GDP_QUARTERLY,
  GDP_DRIVERS,
  GDP_PROVINCE_EXTREMES,
  INFLATION_MONTHLY,
  POVERTY_TREND,
  GINI_TREND,
  TPT_TREND,
  HDI_TREND,
  HDI_COMPONENTS,
  POVERTY_LINE,
  SOURCES,
} from './data-indicators.js';
import { PROVINCES, PROVINCE_SOURCE } from './data-provinces.js';
import { barChart, lineChart, hbarChart } from './charts.js';

export function fmt(n) {
  return Number(n).toLocaleString('en-US');
}

function srcTag(source, year) {
  return `<p class="src">Source: ${source} · ${year}</p>`;
}

function card(ind) {
  return `<article class="card">
    <p class="card-label">${ind.label}</p>
    <p class="card-value">${ind.value}</p>
    <p class="card-note">${ind.note}</p>
    <p class="src">${ind.source} · ${ind.year}</p>
  </article>`;
}

function section(title, intro, bodyHtml, source, year) {
  return `<section class="panel"><h2>${title}</h2><p class="intro">${intro}</p>${bodyHtml}${srcTag(source, year)}</section>`;
}

export function renderOverview() {
  const cards = HEADLINE.map(card).join('');
  const popChart = lineChart(
    POPULATION_TREND.map((d) => ({ label: d.year, value: d.value, display: d.value.toFixed(2) })),
    { label: 'Population 2010–2025, millions', height: 190, min: 200, max: 300 },
  );
  const gdpChart = barChart(
    GDP_QUARTERLY.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(2) + '%' })),
    { label: 'GDP growth by quarter, year-on-year percent', decimals: 1, height: 190 },
  );
  return `
  <section class="hero">
    <p class="kicker">Official statistics · Indonesia · 2025</p>
    <h1>Indonesia in Figures</h1>
    <p class="lede">The numbers that describe 284 million people — population, economy and welfare — each with the BPS release it comes from and the year it measures.</p>
  </section>
  <div class="cards">${cards}</div>
  <div class="grid2">
    <section class="panel"><h2>Population keeps growing — more slowly</h2>
      <p class="intro">From 237.64 million in the 2010 Census to 284.67 million in SUPAS 2025. Growth eased to 1.08% a year.</p>
      ${popChart}${srcTag('BPS, SUPAS 2025', '2025')}</section>
    <section class="panel"><h2>Growth holds above 5%</h2>
      <p class="intro">GDP grew 5.04% year-on-year in Q3 2025, after 5.12% in Q2 — the economy stays on its 5%-plus path.</p>
      ${gdpChart}${srcTag('BPS, BRS 5 Nov 2025', '2025')}</section>
  </div>
  <p class="strip"><strong>Largest provinces:</strong> West Java 50.76m · East Java 42.09m · Central Java 38.23m · North Sumatra 15.79m · Banten 12.54m — <a href="#/provinces">all 38 provinces, searchable →</a> <span class="src">BPS, Statistik Indonesia 2026 · 2025</span></p>`;
}

export function renderPopulation() {
  const genChart = hbarChart(
    GENERATIONS.map((g) => ({
      label: g.name,
      value: g.value,
      display: `${(g.value / 1e6).toFixed(1)}m · ${g.share.toFixed(2)}%`,
      highlight: g.name.startsWith('Gen Z'),
    })),
    { label: 'Population by generation, SUPAS 2025', labelWidth: 210 },
  );
  const trend = lineChart(
    POPULATION_TREND.map((d) => ({ label: d.year, value: d.value, display: d.value.toFixed(2) })),
    { label: 'Population 2010–2025, millions', min: 200, max: 300 },
  );
  return `
  <h1>Population</h1>
  <p class="lede">284.67 million people in 2025 — the world's fourth-largest population — counted by the Intercensal Population Survey (SUPAS).</p>
  ${section(
    'A young country, ageing slowly',
    'Gen Z and Millennials together are almost half the population (49.27%). One in nine Indonesians (11.97%) is 60 or older, and the dependency ratio is 45.05 — every 100 working-age people support about 45 others.',
    genChart,
    'BPS, SUPAS 2025',
    '2025',
  )}
  ${section(
    'Fifteen years of growth',
    'The population rose by 47 million between the 2010 Census and SUPAS 2025, while annual growth slowed from 1.43% to 1.08%.',
    trend,
    'BPS, Census 2010; SUPAS 2015; Census 2020; SUPAS 2025',
    '2010–2025',
  )}
  <section class="panel"><h2>Five facts</h2>
    <ul class="facts">
      <li><strong>55.65%</strong> of Indonesians live on Java (BPS, SUPAS 2025).</li>
      <li><strong>1.08%</strong> annual population growth, 2020–2025 — down from 1.43% in 2010 (BPS, SUPAS 2025).</li>
      <li><strong>45.05</strong> dependency ratio in 2025 (BPS, SUPAS 2025).</li>
      <li><strong>11.97%</strong> of the population is aged 60 or older (BPS, SUPAS 2025).</li>
      <li><strong>50,759,003</strong> people in West Java, the largest province; <strong>549,651</strong> in South Papua, the smallest (BPS, Statistik Indonesia 2026).</li>
    </ul></section>`;
}

export function renderEconomy() {
  const gdpChart = barChart(
    GDP_QUARTERLY.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(2) + '%' })),
    { label: 'GDP growth by quarter, year-on-year percent', decimals: 1 },
  );
  const infChart = lineChart(
    INFLATION_MONTHLY.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(2) + '%' })),
    { label: 'Inflation 2025 by month, year-on-year percent', decimals: 1 },
  );
  const drivers = hbarChart(
    GDP_DRIVERS.map((d) => ({
      label: d.name,
      value: Math.abs(d.value),
      display: (d.value > 0 ? '+' : '') + d.value.toFixed(2) + '%',
      highlight: d.value > 5,
    })),
    { label: 'What drove growth in Q3 2025, year-on-year percent', labelWidth: 240 },
  );
  const extremes = GDP_PROVINCE_EXTREMES.map(
    (e) => `<li><strong>${e.name}</strong> — ${e.value > 0 ? '+' : ''}${e.value.toFixed(2)}% (${e.kind})</li>`,
  ).join('');
  return `
  <h1>Economy</h1>
  <p class="lede">GDP grew 5.04% year-on-year in the third quarter of 2025 to Rp6,060.0 trillion at current prices. Inflation stayed inside the 2.5±1% target at 2.86% in October 2025.</p>
  ${section(
    'Growth by quarter',
    'Five quarters of growth between 4.87% and 5.12%. The cumulative January–September 2025 figure is 5.01%.',
    gdpChart,
    'BPS, quarterly GDP releases',
    '2024–2025',
  )}
  ${section(
    'Inflation through 2025',
    'Year-on-year inflation climbed from 0.76% in January — after a January deflation in monthly prices — to 2.86% in October, its highest of the year. The October monthly rise was 0.28%, led by jewellery, red chillies and rice.',
    infChart,
    'BPS, CPI releases',
    '2025',
  )}
  ${section(
    'What drove Q3 2025',
    'Exports grew fastest at 9.91%; manufacturing, the largest single source of growth, rose 5.54%. Mining contracted 1.98%.',
    drivers,
    'BPS, BRS 5 Nov 2025',
    '2025',
  )}
  <section class="panel"><h2>Growth is uneven across provinces</h2>
    <ul class="facts">${extremes}</ul>
    <p class="intro">Provincial GDP growth, Q3 2025, year-on-year.</p>
    ${srcTag('BPS, BRS 5 Nov 2025', '2025')}</section>`;
}

export function renderWelfare() {
  const povChart = lineChart(
    POVERTY_TREND.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(2) + '%' })),
    { label: 'Poverty rate, percent', decimals: 1, min: 7.5, max: 10 },
  );
  const giniChart = lineChart(
    GINI_TREND.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(3) })),
    { label: 'Gini ratio', decimals: 2, min: 0.3, max: 0.5 },
  );
  const tptChart = barChart(
    TPT_TREND.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(2) + '%' })),
    { label: 'Open unemployment rate, percent', decimals: 1 },
  );
  const hdiChart = lineChart(
    HDI_TREND.map((d) => ({ label: d.label, value: d.value, display: d.value.toFixed(2) })),
    { label: 'Human Development Index', decimals: 0, min: 60, max: 80 },
  );
  const comps = HDI_COMPONENTS.map((c) => `<li><strong>${c.name}:</strong> ${c.value}</li>`).join('');
  return `
  <h1>Welfare</h1>
  <p class="lede">Poverty, inequality, jobs and human development all moved the right way in 2025 — poverty down to 8.25%, the Gini ratio to 0.363, unemployment to 4.85% and HDI up to 75.90.</p>
  <div class="grid2">
  ${section('Poverty keeps falling', '23.36 million people were poor in September 2025, 490,000 fewer than in March. The poverty line was Rp641,443 per capita per month (March 2025: Rp609,160).', povChart, 'BPS, Sep 2025', '2025')}
  ${section('Inequality narrows', 'The Gini ratio fell from 0.381 in September 2024 to 0.363 in September 2025 — 0.383 in cities, 0.295 in villages.', giniChart, 'BPS, Sep 2025', '2025')}
  </div>
  <div class="grid2">
  ${section('Unemployment at 4.85%', '7.46 million people were unemployed in August 2025; 146.54 million were working and labour-force participation was 70.59%. By November 2025 the rate eased further to 4.74%.', tptChart, 'BPS, Sakernas', '2025')}
  ${section('Human development rises', 'HDI reached 75.90 in 2025, up 0.88 points on 2024 and 9.4 points on 2010 — firmly in the “high” band.', hdiChart, 'BPS, BRS 5 Nov 2025', '2025')}
  </div>
  <section class="panel"><h2>What makes up the HDI</h2>
    <ul class="facts">${comps}</ul>
    ${srcTag('BPS, Indeks Pembangunan Manusia 2025', '2025')}</section>`;
}

export function provinceRows(list) {
  return list
    .map(
      (p, i) => `<tr>
      <td>${i + 1}</td><td>${p.name}</td><td>${p.island}</td>
      <td class="num">${fmt(p.pop)}</td><td class="num">${p.share.toFixed(2)}%</td>
      <td class="num">${fmt(p.density)}</td><td class="num">${p.hdi.toFixed(2)}</td>
      <td class="num">${p.tpt.toFixed(2)}%</td><td class="num">${p.poverty.toFixed(2)}%</td></tr>`,
    )
    .join('');
}

export function renderProvinces() {
  return `
  <h1>Provinces</h1>
  <p class="lede">All 38 provinces, mid-2025. Search by name or island, or tap a column heading to sort. Population, HDI, unemployment and poverty come from the same BPS release so the columns agree with each other.</p>
  <section class="panel">
    <div class="toolbar">
      <label for="prov-search">Search provinces</label>
      <input id="prov-search" type="search" placeholder="Type a province or island — e.g. Papua, Java…" autocomplete="off">
      <p class="count" id="prov-count">Showing 38 of 38 provinces</p>
    </div>
    <div class="tablewrap"><table id="prov-table">
      <thead><tr>
        <th>#</th>
        <th><button data-sort="name" type="button">Province ▲▼</button></th>
        <th><button data-sort="island" type="button">Island ▲▼</button></th>
        <th class="num"><button data-sort="pop" type="button">Population ▲▼</button></th>
        <th class="num"><button data-sort="share" type="button">Share ▲▼</button></th>
        <th class="num"><button data-sort="density" type="button">Density /km² ▲▼</button></th>
        <th class="num"><button data-sort="hdi" type="button">HDI 2025 ▲▼</button></th>
        <th class="num"><button data-sort="tpt" type="button">Unemployment ▲▼</button></th>
        <th class="num"><button data-sort="poverty" type="button">Poverty ▲▼</button></th>
      </tr></thead>
      <tbody id="prov-body">${provinceRows(PROVINCES)}</tbody>
    </table></div>
    <p class="intro">Totals: 284,438,782 people across 38 provinces (BPS table total; provincial figures are rounded to the nearest 100 in the source). Highest HDI: DKI Jakarta 85.05; lowest: Highland Papua 54.91. Lowest unemployment: Bali 1.49%; highest: Papua 6.96%. Lowest poverty: Bali 3.72%; highest: Highland Papua 30.03%.</p>
    ${srcTag(PROVINCE_SOURCE, '2025')}
  </section>`;
}

export function renderSources() {
  const rows = SOURCES.map(
    (s) => `<tr><td><strong>${s.indicator}</strong><br>${s.figure}</td>
    <td>${s.publisher}<br>${s.publication}<br>Released: ${s.released}</td></tr>`,
  ).join('');
  return `
  <h1>Sources &amp; method</h1>
  <p class="lede">Every figure on this site comes from Statistics Indonesia (BPS). Nothing here is estimated by us, and nothing is copied from Wikipedia or news round-ups — each row below names the exact BPS publication and release date.</p>
  <section class="panel">
    <div class="tablewrap"><table>
      <thead><tr><th>Indicator &amp; figure</th><th>Source</th></tr></thead>
      <tbody>${rows}</tbody>
    </table></div>
    <h3>How to read the figures</h3>
    <ul class="facts">
      <li><strong>SUPAS</strong> is the Intercensal Population Survey, run between censuses; the 2025 round counted 284.67 million people.</li>
      <li><strong>Y-on-y</strong> compares a period with the same period a year earlier; <strong>Q-to-Q</strong> with the previous quarter; <strong>C-to-C</strong> is cumulative over the year so far.</li>
      <li><strong>TPT</strong> is the open unemployment rate: unemployed people as a share of the labour force (Sakernas survey).</li>
      <li><strong>HDI</strong> combines life expectancy, schooling and adjusted per-capita expenditure; 70–80 is “high”.</li>
      <li><strong>Gini ratio</strong> runs from 0 (perfect equality) to 1 (total inequality).</li>
      <li>Provincial populations are the BPS mid-2025 figures in Statistik Indonesia 2026; they sum to the national total printed in the same table.</li>
    </ul>
  </section>`;
}
