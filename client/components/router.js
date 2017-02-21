import React from "react"
import {Router, Route, IndexRoute, browserHistory} from "react-router"
import Main from "./main"
import PhotoGrid from "./photoGrid"
import Single from "./single"
import {Provider} from "react-redux"
import store, {history} from "../store"

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Main}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
)

export default router
