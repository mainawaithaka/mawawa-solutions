// Toggle between "Find a fundi" and "Buy materials" search modes
const tabFundi = document.getElementById('tab-fundi');
const tabMaterials = document.getElementById('tab-materials');
const searchInput = document.getElementById('search-input');
const searchForm = document.querySelector('.search-box');

function setMode(mode){
  const isFundi = mode === 'fundi';
  tabFundi.classList.toggle('active', isFundi);
  tabMaterials.classList.toggle('active', !isFundi);
  tabFundi.setAttribute('aria-selected', isFundi);
  tabMaterials.setAttribute('aria-selected', !isFundi);
  searchInput.placeholder = isFundi
    ? 'e.g. Plumber near Kimuka centre'
    : 'e.g. Cement, timber, ballast...';
}

tabFundi.addEventListener('click', () => {
  setMode('fundi');
  document.querySelector('#fundis').scrollIntoView({ behavior: 'smooth' });
});
tabMaterials.addEventListener('click', () => {
  setMode('materials');
  document.querySelector('#materials').scrollIntoView({ behavior: 'smooth' });
});

// MVP: search just scrolls to the relevant section.
// Replace this with a real API call once a backend is connected.
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const target = tabFundi.classList.contains('active') ? '#fundis' : '#materials';
  document.querySelector(target).scrollIntoView({ behavior: 'smooth' });
});
