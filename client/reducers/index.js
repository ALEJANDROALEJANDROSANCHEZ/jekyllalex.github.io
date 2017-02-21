import {combineReducers} from "redux"
import {routerReducer} from "react-router-redux"
import posts from "./posts"
import comments from "./comments"

const reducerSetup = {
  posts,
  comments,
  routing: routerReducer
}

const rootReducer = combineReducers(reducerSetup)

export default rootReducer
