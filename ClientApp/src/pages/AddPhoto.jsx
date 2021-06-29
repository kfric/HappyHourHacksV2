import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { authHeader } from '../auth'

export function AddPhoto() {
  const params = useParams()
  const id = params.id

  const [photo, setPhoto] = useState({
    title: '',
    barId: id,
  })

  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updatePhoto = { ...photo, [fieldName]: value }
    setPhoto(updatePhoto)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/photos', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(photo),
    })
    if (response.status === 401) {
      setErrorMsg('Not Authorized')
    } else {
      if (response.ok) {
        history.goBack()
      } else {
        const json = await response.json()
        setErrorMsg(Object.values(json.errors).join(' '))
      }
    }
  }

  return (
    <section className="hero is-fullheight">
      <div className="hero is-primary has-text-centered is-size-1 has-text-weight-bold p-5 is-family-secondary">
        Happy Hour Hacks
      </div>
      <nav className="breadcrumb is-centered mt-5" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="javascript:history.back()">Bars</Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page" className="has-text-white">
              Add photo
            </a>
          </li>
        </ul>
      </nav>
      <div className="subtitle has-text-centered has-text-white is-size-3">
        Add photo
      </div>
      {errorMsg ? (
        <div className="notification is-danger">{errorMsg}</div>
      ) : null}
      <div className="container is-fluid">
        <div className="hero-body pt-0">
          <div className="container">
            <form onSubmit={handleFormSubmit}>
              <label className="label">
                <div className="has-text-white">Title</div>
                <div className="control">
                  <input
                    type="text"
                    placeholder="e.g. Draft beers"
                    className="input"
                    name="title"
                    onChange={handleStringFieldChange}
                    value={photo.title}
                    maxLength={35}
                  />
                </div>
              </label>
              <label className="label">
                <div className="has-text-white">Photo</div>
                <div className="control">
                  <input type="upload" />
                </div>
              </label>
              {/* <div className="rating has-text-centered is-size-2">
                <input
                  id="star-rating-1"
                  type="radio"
                  name="stars"
                  value="1"
                  checked={photo.stars === 1}
                  onChange={() => handleStarSelection(1)}
                />
                <label htmlFor="star-rating-1">1 star</label>
                <input
                  id="star-rating-2"
                  type="radio"
                  name="stars"
                  value="2"
                  checked={photo.stars === 2}
                  onChange={() => handleStarSelection(2)}
                />
                <label htmlFor="star-rating-2">2 stars</label>
                <input
                  id="star-rating-3"
                  type="radio"
                  name="stars"
                  value="3"
                  checked={photo.stars === 3}
                  onChange={() => handleStarSelection(3)}
                />
                <label htmlFor="star-rating-3">3 stars</label>
                <input
                  id="star-rating-4"
                  type="radio"
                  name="stars"
                  value="4"
                  checked={photo.stars === 4}
                  onChange={() => handleStarSelection(4)}
                />
                <label htmlFor="star-rating-4">4 stars</label>
                <input
                  id="star-rating-5"
                  type="radio"
                  name="stars"
                  value="5"
                  checked={photo.stars === 5}
                  onChange={() => handleStarSelection(5)}
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
              </div> */}
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
  )
}
