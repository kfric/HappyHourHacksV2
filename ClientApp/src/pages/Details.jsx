import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { authHeader, getUser, getUserId, isLoggedIn, logout } from '../auth'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'

import GCB from '../images/GCB.jpg'
import GCB2 from '../images/GCB2.jpg'
import user2 from '../images/user2.png'

import format from 'date-fns/format'
import { parseWithOptions } from 'date-fns/fp'

const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`
const user = getUser()

function navbarClick() {
  const navbarMenu = document.querySelector('#nav-links')
  navbarMenu.classList.toggle('is-active')
}

export function Details() {
  const params = useParams()
  const id = params.id

  const history = useHistory()

  const [bar, setBar] = useState({
    name: '',
    phone: '',
    address: '',
    website: '',
    style: '',
    latitude: 0,
    longitude: 0,
    reviews: [],
    deals: [],
    photos: [],
  })

  useEffect(() => {
    async function fetchBar() {
      const response = await fetch(`/api/Bars/${id}`)

      if (response.ok) {
        const apiData = await response.json()

        setBar(apiData)
      }
    }

    fetchBar()
  }, [id])

  const [viewport, setViewport] = useState({
    latitude: 27.77101804911986,
    longitude: -82.66090611749074,
    zoom: 9,
  })

  const totalStars = bar.reviews.reduce(
    (starRatingSum, review) => starRatingSum + review.stars,
    0
  )
  const averageStars =
    bar.reviews.length === 0 ? 0 : totalStars / bar.reviews.length
  const averageStarsToOneDecimalPlace = averageStars.toFixed(1)

  const [selectedMapBar, setSelectedMapBar] = useState(null)

  async function handleBarDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/Bars/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.ok) {
      history.push('/bars')
    }
  }

  async function handleReviewDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/Reviews/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.ok) {
      history.push('/bars')
    }
  }

  async function handleDealDelete(event) {
    event.preventDefault()

    const response = await fetch(`/api/Deals/${id}`, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json', ...authHeader() },
    })

    if (response.ok) {
      history.push('/bars')
    }
  }

  return (
    <div className="container">
      <div className="navbar is-fixed-top p-3 has-background-white-bis">
        <div className="field is-grouped mr-6">
          {isLoggedIn() ? (
            <p className="navbar-item has-text-white">Hello, {user.fullName}</p>
          ) : null}
          {isLoggedIn() ? null : (
            <Link to="/" className="navbar-item">
              Sign in
            </Link>
          )}
          {isLoggedIn() ? null : (
            <Link to="/sign-up" className="navbar-item">
              Sign up
            </Link>
          )}
          {isLoggedIn() ? (
            <Link
              to="bars"
              className="navbar-item"
              onClick={function () {
                logout()
                window.location.assign('bars')
              }}
            >
              Sign out
            </Link>
          ) : null}
          <a
            href="https://github.com/kfric/HappyHourHacksV2/blob/master/README.md"
            className="navbar-item"
          >
            About
          </a>
        </div>
      </div>
      <div className="pt-6"></div>
      <nav className="breadcrumb is-centered pt-6" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/bars">Bars</Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page" className="has-text-grey-light">
              Details
            </a>
          </li>
        </ul>
      </nav>
      <div className="subtitle is-size-1 has-text-centered m-5 has-text-white">
        {bar.name}
        <p className="is-size-6 has-text-white">
          <span
            className="stars"
            style={{ '--rating': averageStarsToOneDecimalPlace }}
            ariel-label={`Star rating of this location is ${averageStarsToOneDecimalPlace} out of 5.`}
          />
          ({bar.reviews.length})
        </p>
      </div>
      {isLoggedIn() ? (
        <ul className="container is-flex is-justify-content-center">
          <Link to={`/add-deal/${id}`}>
            <li className="box m-2">
              <p className="subtitle has-text-centered">
                <i className="fas fa-dollar-sign has-text-black px-2 is-size-3"></i>
              </p>
            </li>
          </Link>
          <Link to={`/add-review/${id}`}>
            <li className="box m-2">
              <p className="subtitle has-text-centered">
                <i className="fas fa-pencil-alt has-text-black is-size-3"></i>
              </p>
            </li>
          </Link>
          <Link to={`/add-photo/${id}`}>
            <li className="box m-2">
              <p className="subtitle has-text-centered">
                <i className="fas fa-image has-text-black is-size-3"></i>
              </p>
            </li>
          </Link>
        </ul>
      ) : null}
      <section className="section is-fullheight pt-0 mt-5">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-8 is-flex">
              <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                style={{ position: 'static' }}
                width="696px"
                height="256px"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              >
                <div
                  style={{ position: 'absolute', left: 10 }}
                  className="mt-2"
                >
                  <NavigationControl />
                </div>

                {selectedMapBar ? (
                  <Popup
                    latitude={selectedMapBar.latitude}
                    longitude={selectedMapBar.longitude}
                    closeButton={true}
                    closeOnClick={false}
                    onClose={() => setSelectedMapBar(null)}
                    offsetTop={-5}
                  >
                    <div>
                      <p>{selectedMapBar.name}</p>
                      <a href={`http://maps.google.com/?q=${bar.address}`}>
                        <p className="address-link is-size-7">
                          {selectedMapBar.address}
                        </p>
                      </a>
                    </div>
                  </Popup>
                ) : null}

                <Marker latitude={bar.latitude} longitude={bar.longitude}>
                  <span
                    role="img"
                    aria-label="pin"
                    onClick={() => setSelectedMapBar(bar)}
                  >
                    📍
                  </span>
                </Marker>
              </ReactMapGL>
            </div>
            <div className="tile is-parent is-justify-content-space-evenly is-flex-direction-column">
              <a href={`tel:${bar.phone}`}>
                <div className="tile is-child box notification is-primary has-text-centered has-text-weight-bold">
                  Call
                </div>
              </a>
              <Link to={`//${bar.website}`}>
                <div className="tile is-child box notification is-link has-text-centered has-text-weight-bold">
                  Website
                </div>
              </Link>
              {isLoggedIn() ? (
                <div className="tile is-child box notification is-warning has-text-centered has-text-weight-bold">
                  Update
                </div>
              ) : null}
              {bar.userId === getUserId() ? (
                <div
                  className="tile is-child box notification is-danger has-text-centered has-text-weight-bold"
                  onClick={handleBarDelete}
                >
                  Delete
                </div>
              ) : null}
            </div>
          </div>
          <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
            {bar.reviews.map((review) => (
              <li
                className="box has-text-centered m-2 has-background-grey"
                key={review.id}
              >
                {bar.userId === getUserId() ? (
                  <i
                    className="fas fa-times-circle has-text-black is-flex is-justify-content-end"
                    onClick={handleReviewDelete}
                  ></i>
                ) : null}
                <p className="subtitle mb-0 is-size-4">{review.title}</p>
                <p className="is-size-7 has-text-centered mb-3">
                  <span
                    className="stars"
                    style={{ '--rating': review.stars }}
                    ariel-label="Star rating of this location"
                  />
                </p>
                <p className="is-size-6 mb-3">{review.body}</p>
                <p className="is-family-secondary">by {review.user.fullName}</p>
                <p className="is-size-7">
                  <time>
                    {format(new Date(review.creationDate), dateFormat)}
                  </time>
                </p>
              </li>
            ))}
          </ul>
          <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
            {bar.deals.map((deal) => (
              <li
                className="box has-text-centered m-2 has-background-grey"
                key={deal.id}
              >
                {bar.userId === getUserId() ? (
                  <i
                    className="fas fa-times-circle has-text-black is-flex is-justify-content-end"
                    onClick={handleDealDelete}
                  ></i>
                ) : null}

                <p className="subtitle mb-0 is-size-4">
                  {deal.sunday ? 'Su, ' : null}
                  {deal.monday ? 'Mo, ' : null}
                  {deal.tuesday ? 'Tu, ' : null}
                  {deal.wednesday ? 'We, ' : null}
                  {deal.thursday ? 'Th, ' : null}
                  {deal.friday ? 'Fr, ' : null}
                  {deal.saturday ? 'Sa' : null}
                </p>
                <p className="is-size-7 has-text-centered mb-3">
                  {deal.start}-{deal.end}
                </p>
                <p className="is-size-6 mb-3">{deal.details}</p>
                <p className="is-size-7">
                  <time>{format(new Date(deal.creationDate), dateFormat)}</time>
                </p>
              </li>
            ))}
            {/* {isLoggedIn() ? (
              <ul>
                <li className="box has-text-centered m-2">
                  <Link to={`/add-deal/${id}`}>
                    <p className="has-text-black">+ Deal</p>
                  </Link>
                </li>
                <li className="box has-text-centered m-2">
                  <Link to={`/add-review/${id}`}>
                    <p className="has-text-black">+ Review</p>
                  </Link>
                </li>{' '}
              </ul>
            ) : null} */}
          </ul>
          <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
            {bar.photos.map((photo) => (
              <li key={photo.id}>
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="m-2"
                  height="300px"
                  width="300px"
                />
              </li>
            ))}
            {/* <li>
              <img
                src={GCB}
                alt="bar"
                className="m-2"
                height="400px"
                width="400px"
              />
            </li>
            <li>
              <img
                src={GCB2}
                alt="bar"
                className="m-2"
                height="400px"
                width="400px"
              />
            </li> */}
            {/* {isLoggedIn() ? (
              <li className="box has-text-centered m-2">
                <p>+ img</p>
              </li>
            ) : null} */}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Details
