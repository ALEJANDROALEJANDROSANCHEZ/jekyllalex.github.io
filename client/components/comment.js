import React from "react"

class Comment extends React.Component {

  render() {
    const {comment,
      i,
      removeComment,
      postId} = this.props

    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment"
            onClick={removeComment.bind(null, postId, i)}>
            &times;
          </button>
        </p>
      </div>
    )
  }

}

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired,
  i: React.PropTypes.number.isRequired,
  removeComment: React.PropTypes.func.isRequired,
  postId: React.PropTypes.string.isRequired
}

export default Comment
