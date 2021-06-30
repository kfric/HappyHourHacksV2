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
      recordAuthentication(apiResponse)
      window.location.assign('bars')
    }
  }

  console.log('Welcome')

  return (
    <section className="hero is-fullheight">
      <div className="hero is-primary has-text-centered is-size-1 has-text-weight-bold p-5 is-family-secondary">
        Happy Hour Hacks
      </div>
      <div className=" subtitle has-text-centered is-size-4 mt-5 has-text-white">
        Sign in
      </div>
      {errorMsg ? (
        <div className="notification is-danger has-text-centered">
          {errorMsg}
        </div>
      ) : null}
      <div className="container">
        <div className="columns is-centered">
          <form action=" className='box" onSubmit={handleFormSubmit}>
            <div className="field mt-5">
              <label className="label">
                <div className="has-text-white">Email</div>
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
                <div className="has-text-white">Password</div>
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
              <div className="is-flex is-justify-content-center mt-2">
                <div className="field is-grouped">
                  <div className="control">
                    <p className="has-text-white">New user?</p>
                  </div>
                  <div className="control">
                    <Link to="/sign-up">Create an account</Link>
                  </div>
                </div>
              </div>
              <div>
                <Link to="/bars">
                  <p className="has-text-centered has-text-link">
                    Continue as guest
                  </p>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
