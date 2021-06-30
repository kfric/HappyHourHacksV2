import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Bars } from './pages/Bars'
import { Details } from './pages/Details'
import { AddBar } from './pages/AddBar'
import { AddDeal } from './pages/AddDeal'
import { PageNotFound } from './pages/PageNotFound'
import { AddReview } from './pages/AddReview'
import { AddPhoto } from './pages/AddPhoto'
import { EditBar } from './pages/EditBar'

import './custom.scss'

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
        <Route exact path="/edit-bar/:id/edit">
          <EditBar />
        </Route>
        <Route exact path="/add-deal/:id">
          <AddDeal />
        </Route>
        <Route exact path="/add-review/:id">
          <AddReview />
        </Route>
        <Route exact path="/add-photo/:id">
          <AddPhoto />
        </Route>
        <Route exact path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <div className="footer has-text-centered is-fixed-bottom pb-1 has-text-white">
        <p className="has-text-white">
          Created by Karl Frick in St.Petersburg, FL{' '}
          <i className="fas fa-heart"></i>
        </p>
      </div>
    </>
  )
}
