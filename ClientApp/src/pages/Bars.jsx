import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'
import ReactMapGL, { Marker, NavigationControl, Popup } from 'react-map-gl'

function SingleBar({ bar }) {
  const totalStars = bar.reviews.reduce(
    (starRatingSum, review) => starRatingSum + review.stars,
    0
  )
  const averageStars =
    bar.reviews.length === 0 ? 0 : totalStars / bar.reviews.length
  const averageStarsToOneDecimalPlace = averageStars.toFixed(1)

  return (
    <li className="container m-2" key={bar.id}>
      <Link
        to={`/details/${bar.id}`}
        className="box has-text-centered is-family-secondary has-background-grey"
      >
        <p className="subtitle has-text-centered m-0">{bar.name}</p>
        <span
          className="stars"
          style={{ '--rating': averageStarsToOneDecimalPlace }}
          ariel-label={`Star rating of this location is ${averageStarsToOneDecimalPlace} out of 5.`}
        />
        ({averageStarsToOneDecimalPlace})
        {bar.photoURL ? (
          <p>
            <img
              alt="Bar store front"
              width={200}
              src={bar.photoURL}
              className="mt-2"
            />
          </p>
        ) : null}
      </Link>
    </li>
  )
}

const user = getUser()

export function Bars() {
  const [bars, setBars] = useState([])
  const [searchText, setSearchText] = useState('')
  const [viewport, setViewport] = useState({
    latitude: 27.85048418256799,
    longitude: -82.57058480545466,
    zoom: 9,
  })
  const [selectedMapBar, setSelectedMapBar] = useState(null)

  useEffect(
    function () {
      async function loadBars() {
        const url =
          searchText.length === 0
            ? '/api/Bars'
            : `/api/Bars?filter=${searchText}`
        const response = await fetch(url)

        if (response.ok) {
          const json = await response.json()
          setBars(json)
        }
      }

      loadBars()
    },
    [searchText]
  )

  function handleRandomButton() {
    const random = Math.floor(Math.random() * bars.length + 1)
    window.location.assign(`/Details/${random}`)
  }

  return (
    <section className="hero is-fullheight">
      <div className="navbar is-fixed-top p-3 has-background-white-bis">
        <div className="control has-icons-left">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Search..."
            value={searchText}
            onChange={function (event) {
              setSearchText(event.target.value)
            }}
          />
          <span className="icon is small is-left">
            <i className="fas fa-search"></i>
          </span>
        </div>
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
      <section className="section is-fullheight mt-5">
        <div className="p-5"></div>
        <div className="subtitle has-text-centered is-size-1 has-text-white">
          Bars & Restaurants
        </div>
        {isLoggedIn() ? (
          <ul className="container is-flex is-justify-content-center">
            <Link to="/add-bar">
              <li className="box has-background-primary m-2">
                <p className="has-text-centered">
                  <i className="fas fa-plus has-text-black is-size-3"></i>
                </p>
              </li>
            </Link>
            <li
              className="box has-background-link m-2"
              onClick={handleRandomButton}
            >
              <p className="has-text-centered">
                <i className="fas fa-random has-text-black is-size-3"></i>
              </p>
            </li>
          </ul>
        ) : null}

        <div className="container mt-5">
          <ReactMapGL
            {...viewport}
            className="map"
            onViewportChange={setViewport}
            style={{ position: 'static' }}
            mapStyle="mapbox://styles/karl-f/ckr3s3iey08ku18qo3n3yzfsd"
            width="100%"
            height="256px"
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
          >
            <div style={{ position: 'absolute', left: 10 }} className="mt-2">
              <NavigationControl />
            </div>

            {selectedMapBar ? (
              <Popup
                className="popup"
                latitude={selectedMapBar.latitude}
                longitude={selectedMapBar.longitude}
                closeButton={true}
                closeOnClick={false}
                onClose={() => setSelectedMapBar(null)}
                offsetTop={-5}
              >
                <div>
                  <Link to={`/details/${selectedMapBar.id}`}>
                    <p>{selectedMapBar.name}</p>
                  </Link>
                  <a
                    href={`http://maps.google.com/?q=${selectedMapBar.address}`}
                  >
                    <p className="address-link is-size-7">
                      {selectedMapBar.address}
                    </p>
                  </a>
                </div>
              </Popup>
            ) : null}
            {bars.map((bar) => (
              <Marker
                key={bar.id}
                latitude={bar.latitude}
                longitude={bar.longitude}
              >
                <span
                  role="img"
                  aria-label="pin"
                  onClick={() => setSelectedMapBar(bar)}
                >
                  📍
                </span>
              </Marker>
            ))}
          </ReactMapGL>
        </div>

        <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center mt-5">
          {bars.map((bar) => (
            <SingleBar key={bar.id} bar={bar} />
          ))}
        </ul>
      </section>
    </section>
  )
}
