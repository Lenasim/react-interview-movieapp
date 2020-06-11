import { connect } from 'react-redux'
import { setCategory, like, dislike } from '../actions'
import MovieList from '../components/MovieList'

const mapStateToProps = (state) => {
  return {
    movies: state.movies?.filter(m => {
      if (state.selectedCat?.length === 0) {
        return m
      }
      if (state.selectedCat?.some(s => s.value === m.category)) {
        return m
      }
      return null
    }) ?? [],
    categories: state.categories?.map(c => {
      return { label: c, value: c }
    }) ?? [],
    selectedCat: state.selectedCat ?? []
  }
}

const mapDispatchToProps = dispatch => ({
  setFilter: value => dispatch(setCategory(value)),
  like: movieId => dispatch(like(movieId)),
  dislike: movieId => dispatch(dislike(movieId))
})

const FilteredMovieList = connect(mapStateToProps, mapDispatchToProps)(MovieList)

export default FilteredMovieList