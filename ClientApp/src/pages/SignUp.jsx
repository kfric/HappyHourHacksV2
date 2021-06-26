import { User } from 'oidc-client'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function SignUp() {
  const [errorMsg, setErrorMsg] = useState('')

  const [newUser, setNewUser] = useState({
    fullName: '',
    email: '',
    password: '',
  })

  const history = useHistory()

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateUser = { ...newUser, [fieldName]: value }
    setNewUser(updateUser)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })

    if (response.ok) {
      history.push('/')
    } else {
      const json = await response.json()
      setErrorMsg(Object.values(json.errors).join(' '))
    }
  }

  return (
    <section className="hero is-fullheight">
      <div className="notification is-primary has-text-centered is-size-3">
        Happy Hour Hacks
      </div>
      {/* <nav className="breadcrumb is-centered mt-4" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/">Sign in</Link>
          </li>
          <li>
            <Link to="/bars">Bars</Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Sign up
            </a>
          </li>
        </ul>
      </nav> */}
      <div className="has-text-centered is-size-4">Create an account</div>
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
                      Full name
                      <div className="control">
                        <input
                          type="text"
                          placeholder="e.g. harryp!55"
                          className="input"
                          value={newUser.fullName}
                          name="fullName"
                          onChange={handleStringFieldChange}
                        />
                      </div>
                    </label>
                    <label className="label">
                      Email
                      <div className="control">
                        <input
                          type="email"
                          placeholder="e.g. Potts"
                          className="input"
                          value={newUser.email}
                          name="email"
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
                          value={newUser.password}
                          name="password"
                          onChange={handleStringFieldChange}
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
  )
}

export default SignUp
