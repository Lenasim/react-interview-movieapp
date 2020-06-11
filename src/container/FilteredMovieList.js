import { connect } from 'react-redux'
import { setCategory, setCurrentPage, setItemsPerPage, like, dislike } from '../actions'
import MovieList from '../components/MovieList'

const mapStateToProps = (state) => {
  let pagination = [];
  const movies = (state.movies?.filter(m => {
    if (state.selectedCat?.length === 0 || state.selectedCat?.some(s => s.value === m.category)) {
      return m
    }
    return null
  }) ?? []);
  const totalPages = Math.ceil((movies.length + 1) / state.itemsPerPage)
  const sliceStart = state.currentPage * state.itemsPerPage

  return {
    movies: movies.slice(sliceStart, sliceStart + state.itemsPerPage),
    categories: state.categories?.map(c => {
      return { label: c, value: c }
    }) ?? [],
    selectedCat: state.selectedCat ?? [],
    totalPages: totalPages,
    pagination: pagination,
    currentPage: state.currentPage
  }
}

const mapDispatchToProps = dispatch => ({
  setItemsPerPage: e => {
    dispatch(setCurrentPage(0))
    dispatch(setItemsPerPage(e.target.value))
  },
  setCurrentPage: e => dispatch(setCurrentPage(e.selected)),
  setFilter: value => {
    dispatch(setCurrentPage(0))
    dispatch(setCategory(value))
  },
  like: movieId => dispatch(like(movieId)),
  dislike: movieId => dispatch(dislike(movieId))
})

const FilteredMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList)

export default FilteredMovieList