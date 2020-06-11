import React from 'react'
import MultiSelect from "react-multi-select-component"
import Movie from './Movie'

const MovieList = ({ movies, categories, selectedCat, setFilter, like, dislike }) => {

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
    </div>
  )
}

export default MovieList
