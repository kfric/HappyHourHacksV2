import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { recordAuthentication } from '../auth'

export function SignIn() {
  const [errorMsg, setErrorMsg] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateUser = { ...user, [fieldName]: value }
    setUser(updateUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Sessions', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(user),
    })

    const apiResponse = await response.json()
    if (apiResponse.status === 400) {
      setErrorMsg(Object.values(apiResponse.errors).join(' '))
    } else {
      // TODO, record the login
      // recordAuthentication(apiResponse)
      recordAuthentication(apiResponse)
      window.location.assign('bars')
    }
  }

  return (
    <section className="hero is-fullheight">
      <div className="notification is-primary has-text-centered is-size-3">
        Happy Hour Hacks
      </div>
      <div className="has-text-centered is-size-4">Sign in</div>
      {errorMsg ? (
        <div className="notification is-danger has-text-centered">
          {errorMsg}
        </div>
      ) : null}
      <div className="container">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column">
                <form action=" className='box" onSubmit={handleFormSubmit}>
                  <div className="field">
                    <label className="label">
                      Email
                      <div className="control">
                        <input
                          type="email"
                          placeholder="e.g. harry.p@gmail.com"
                          className="input"
                          name="email"
                          value={user.email}
                          onChange={handleStringFieldChange}
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
                          name="password"
                          value={user.password}
                          onChange={handleStringFieldChange}
                        />
                      </div>
                    </label>
                    <div className="container has-text-centered">
                      <button className="button is-primary m-2">Login</button>
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
  )
}

export default SignIn
