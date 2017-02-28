import React from "react"
import Photo from "./photo"
import Comments from "./comments"

class Single extends React.Component {

  render() {
    const {posts, params, comments} = this.props
    const {postId} = params
    const i = posts.findIndex((post) => post.code === postId)
    const post = posts[i]
    const postComments = comments[postId] || []

    return(
      <div className="single-photo">
        <Photo i={i} post={post} {...this.props} />
        <Comments comments={postComments} params={params}
                  addComment={this.props.addComment}
                  removeComment={this.props.removeComment} />
      </div>
    )
  }

}

Single.propTypes = {
  posts: React.PropTypes.array.isRequired,
  comments: React.PropTypes.object.isRequired,
  params: React.PropTypes.object.isRequired
}

export default Single
