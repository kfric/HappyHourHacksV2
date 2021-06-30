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
      <div className="hero is-primary has-text-centered is-size-1 has-text-weight-bold p-5 is-family-secondary">
        Happy Hour Hacks
      </div>
      <div className=" subtitle has-text-centered is-size-4 mt-5 has-text-white">
        Create an account
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
              <label className="label has-text-white">
                Full name
                <div className="control">
                  <input
                    type="text"
                    placeholder="e.g. Harry Plotter"
                    className="input"
                    value={newUser.fullName}
                    name="fullName"
                    onChange={handleStringFieldChange}
                  />
                </div>
              </label>
              <label className="label has-text-white">
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
              <label className="label has-text-white">
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
                  <button className="button is-primary m-2">Submit</button>
                </p>
              </div>
              <div className="is-flex is-justify-content-center mt-2">
                <div className="field is-grouped">
                  <div className="control">
                    <p className="has-text-white">Already a member?</p>
                  </div>
                  <div className="control">
                    <Link to="/">Sign in</Link>
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

export default SignUp
