import { SET_CATEGORY, SET_MOVIES, LIKE, DISLIKE, SET_ITEMS_PAGE, SET_CURRENT_PAGE } from '../actions';

const initialState = {
  movies: [],
  selectedCat: [],
  categories: [],
  likes: [],
  dislikes: [],
  itemsPerPage: 4,
  currentPage: 0
}

const handleLikeVote = (state, action) => {
  let likes = [...state.likes]
  let dislikes = [...state.dislikes]
  if (likes.indexOf(action.movieId) === -1) {
    likes.push(action.movieId)
  }
  if (dislikes.indexOf(action.movieId) > -1) {
    dislikes.splice(dislikes.indexOf(action.movieId), 1);
  }

  return Object.assign({}, state, {
    likes: likes,
    dislikes: dislikes,
    movies: state.movies.map(m => {
      if (m.id !== action.movieId) {
        return m;
      }
      return Object.assign({}, m, {
        isLiked: true,
        likes: (m.isLiked === true || state.likes.some(s => s === m.id)) ? m.likes : m.likes + 1,
        dislikes: (m.isLiked === false && state.dislikes.some(s => s === m.id)) ? m.dislikes - 1 : m.dislikes
      })
    })
  })
}

const handleDislikeVote = (state, action) => {
  let dislikes = [...state.dislikes]
  let likes = [...state.likes]
  if (dislikes.indexOf(action.movieId) === -1) {
    dislikes.push(action.movieId)
  }
  if (likes.indexOf(action.movieId) > -1) {
    likes.splice(likes.indexOf(action.movieId), 1);
  }

  return Object.assign({}, state, {
    likes: likes,
    dislikes: dislikes,
    movies: state.movies.map(m => {
      if (m.id !== action.movieId) {
        return m;
      }
      return Object.assign({}, m, {
        isLiked: false,
        likes: (m.isLiked === true && state.likes.some(s => s === m.id)) ? m.likes - 1 : m.likes,
        dislikes: (m.isLiked === false || state.dislikes.some(s => s === m.id)) ? m.dislikes : m.dislikes + 1
      })
    })
  })
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        categories: action.movies.map(i => i.category)
          .filter((value, index, self) => self.indexOf(value) === index)
      }
    case SET_CATEGORY:
      return Object.assign({}, state, { selectedCat: action.selectedCat })
    case LIKE:
      return handleLikeVote(state, action)
    case DISLIKE:
      return handleDislikeVote(state, action)
    case SET_ITEMS_PAGE:
      return { ...state, itemsPerPage: action.itemsPerPage }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }
    default:
      return state
  }
}
