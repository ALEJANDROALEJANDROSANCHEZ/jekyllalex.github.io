
const actions = {
  "ADD_COMMENT": addComment
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
