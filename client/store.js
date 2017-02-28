import {createStore, compose} from "redux"
import {syncHistoryWithStore} from "react-router-redux"
import {browserHistory} from "react-router"
import rootReducer from "./reducers/index"
import comments from "./data/comments"
import posts from "./data/posts"

const defaultState = {
  comments,
  posts
}

const store = createStore(rootReducer, defaultState)

const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default
    store.replaceReducer(nextRootReducer )
  })
}

export {history}

export default store

