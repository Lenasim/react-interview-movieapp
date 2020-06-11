export const SET_CATEGORY = 'SET_CATEGORY'
export const SET_MOVIES = 'SET_MOVIES'
export const LIKE = 'LIKE'
export const DISLIKE = 'DISLIKE'

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
