import React from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

export function SignIn() {
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
        <div className="has-text-centered is-size-4">Sign in</div>
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <form action=" className='box">
                    <div className="field">
                      <label className="label">
                        Username
                        <div className="control">
                          <input
                            type="email"
                            placeholder="e.g. harry.p@gmail.com"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Password
                        <div className="control">
                          <input
                            type="password"
                            placeholder="*****"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <div className="container has-text-centered">
                        <button class="button is-primary m-2">Login</button>
                      </div>
                      <div className="field is-grouped">
                        <div className="control">
                          <p>New user?</p>
                        </div>
                        <div className="control">
                          <Link to="/sign-up">Create an account</Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <Link to="/bars">
                        <p className="has-text-centered">Continue as guest</p>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SignIn
