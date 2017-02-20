import React from "react"
import {Router, Route, IndexRoute, browserHistory} from "react-router"
import Main from "./main"
import PhotoGrid from "./photoGrid"
import Single from "./single"

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={PhotoGrid}></IndexRoute>
      <Route path="view/:postId" component={Single}></Route>
    </Route>
  </Router>
)

export default router
