
const increment = (index) => {

  return {
    type: "INCREMENT_LIKES",
    index
  }

}

const addComment = (postId, author, comment) => {

  return {
    type: "ADD_COMMENT",
    postId,
    author,
    comment
  }

}

const removeComment = (postId, commentIndex) => {

  return {
    type: "REMOVE_COMMENT",
    postId,
    commentIndex
  }

}

export {increment}
export {addComment}
export {removeComment}

