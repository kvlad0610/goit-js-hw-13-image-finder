import './sass/styles.scss';
import newsService from './js/news-service';
// import fetchHits from './js/fetch-hits';
import updateHitsMarkup from './js/update-hits-markup';
import refs from './js/refs';

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;
  refs.hitsContainer.innerHTML = '';

  newsService.resetPage();
  form.reset();
  fetchHits();
});

refs.loadMoreBtn.addEventListener('click', fetchHits);

function fetchHits() {
  refs.loadMoreBtn.classList.add('is-hidden');

  newsService.fetchHits().then(hits => {
    updateHitsMarkup(hits);
    refs.loadMoreBtn.classList.remove('is-hidden');

    console.dir(document.documentElement);

    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  });
}
