const key = '19732085-0a6dcdc0e90ef399881a67a68';

export default {
  searchQuery: '',
  page: 1,
  fetchHits(searchQuery, page = 1) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${key}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      });
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.searchQuery;
  },
  set query(value) {
    this.searchQuery = value;
  },
};
