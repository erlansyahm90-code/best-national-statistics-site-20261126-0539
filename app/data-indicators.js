// National headline indicators for Indonesia in Figures.
// Every figure carries its source and year; pages.js prints them next to the
// number. All values verified against BPS releases in November 2026:
// SUPAS 2025 (BRS 51/05/Th. XXIX, 5 May 2026), GDP Q3-2025 (BRS 102/11/Th.
// XXVIII, 5 Nov 2025), inflation Oct 2025 (BPS, 3 Nov 2025), poverty & Gini
// Sep 2025 (BPS, 5 Feb 2026), labour Aug 2025 (BPS Sakernas), HDI 2025
// (BPS, 5 Nov 2025). Figures are in the units their labels state.

export const HEADLINE = [
  {
    id: 'population',
    label: 'Population',
    value: '284.67m',
    note: 'SUPAS 2025 · +1.08% a year',
    source: 'BPS, SUPAS 2025',
    year: '2025',
  },
  {
    id: 'gdp',
    label: 'GDP growth',
    value: '5.04%',
    note: 'y-on-y, Q3 2025 · Rp6,060tn',
    source: 'BPS, BRS 5 Nov 2025',
    year: '2025',
  },
  {
    id: 'inflation',
    label: 'Inflation (y-on-y)',
    value: '2.86%',
    note: 'October 2025 · target 2.5±1%',
    source: 'BPS, CPI release',
    year: '2025',
  },
  {
    id: 'poverty',
    label: 'Poverty rate',
    value: '8.25%',
    note: 'Sep 2025 · 23.36m people',
    source: 'BPS, Sep 2025',
    year: '2025',
  },
  {
    id: 'unemployment',
    label: 'Open unemployment',
    value: '4.85%',
    note: 'Aug 2025 · 7.46m people',
    source: 'BPS, Sakernas',
    year: '2025',
  },
  {
    id: 'hdi',
    label: 'Human Development Index',
    value: '75.90',
    note: '2025 · up 0.88 pts on 2024',
    source: 'BPS, BRS 5 Nov 2025',
    year: '2025',
  },
];

// Population by census / intercensal survey, millions of people.
export const POPULATION_TREND = [
  { year: '2010', value: 237.64, label: 'Census 2010' },
  { year: '2015', value: 255.18, label: 'SUPAS 2015' },
  { year: '2020', value: 270.2, label: 'Census 2020' },
  { year: '2025', value: 284.67, label: 'SUPAS 2025' },
];

// Population by generation, SUPAS 2025 (people).
export const GENERATIONS = [
  { name: 'Post-Gen Z (born 2013–)', value: 55925071, share: 19.64 },
  { name: 'Gen Z (1997–2012)', value: 70975776, share: 24.93 },
  { name: 'Millennial (1981–1996)', value: 69295132, share: 24.34 },
  { name: 'Gen X (1965–1980)', value: 56080841, share: 19.7 },
  { name: 'Boomer (1946–1964)', value: 29350061, share: 10.31 },
  { name: 'Pre-Boomer (before 1946)', value: 3040372, share: 1.07 },
];

// GDP growth, year-on-year, percent. Source: BPS quarterly releases.
export const GDP_QUARTERLY = [
  { label: 'Q3 2024', value: 4.95 },
  { label: 'Q4 2024', value: 5.02 },
  { label: 'Q1 2025', value: 4.87 },
  { label: 'Q2 2025', value: 5.12 },
  { label: 'Q3 2025', value: 5.04 },
];

// What drove Q3 2025 growth, year-on-year percent (BPS, 5 Nov 2025).
export const GDP_DRIVERS = [
  { name: 'Exports of goods & services', value: 9.91 },
  { name: 'Manufacturing', value: 5.54 },
  { name: 'Government consumption', value: 5.49 },
  { name: 'Investment (gross fixed capital)', value: 5.04 },
  { name: 'Household consumption', value: 4.89 },
  { name: 'Mining & quarrying', value: -1.98 },
];

// Fastest and slowest provincial growth, Q3 2025 y-on-y (BPS).
export const GDP_PROVINCE_EXTREMES = [
  { name: 'North Maluku', value: 39.1, kind: 'fastest' },
  { name: 'Central Sulawesi', value: 7.79, kind: 'fastest' },
  { name: 'Riau Islands', value: 7.48, kind: 'fastest' },
  { name: 'West Papua', value: -0.13, kind: 'slowest' },
  { name: 'Central Papua', value: -16.11, kind: 'slowest' },
];

// Consumer-price inflation, year-on-year, percent (BPS CPI releases, 2025).
export const INFLATION_MONTHLY = [
  { label: 'Jan', value: 0.76 },
  { label: 'Feb', value: -0.09 },
  { label: 'Mar', value: 1.03 },
  { label: 'Apr', value: 1.95 },
  { label: 'May', value: 1.6 },
  { label: 'Jun', value: 1.87 },
  { label: 'Jul', value: 2.37 },
  { label: 'Aug', value: 2.31 },
  { label: 'Sep', value: 2.65 },
  { label: 'Oct', value: 2.86 },
];

// Poverty rate, percent of population (BPS).
export const POVERTY_TREND = [
  { label: 'Mar 2024', value: 9.03 },
  { label: 'Sep 2024', value: 8.57 },
  { label: 'Mar 2025', value: 8.47 },
  { label: 'Sep 2025', value: 8.25 },
];

// Gini ratio (BPS).
export const GINI_TREND = [
  { label: 'Sep 2024', value: 0.381 },
  { label: 'Mar 2025', value: 0.375 },
  { label: 'Sep 2025', value: 0.363 },
];

// Open unemployment rate, percent (BPS Sakernas).
export const TPT_TREND = [
  { label: 'Aug 2024', value: 4.91 },
  { label: 'Aug 2025', value: 4.85 },
  { label: 'Nov 2025', value: 4.74 },
];

// Human Development Index (BPS).
export const HDI_TREND = [
  { label: '2010', value: 66.5 },
  { label: '2020', value: 72.81 },
  { label: '2024', value: 75.02 },
  { label: '2025', value: 75.9 },
];

// HDI 2025 components (BPS, 5 Nov 2025).
export const HDI_COMPONENTS = [
  { name: 'Life expectancy at birth', value: '74.47 years' },
  { name: 'Expected years of schooling', value: '13.30 years' },
  { name: 'Mean years of schooling', value: '9.07 years' },
  { name: 'Adjusted per-capita expenditure', value: 'Rp 12.80m / year' },
];

// Poverty line, rupiah per capita per month (BPS).
export const POVERTY_LINE = [
  { label: 'Mar 2025', value: 609160 },
  { label: 'Sep 2025', value: 641443 },
];

// Sources shown on the Sources page and in footers. Keep the list short and
// exact: publisher, publication, release date.
export const SOURCES = [
  {
    indicator: 'Population, growth, generations, dependency ratio',
    figure: '284.67 million; 1.08% a year; dependency ratio 45.05; 55.65% on Java',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Hasil Survei Penduduk Antar Sensus (SUPAS) 2025, BRS No. 51/05/Th. XXIX',
    released: '5 May 2026',
  },
  {
    indicator: 'Population by province',
    figure: '38 provinces, mid-2025; national total 284,438,782',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Statistik Indonesia 2026, Table 3; also Profil Kesehatan Indonesia 2025, p. 313',
    released: '2026',
  },
  {
    indicator: 'GDP growth and size',
    figure: '5.04% y-on-y Q3 2025; GDP Rp6,060.0tn current prices, Rp3,444.8tn constant 2010',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Pertumbuhan Ekonomi Indonesia Triwulan III-2025, BRS No. 102/11/Th. XXVIII',
    released: '5 Nov 2025',
  },
  {
    indicator: 'Inflation (CPI)',
    figure: '2.86% y-on-y Oct 2025; CPI 109.04; monthly 0.28%',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Berita Resmi Statistik: Perkembangan Indeks Harga Konsumen, Oktober 2025',
    released: '3 Nov 2025',
  },
  {
    indicator: 'Poverty',
    figure: '8.25% Sep 2025 (23.36m people); poverty line Rp641,443/capita/month',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Persentase Penduduk Miskin September 2025, BRS 5 Feb 2026',
    released: '5 Feb 2026',
  },
  {
    indicator: 'Gini ratio',
    figure: '0.363 Sep 2025 (urban 0.383, rural 0.295)',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Gini Ratio September 2025, BRS 5 Feb 2026',
    released: '5 Feb 2026',
  },
  {
    indicator: 'Unemployment (TPT) and labour force',
    figure: '4.85% Aug 2025; 7.46m unemployed; 146.54m employed; LFPR 70.59%',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Keadaan Ketenagakerjaan Indonesia Agustus 2025 (Sakernas)',
    released: 'Nov 2025',
  },
  {
    indicator: 'Human Development Index',
    figure: '75.90 in 2025 (2024: 75.02); life expectancy 74.47 years',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Indeks Pembangunan Manusia 2025, BRS 5 Nov 2025',
    released: '5 Nov 2025',
  },
  {
    indicator: 'Provincial HDI, TPT and poverty',
    figure: 'HDI, TPT and poverty rate for all 38 provinces',
    publisher: 'Statistics Indonesia (BPS)',
    publication: 'Statistik Indonesia 2026, Tables 4, 8 and 9 (via Posisi Riau di Tingkat Nasional 2025)',
    released: '2026',
  },
];
