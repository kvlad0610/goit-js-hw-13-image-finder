import { data } from 'autoprefixer';

const key = '19732085-0a6dcdc0e90ef399881a67a68';

function fetchHits(searchQuery, page = 1) {
  const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;

  return fetch(url)
    .then(res => res.json())
    .then(({ hits }) => hits)
    .catch(error => console.log(error));
}

export default fetchHits;
