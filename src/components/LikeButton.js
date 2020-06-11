import React from 'react'
import PropTypes from 'prop-types'

const LikeButton = (props) => {
  return (
    <div style={{ display: 'inline-block'}}>
      <button id={props.id} onClick={props.handleClick} className="likebutton" >
        <i className={`fa ${props.icon} like ${props.isActive === true ? 'active' : null}`} aria-hidden="true"></i>
      </button>
      {props.counter}
    </div>
  )
}

LikeButton.propTypes = {
  isLiked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default LikeButton