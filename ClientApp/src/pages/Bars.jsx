import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

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

  return (
    <div className="container">
      <div className="column">
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
                <a className="navbar-item">Sign out</a>
                <a
                  href="https://github.com/kfric/HappyHourHacksV2/blob/master/README.md"
                  className="navbar-item"
                >
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="field is-grouped mt-1">
        <Link to="/add-bar" className="button is-medium is-fullwidth is-link">
          Add
        </Link>
        <Link to="#" className="button is-medium is-fullwidth is-danger">
          Random
        </Link>
      </div>
      <section className="section is-fullheight">
        <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
          {bars.map((bar) => (
            <li className="container m-2" key={bar.id}>
              <Link
                to="/details/1"
                className="tile is-child box has-text-centered"
              >
                <p className="subtitle has-text-centered">{bar.name}</p>
                <p>5 stars</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default Bars
