
const actions = {
  "ADD_COMMENT": addComment,
  "REMOVE_COMMENT": removeComment
}

function addComment(state, action) {
  return [
    ...state,
    {
      user: action.author,
      text: action.comment
    }
  ]
}

function removeComment(state, action) {
  const i = action.commentIndex

  return [
    ...state.slice(0, i),
    ...state.slice(i + 1)
  ]
}

function postComments(state = [], action) {
  const response = actions[action.type]

  if (response) {
    return response(state, action)
  } else {
    return state
  }
}

function comments(state = [], action) {
  const postId = action.postId
  const post = state[postId]

  if(postId) {
    return Object.assign({}, state, {
      [postId]: postComments(post, action)
    })
  } else {
    return state
  }
}

export default comments
