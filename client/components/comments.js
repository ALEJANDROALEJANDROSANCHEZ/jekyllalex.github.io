import React from "react"
import Comment from "./comment"

class Comments extends React.Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    const {postId} = this.props.params
    const refs = this.refs
    const author = refs.author.value
    const comment = refs.comment.value

    this.props.addComment(postId, author, comment)
    this.refs.commentForm.reset()
  }

  render() {
    const {comments} = this.props
    return(
      <div className="comments">
        {comments.map((c, i) => <Comment comment={c} i={i} key={i} />)}

        <form ref="commentForm" className="comment-form"
              onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="..." />
          <input type="submit" hidden />
        </form>

      </div>
    )
  }

}

Comments.propTypes = {
  comments: React.PropTypes.array.isRequired,
  params: React.PropTypes.object.isRequired,
  addComment: React.PropTypes.func.isRequired
}

export default Comments
