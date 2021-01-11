import './sass/styles.scss';

import fetchHits from './js/fetch-hits';
import updateHitsMarkup from './js/update-hits-markup';
import refs from './js/refs';

let searchQuery = '';
let page = 1;

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  searchQuery = form.elements.query.value;

  refs.hitsContainer.innerHTML = '';
  form.reset();
  page = 1;

  fetchHits(searchQuery, page).then(hits => {
    updateHitsMarkup(hits);
    page += 1;
  });
});

refs.loadMoreBtn.addEventListener('click', () => {
  fetchHits(searchQuery, page).then(hits => {
    updateHitsMarkup(hits);
    page += 1;
  });
});
