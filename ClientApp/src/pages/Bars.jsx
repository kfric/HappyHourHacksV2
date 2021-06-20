import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

function navbarClick() {
  const navbarMenu = document.querySelector('#nav-links')
  navbarMenu.classList.toggle('is-active')
}

export function Bars() {
  const [bars, setBars] = useState([])

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
                />
                <span className="icon is small is-left">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>
            <div className="navbar-menu" id="nav-links">
              <div class="navbar-start">
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
        <Link to="/add-bar" class="button is-medium is-fullwidth is-link">
          Add
        </Link>
        <Link to="#" class="button is-medium is-fullwidth is-danger">
          Random
        </Link>
      </div>
      <section className="section is-fullheight">
        <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
          <li className="container m-2">
            <Link to="/details/1" class="tile is-child box has-text-centered">
              <p className="title">Cycle Brew</p>
              <p>5 stars</p>
            </Link>
          </li>
          <li className="container m-2">
            <Link
              to="/details/1"
              className="tile is-child box has-text-centered"
            >
              <p className="title">MacDintons</p>
              <p>3 stars</p>
            </Link>
          </li>
          <li className="container m-2">
            <Link to="/details/1" class="tile is-child box has-text-centered">
              <p class="title">Yard of Ale</p>
              <p>4 stars</p>
            </Link>
          </li>
          <li className="container m-2">
            <Link to="/details/1" class="tile is-child box has-text-centered">
              <p class="title">Grand Central Brewery</p>
              <p>5 stars</p>
            </Link>
          </li>
          <li className="container m-2">
            <Link to="/details/1" class="tile is-child box has-text-centered">
              <p class="title">Cocktail</p>
              <p>5 stars</p>
            </Link>
          </li>
          <li className="container m-2">
            <Link to="/details/1" class="tile is-child box has-text-centered">
              <p class="title">Hyde Park</p>
              <p>4 stars</p>
            </Link>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default Bars
