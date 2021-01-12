const refs = {
  hitsContainer: document.querySelector('.js-gallery'),
  searchForm: document.querySelector('#search-form'),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
  loadMoreBtnLabel: document.querySelector('[data-action="load-more"]>.label'),
  loadMoreBtnSpinner: document.querySelector(
    '[data-action="load-more"]>.spinner',
  ),
};
export default refs;
