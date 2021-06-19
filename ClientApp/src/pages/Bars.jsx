import React from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

function navbarClick() {
  const navbarMenu = document.querySelector('#nav-links')
  navbarMenu.classList.toggle('is-active')
}

export function Bars() {
  return (
    <div>
      <div className="hero is-primary">
        <div className="field is-grouped pt-2">
          <a className="navbar-burger" onClick={navbarClick}>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <div className="navbar-menu" id="nav-links">
            <div class="navbar-start">
              {/* <a className="navbar-item">Home</a> */}
              <a className="navbar-item">Sign out</a>
              <a
                href="https://github.com/kfric/HappyHourHacksV2/blob/master/README.md"
                className="navbar-item"
              >
                About
              </a>
            </div>
          </div>
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
        </div>
      </div>
      <section className="section is-fullheight">
        <div className="container">
          <div class="tile is-ancestor">
            <div className="tile is-4 is-vertical is-parent">
              <Link to="/details/1" class="tile is-child box has-text-centered">
                <p className="title">Cycle Brew</p>
                <p>5 stars</p>
              </Link>
              <Link
                to="/details/1"
                className="tile is-child box has-text-centered"
              >
                <p className="title">MacDintons</p>
                <p>3 stars</p>
              </Link>
            </div>
            <div className="tile is-4 is-vertical is-parent">
              <Link to="/details/1" class="tile is-child box has-text-centered">
                <p class="title">Yard of Ale</p>
                <p>4 stars</p>
              </Link>
              <Link to="/details/1" class="tile is-child box has-text-centered">
                <p class="title">Grand Central Brewery</p>
                <p>5 stars</p>
              </Link>
            </div>
            <div class="tile is-4 is-vertical is-parent ">
              <Link to="/details/1" class="tile is-child box has-text-centered">
                <p class="title">Cocktail</p>
                <p>5 stars</p>
              </Link>
              <Link to="/details/1" class="tile is-child box has-text-centered">
                <p class="title">Hyde Park</p>
                <p>4 stars</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bars
