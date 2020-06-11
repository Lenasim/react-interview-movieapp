export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_MOVIES = 'SET_MOVIES'
export const LIKE = 'LIKE'
export const DISLIKE = 'DISLIKE'
export const SET_ITEMS_PAGE = 'SET_ITEMS_PAGE'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

export function setMovies(movies) {
  return { type: SET_MOVIES, movies }
}

export function setCategory(selectedCat) {
  return { type: SET_CATEGORY, selectedCat }
}

export function like(movieId) {
  return { type: LIKE, movieId }
}

export function dislike(movieId) {
  return { type: DISLIKE, movieId }
}

export function setItemsPerPage(itemsPerPage){
  return { type: SET_ITEMS_PAGE, itemsPerPage }
}

export function setCurrentPage(currentPage){
  return { type: SET_CURRENT_PAGE, currentPage }
}