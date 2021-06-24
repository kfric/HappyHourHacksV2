import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getUser, isLoggedIn, logout } from '../auth'

import user2 from '../images/user2.png'

const user = getUser()

function navbarClick() {
  const navbarMenu = document.querySelector('#nav-links')
  navbarMenu.classList.toggle('is-active')
}

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

  function handleLogOut() {
    logout()
    window.location.assign('bars')
  }

  return (
    <div className="container">
      <div className="navbar is-fixed-top p-3 has-background-white-bis">
        <div className="field is-grouped pt-2">
          <a className="navbar-burger" onClick={navbarClick}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="container">
            <div className="container mr-3">
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
            <div className="navbar-menu" id="nav-links">
              <div className="navbar-start">
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
                  <span className="navbar-item" onClick={handleLogOut}>
                    Sign out
                  </span>
                ) : null}
                <a
                  href="https://github.com/kfric/HappyHourHacksV2/blob/master/README.md"
                  className="navbar-item"
                >
                  About
                </a>
              </div>
            </div>
          </div>
          {isLoggedIn() ? <p className="mr-3 mt-3">{user.fullName}</p> : null}
          {isLoggedIn() ? (
            <img src={user2} alt="user" className="user-img" />
          ) : null}
        </div>
      </div>
      <section className="section is-fullheight pt-3">
        <div className="subtitle has-text-centered m-5">Bars & Restaurants</div>
        {isLoggedIn() ? (
          <ul className="container is-flex is-justify-content-center">
            <Link to="/add-bar">
              <li className="box has-background-primary m-2">
                <p className="subtitle has-text-centered has-text-white">
                  <i className="fas fa-plus"></i>
                </p>
              </li>
            </Link>
            <li className="box has-background-link m-2">
              <p className="subtitle has-text-centered has-text-white">
                <i className="fas fa-random"></i>
              </p>
            </li>
          </ul>
        ) : null}
        <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
          {bars.map((bar) => (
            <li className="container m-2" key={bar.id}>
              <Link to={`/details/${bar.id}`} className="box has-text-centered">
                <p className="subtitle has-text-centered">{bar.name}</p>
                <span
                  className="stars"
                  style={{ '--rating': 1 }}
                  ariel-label="Star rating of this location"
                />
                (1.0)
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Bars
