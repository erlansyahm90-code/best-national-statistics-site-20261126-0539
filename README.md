# Indonesia in Figures — National Statistics Site

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/erlansyahm90-code/best-national-statistics-site-20261126-0539/rank.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/erlansyahm90-code/best-national-statistics-site-20261126-0539/reward.svg)](https://make.fun/c/best-national-statistics-site-20261126-0539)

**Indonesia in Figures** is a national statistics portal for Indonesia, built from real BPS (Statistics Indonesia) releases — every figure on the site names its source and year.

## What it shows

- **Overview** — six headline indicators (population 284.67m, GDP growth 5.04%, inflation 2.86%, poverty 8.25%, unemployment 4.85%, HDI 75.90), population and GDP charts, top-5 provinces.
- **Population** — generations (SUPAS 2025), 2010–2025 trend, Java share, dependency ratio.
- **Economy** — quarterly GDP growth, monthly inflation through 2025, growth drivers, fastest/slowest provinces.
- **Welfare** — poverty, Gini, unemployment and HDI trends, with HDI components.
- **Provinces** — all 38 provinces in a searchable, sortable table (population, share, density, HDI, unemployment, poverty).
- **Sources** — the exact BPS publication and release date behind every figure.

## How it is built

Vanilla HTML/CSS/JS, no framework, no network requests: all charts are hand-built SVG, all data lives in local files (`app/data-indicators.js`, `app/data-provinces.js`), split by job (`app/charts.js`, `app/pages.js`, `app/app.js`). Serve `app/` with any static server:

```
node serve.ts   # http://localhost:8080
```

Competition: [best-national-statistics-site-20261126-0539](https://make.fun/c/best-national-statistics-site-20261126-0539) on make.fun.
