import React from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

export function SignUp() {
  return (
    <div>
      <section className="hero is-fullheight">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
        <div className="container">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <form action=" className='box">
                    <div className="field">
                      <label className="label">
                        First name
                        <div className="control">
                          <input
                            type="email"
                            placeholder="e.g. Harry"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Last name
                        <div className="control">
                          <input
                            type="password"
                            placeholder="e.g. Potts"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Username
                        <div className="control">
                          <input
                            type="email"
                            placeholder="e.g. harryp!55"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Password
                        <div className="control">
                          <input
                            type="email"
                            placeholder="*****"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <div className="container has-text-centered">
                        <p className="control">
                          <button className="button is-primary m-2">
                            Submit
                          </button>
                        </p>
                      </div>
                      <div className="field is-grouped">
                        <div className="control">
                          <p>Already a member?</p>
                        </div>
                        <div className="control">
                          <Link to="/">Sign in</Link>
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

export default SignUp
