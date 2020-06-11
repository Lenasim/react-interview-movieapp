import React from 'react'
import LikeButton from './LikeButton'

const Movie = (props) => {
  return (
    <div className="card">
      <h4 className="card-heading">{props.title}</h4>
      <p className="card-cat">Category</p>
      <p className="card-text"> {props.category}</p>

      <div className="container">
        <LikeButton
          id={props.id}
          icon="fa-thumbs-up"
          counter={props.likes}
          isActive={props.isLiked === true}
          handleClick={props.handleLike}
        />
        {' '}
        <LikeButton
          id={props.id}
          icon="fa-thumbs-down"
          counter={props.dislikes}
          isActive={props.isLiked === false}
          handleClick={props.handleDislike}
        />
      </div>
    </div>
  )
}

export default Movie