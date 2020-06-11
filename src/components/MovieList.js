import React from 'react'
import ReactPaginate from 'react-paginate';
import MultiSelect from "react-multi-select-component"
import Movie from './Movie'


const MovieList = ({
  movies,
  categories,
  selectedCat,
  setFilter,
  like,
  dislike,
  itemPerPage,
  setItemsPerPage,
  setCurrentPage,
  totalPages,
  currentPage
}) => {
  return (
    <div>
      <MultiSelect
        className="selectbox"
        options={categories}
        value={selectedCat}
        onChange={setFilter}
        labelledBy="Select"
      />
      <div className="m-container">
        {movies &&
          movies.map(m =>
            <Movie
              key={m.id}
              id={m.id}
              title={m.title}
              category={m.category}
              likes={m.likes}
              dislikes={m.dislikes}
              isLiked={m.isLiked}
              handleLike={() => like(m.id)}
              handleDislike={() => dislike(m.id)}
            />)
        }
      </div>
      <div className="bottom-bar">
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          marginPagesDisplayed={10}
          pageRangeDisplayed={10}
          forcePage={currentPage}
          onPageChange={setCurrentPage}
          containerClassName={'pagination'} /* as this work same as bootstrap class */
          subContainerClassName={'pages pagination'} /* as this work same as bootstrap class */
          activeClassName={'active'} /* as this work same as bootstrap class */
        />
        <select className="page-selectbox" value={itemPerPage} onChange={setItemsPerPage}>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
      </div>
    </div>
  )
}

export default MovieList
