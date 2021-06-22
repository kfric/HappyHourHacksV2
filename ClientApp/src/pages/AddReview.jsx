import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

export function AddReview() {
  const [newBar, setNewBar] = useState({
    name: '',
    phone: '',
    address: '',
    website: '',
    style: '',
  })

  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateBar = { ...newBar, [fieldName]: value }
    setNewBar(updateBar)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Bars', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newBar),
    })

    if (response.ok) {
      history.push('bars')
    } else {
      const json = await response.json()
      setErrorMsg(Object.values(json.errors).join(' '))
    }
  }

  function handleLastPage() {
    history.goBack()
  }

  return (
    <div>
      <section className="hero is-fullheight">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/bars">Bars</Link>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Leave review
              </a>
            </li>
          </ul>
        </nav>
        <div className="subtitle has-text-centered">Leave a review</div>
        {errorMsg ? (
          <div className="notification is-danger">{errorMsg}</div>
        ) : null}
        <div className="container is-fluid">
          <div className="hero-body pt-0">
            <div className="container">
              <form onSubmit={handleFormSubmit}>
                <label className="label">
                  Title
                  <div className="control">
                    <input
                      type="text"
                      placeholder="e.g. Friendly staff!"
                      className="input"
                      name="name"
                      onChange={handleStringFieldChange}
                    />
                  </div>
                </label>
                <label className="label">
                  Body
                  <div className="control">
                    <textarea
                      placeholder="e.g. It was great to see that everyone was in a good mood!"
                      className="textarea"
                      name="phone"
                      onChange={handleStringFieldChange}
                    />
                  </div>
                </label>
                <label className="label">Stars</label>
                <div className="rating has-text-centered">
                  <input
                    id="star-rating-1"
                    type="radio"
                    name="stars"
                    value="1"
                  />
                  <label htmlFor="star-rating-1">1 star</label>
                  <input
                    id="star-rating-2"
                    type="radio"
                    name="stars"
                    value="2"
                  />
                  <label htmlFor="star-rating-2">2 stars</label>
                  <input
                    id="star-rating-3"
                    type="radio"
                    name="stars"
                    value="3"
                  />
                  <label htmlFor="star-rating-3">3 stars</label>
                  <input
                    id="star-rating-4"
                    type="radio"
                    name="stars"
                    value="4"
                  />
                  <label htmlFor="star-rating-4">4 stars</label>
                  <input
                    id="star-rating-5"
                    type="radio"
                    name="stars"
                    value="5"
                  />
                  <label htmlFor="star-rating-5">5 stars</label>
                  <div className="star-rating">
                    <label
                      htmlFor="star-rating-1"
                      aria-label="1 star"
                      title="1 star"
                    ></label>
                    <label
                      htmlFor="star-rating-2"
                      aria-label="2 stars"
                      title="2 stars"
                    ></label>
                    <label
                      htmlFor="star-rating-3"
                      aria-label="3 stars"
                      title="3 stars"
                    ></label>
                    <label
                      htmlFor="star-rating-4"
                      aria-label="4 stars"
                      title="4 stars"
                    ></label>
                    <label
                      htmlFor="star-rating-5"
                      aria-label="5 stars"
                      title="5 stars"
                    ></label>
                  </div>
                </div>
                <div className="field is-grouped mt-4">
                  <input
                    type="submit"
                    className="button is-primary"
                    value="Submit"
                  />
                  <div className="container has-text-right">
                    <div
                      className="button is-danger"
                      onClick={function () {
                        history.goBack()
                      }}
                    >
                      Cancel
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddReview
