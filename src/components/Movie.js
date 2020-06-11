import React from 'react'
import LikeButton from './LikeButton'

const Movie = (props) => {
  return (
    <div className="card">
      <h4 className="card-heading">{props.title}</h4>
      <p variant="primary">Category</p>
      <p className="card-text"> {props.category}</p>

      <div className="container">
        <LikeButton
          id={props.id}
          icon="fa-thumbs-up"
          counter={props.likes}
          isLiked={}
          handleClick={props.handleLike}
        />

        <button id={props.id} onClick={props.handleLike} className="likebutton" >
          <i className={`fa fa-thumbs-up like ${props.isLiked === true ? 'active' : null}`} aria-hidden="true"></i>
        </button>
        {props.likes}
        {' '}
        <button id={props.id} onClick={props.handleDislike} className="likebutton">
          <i className={`fa fa-thumbs-down dislike ${props.isLiked === false ? 'active' : null}`} aria-hidden="true"></i>
        </button>
        {props.dislikes}
      </div>
    </div>
  )
}

export default Movie