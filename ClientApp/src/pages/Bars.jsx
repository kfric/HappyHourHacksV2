import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'

import user2 from '../images/user2.png'

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
        <p className="subtitle has-text-centered">{bar.name}</p>
        <span
          className="stars"
          style={{ '--rating': averageStarsToOneDecimalPlace }}
          ariel-label={`Star rating of this location is ${averageStarsToOneDecimalPlace} out of 5.`}
        />
        ({averageStarsToOneDecimalPlace})
      </Link>
    </li>
  )
}

const user = getUser()

// function navbarClick() {
//   const navbarMenu = document.querySelector('#nav-links')
//   navbarMenu.classList.toggle('is-active')
// }

export function Bars() {
  const [bars, setBars] = useState([])
  const [searchText, setSearchText] = useState('')

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
        <div className="container">
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
        </div>
      </div>
      <div className="p-5"></div>
      <section className="section is-fullheight mt-5">
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
        <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center mt-5">
          {bars.map((bar) => (
            <SingleBar key={bar.id} bar={bar} />
          ))}
        </ul>
      </section>
    </section>
  )
}

export default Bars
