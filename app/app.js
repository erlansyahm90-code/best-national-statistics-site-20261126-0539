// Router and province-table behaviour for Indonesia in Figures.
// Hash routes: #/ overview, #/population, #/economy, #/welfare,
// #/provinces, #/sources. No network calls: everything renders from the
// local data files imported by pages.js.

import {
  renderOverview,
  renderPopulation,
  renderEconomy,
  renderWelfare,
  renderProvinces,
  renderSources,
  provinceRows,
} from './pages.js';
import { PROVINCES } from './data-provinces.js';

const app = document.getElementById('app');
const navLinks = [...document.querySelectorAll('.nav a')];

const ROUTES = {
  '/': renderOverview,
  '/population': renderPopulation,
  '/economy': renderEconomy,
  '/welfare': renderWelfare,
  '/provinces': renderProvinces,
  '/sources': renderSources,
};

// Province table state: current sort key/direction and search text.
const provState = { sort: 'pop', dir: -1, query: '' };

function sortedProvinces() {
  const q = provState.query.trim().toLowerCase();
  let list = PROVINCES.filter(
    (p) => !q || p.name.toLowerCase().includes(q) || p.island.toLowerCase().includes(q),
  );
  const key = provState.sort;
  list = [...list].sort((a, b) => {
    const av = a[key];
    const bv = b[key];
    const cmp = typeof av === 'string' ? av.localeCompare(bv) : av - bv;
    return cmp * provState.dir;
  });
  return list;
}

function refreshProvinceTable() {
  const body = document.getElementById('prov-body');
  const count = document.getElementById('prov-count');
  if (!body) return;
  const list = sortedProvinces();
  body.innerHTML = provinceRows(list);
  if (count) {
    count.textContent =
      list.length === PROVINCES.length
        ? `Showing 38 of 38 provinces`
        : `Showing ${list.length} of 38 provinces`;
  }
}

function wireProvinces() {
  const search = document.getElementById('prov-search');
  if (search) {
    search.addEventListener('input', () => {
      provState.query = search.value;
      refreshProvinceTable();
    });
  }
  document.querySelectorAll('#prov-table button[data-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.getAttribute('data-sort');
      if (provState.sort === key) {
        provState.dir = -provState.dir;
      } else {
        provState.sort = key;
        provState.dir = key === 'name' || key === 'island' ? 1 : -1;
      }
      refreshProvinceTable();
    });
  });
}

function route() {
  const hash = location.hash.replace(/^#/, '') || '/';
  const render = ROUTES[hash] || ROUTES['/'];
  app.innerHTML = render();
  navLinks.forEach((a) => {
    const target = a.getAttribute('href').replace(/^#/, '') || '/';
    a.classList.toggle('active', target === hash || (target === '/' && hash === '/'));
    if (target === hash) a.setAttribute('aria-current', 'page');
    else a.removeAttribute('aria-current');
  });
  if (hash === '/provinces') wireProvinces();
  window.scrollTo(0, 0);
}

window.addEventListener('hashchange', route);
route();
