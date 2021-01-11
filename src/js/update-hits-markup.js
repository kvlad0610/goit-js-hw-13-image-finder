import hitsTpl from '../templates/hits.hbs';
import refs from './refs';

function updateHitsMarkup(hits) {
  const markup = hitsTpl(hits);

  refs.hitsContainer.insertAdjacentHTML('beforeend', markup);
}

export default updateHitsMarkup;
