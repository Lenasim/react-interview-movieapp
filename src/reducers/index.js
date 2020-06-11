import { SET_CATEGORY, SET_MOVIES, LIKE, DISLIKE } from '../actions';

const initialState = {
  movies: [],
  selectedCat: [],
  categories: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return { ...state, movies: action.movies, categories: action.movies.map(i => i.category).filter((value, index, self) => self.indexOf(value) === index) }
    case SET_CATEGORY:
      return Object.assign({}, state, { selectedCat: action.selectedCat })
    case LIKE:
      return Object.assign({}, state, {
        movies: state.movies.map(m => {
          if (m.id !== action.movieId) {
            return m;
          }
          return Object.assign({}, m, {
            isLiked: true,
            likes: m.likes + 1
          })
        })
      })
    case DISLIKE:
      return Object.assign({}, state, {
        movies: state.movies.map(m => {
          if (m.id !== action.movieId) {
            return m;
          }
          return Object.assign({}, m, {
            isLiked: false,
            dislikes: m.dislikes + 1
          })
        })
      })
    default:
      return state
  }
}
