import './sass/styles.scss';
import newsService from './js/news-service';
// import fetchHits from './js/fetch-hits';
import updateHitsMarkup from './js/update-hits-markup';
import refs from './js/refs';

const loadMoreBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLabel.textContent = 'Show more';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },
  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLabel.textContent = 'Loading...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },
  show() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },
};

refs.searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const form = event.currentTarget;
  newsService.query = form.elements.query.value;

  clearHitsContainer();
  newsService.resetPage();
  form.reset();
  fetchHits();
});

refs.loadMoreBtn.addEventListener('click', fetchHits);

function fetchHits() {
  loadMoreBtn.show();
  loadMoreBtn.disable();

  newsService.fetchHits().then(hits => {
    updateHitsMarkup(hits);
    loadMoreBtn.enable();

    if (newsService.page > 2) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth',
      });
    }
  });
}

function clearHitsContainer() {
  refs.hitsContainer.innerHTML = '';
}
