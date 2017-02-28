import React from "react"

class Comment extends React.Component {

  render() {
    const {comment, i} = this.props
    return(
      <div className="comment" key={i}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>
      </div>
    )
  }

}

Comment.propTypes = {
  comment: React.PropTypes.object.isRequired,
  i: React.PropTypes.number.isRequired
}

export default Comment
