// Population and welfare indicators for all 38 provinces, 2025.
// Source: Statistics Indonesia (BPS), Statistik Indonesia 2026 — Table 3
// (population, share, density), Table 4 (open unemployment rate, Aug 2025),
// Table 8 (Human Development Index, 2025), Table 9 (poverty rate, Mar 2025).
// Population is mid-2025, in people (tables give thousands; ×1,000 here).
// The 38 rows sum to 284,438,600, the published national total 284,438,782
// rounded to the nearest hundred in the source table.

export const PROVINCES = [
  { name: 'West Java', island: 'Java', pop: 50759000, share: 17.85, density: 1370, hdi: 75.9, tpt: 6.77, poverty: 7.02 },
  { name: 'East Java', island: 'Java', pop: 42089300, share: 14.8, density: 876, hdi: 76.13, tpt: 3.88, poverty: 9.5 },
  { name: 'Central Java', island: 'Java', pop: 38233900, share: 13.44, density: 1113, hdi: 74.77, tpt: 4.66, poverty: 9.48 },
  { name: 'North Sumatra', island: 'Sumatra', pop: 15785800, share: 5.55, density: 218, hdi: 76.47, tpt: 5.32, poverty: 7.36 },
  { name: 'Banten', island: 'Java', pop: 12537400, share: 4.41, density: 1341, hdi: 77.25, tpt: 6.69, poverty: 5.63 },
  { name: 'DKI Jakarta', island: 'Java', pop: 10678000, share: 3.75, density: 16155, hdi: 85.05, tpt: 6.05, poverty: 4.28 },
  { name: 'South Sulawesi', island: 'Sulawesi', pop: 9563100, share: 3.36, density: 211, hdi: 75.92, tpt: 4.21, poverty: 7.6 },
  { name: 'Lampung', island: 'Sumatra', pop: 9522900, share: 3.35, density: 284, hdi: 73.98, tpt: 4.21, poverty: 10.0 },
  { name: 'South Sumatra', island: 'Sumatra', pop: 8928500, share: 3.14, density: 103, hdi: 74.76, tpt: 3.69, poverty: 10.15 },
  { name: 'Riau', island: 'Sumatra', pop: 6811200, share: 2.39, density: 76, hdi: 76.31, tpt: 4.16, poverty: 6.16 },
  { name: 'West Sumatra', island: 'Sumatra', pop: 5914300, share: 2.08, density: 140, hdi: 77.27, tpt: 5.62, poverty: 5.35 },
  { name: 'West Kalimantan', island: 'Kalimantan', pop: 5766000, share: 2.03, density: 39, hdi: 72.09, tpt: 4.82, poverty: 6.16 },
  { name: 'East Nusa Tenggara', island: 'Nusa Tenggara', pop: 5742600, share: 2.02, density: 124, hdi: 69.89, tpt: 3.31, poverty: 18.6 },
  { name: 'West Nusa Tenggara', island: 'Nusa Tenggara', pop: 5731100, share: 2.01, density: 291, hdi: 73.97, tpt: 3.06, poverty: 11.78 },
  { name: 'Aceh', island: 'Sumatra', pop: 5626000, share: 1.98, density: 99, hdi: 76.23, tpt: 5.64, poverty: 12.33 },
  { name: 'Bali', island: 'Bali', pop: 4461300, share: 1.57, density: 798, hdi: 79.37, tpt: 1.49, poverty: 3.72 },
  { name: 'South Kalimantan', island: 'Kalimantan', pop: 4323300, share: 1.52, density: 116, hdi: 76.1, tpt: 4.16, poverty: 3.84 },
  { name: 'East Kalimantan', island: 'Kalimantan', pop: 4267600, share: 1.5, density: 34, hdi: 79.39, tpt: 5.18, poverty: 5.17 },
  { name: 'DI Yogyakarta', island: 'Java', pop: 3781500, share: 1.33, density: 1193, hdi: 82.48, tpt: 3.46, poverty: 10.23 },
  { name: 'Jambi', island: 'Sumatra', pop: 3768500, share: 1.32, density: 77, hdi: 75.13, tpt: 4.26, poverty: 7.19 },
  { name: 'Central Sulawesi', island: 'Sulawesi', pop: 3156100, share: 1.11, density: 51, hdi: 72.82, tpt: 2.92, poverty: 10.92 },
  { name: 'Central Kalimantan', island: 'Kalimantan', pop: 2845000, share: 1.0, density: 19, hdi: 74.86, tpt: 3.97, poverty: 5.19 },
  { name: 'Southeast Sulawesi', island: 'Sulawesi', pop: 2836700, share: 1.0, density: 78, hdi: 74.25, tpt: 3.31, poverty: 10.54 },
  { name: 'North Sulawesi', island: 'Sulawesi', pop: 2721400, share: 0.96, density: 188, hdi: 76.32, tpt: 5.99, poverty: 6.71 },
  { name: 'Riau Islands', island: 'Sumatra', pop: 2213500, share: 0.78, density: 268, hdi: 80.53, tpt: 6.45, poverty: 4.44 },
  { name: 'Bengkulu', island: 'Sumatra', pop: 2138000, share: 0.75, density: 106, hdi: 75.68, tpt: 3.41, poverty: 12.08 },
  { name: 'Maluku', island: 'Maluku', pop: 1970600, share: 0.69, density: 43, hdi: 74.09, tpt: 6.27, poverty: 15.38 },
  { name: 'Bangka Belitung Islands', island: 'Sumatra', pop: 1550800, share: 0.55, density: 93, hdi: 75.26, tpt: 4.45, poverty: 5.0 },
  { name: 'West Sulawesi', island: 'Sulawesi', pop: 1525300, share: 0.54, density: 92, hdi: 71.16, tpt: 2.86, poverty: 10.41 },
  { name: 'Central Papua', island: 'Papua', pop: 1492300, share: 0.52, density: 24, hdi: 60.64, tpt: 3.62, poverty: 28.9 },
  { name: 'Highland Papua', island: 'Papua', pop: 1484900, share: 0.52, density: 29, hdi: 54.91, tpt: 1.68, poverty: 30.03 },
  { name: 'North Maluku', island: 'Maluku', pop: 1373800, share: 0.48, density: 42, hdi: 72.52, tpt: 4.55, poverty: 5.81 },
  { name: 'Gorontalo', island: 'Sulawesi', pop: 1242200, share: 0.44, density: 103, hdi: 72.62, tpt: 3.42, poverty: 13.24 },
  { name: 'Papua', island: 'Papua', pop: 1073600, share: 0.38, density: 13, hdi: 74.69, tpt: 6.96, poverty: 19.16 },
  { name: 'North Kalimantan', island: 'Kalimantan', pop: 749400, share: 0.26, density: 11, hdi: 74.04, tpt: 3.85, poverty: 5.54 },
  { name: 'Southwest Papua', island: 'Papua', pop: 636400, share: 0.22, density: 16, hdi: 70.55, tpt: 6.85, poverty: 17.95 },
  { name: 'West Papua', island: 'Papua', pop: 587600, share: 0.21, density: 10, hdi: 68.48, tpt: 4.55, poverty: 20.66 },
  { name: 'South Papua', island: 'Papua', pop: 549700, share: 0.19, density: 5, hdi: 69.54, tpt: 4.04, poverty: 19.71 },
];

export const PROVINCE_SOURCE =
  'BPS, Statistik Indonesia 2026, Tables 3, 4, 8, 9 — population mid-2025, TPT Aug 2025, HDI 2025, poverty Mar 2025.';
