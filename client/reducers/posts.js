
// ! Every reducer runs every time an action is taken

// args
// 1 action - data
// 2 copy of current state

function posts(state = [], action) {

  switch(action.type) {
    case "INCREMENT_LIKES" :
      const i = action.index
      const post = state[i]
      return [
        ...state.slice(0, i),
        Object.assign({}, post, {likes: post.likes + 1}),
        ...state.slice(i + 1)
      ]
    default:
      return state
  }
}

export default posts
