import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './custom.scss'
import 'bulma/css/bulma.min.css'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Bars } from './pages/Bars'
import { Details } from './pages/Details'
import { AddBar } from './pages/AddBar'
import { AddDeal } from './pages/AddDeal'
import { PageNotFound } from './pages/PageNotFound'
import { AddReview } from './pages/AddReview'

export function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
        <Route exact path="/bars">
          <Bars />
        </Route>
        <Route exact path="/details/:id">
          <Details />
        </Route>
        <Route exact path="/add-bar">
          <AddBar />
        </Route>
        <Route exact path="/add-deal">
          <AddDeal />
        </Route>
        <Route exact path="/add-review/:id">
          <AddReview />
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <div className="content has-text-centered">
        <p>Created by Karl Frick in St.Petersburg, FL</p>
      </div>
    </>
  )
}
