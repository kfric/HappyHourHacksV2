import React from 'react'
import { Link } from 'react-router-dom'

import maps from '../images/maps.jpeg'
import GCB from '../images/GCB.jpg'
import GCB2 from '../images/GCB2.jpg'

function navbarClick() {
  const navbarMenu = document.querySelector('#nav-links')
  navbarMenu.classList.toggle('is-active')
}

export function Details() {
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
          </div>
        </div>
      </div>
      <div className="container">
        <div className="field is-grouped mt-1">
          <Link to="/add-bar" class="button is-medium is-fullwidth is-link">
            Add
          </Link>
          <Link to="#" class="button is-medium is-fullwidth is-danger">
            Random
          </Link>
        </div>
      </div>
      <div className="container is-size-4 has-text-centered m-5">
        Grand Central Brewery
      </div>
      <section className="section is-fullheight pt-0">
        <div className="container">
          {/* new tiles*********************************************************** */}
          <div class="tile is-ancestor">
            <div class="tile is-parent is-8">
              <img src={maps} alt="map to the bar location" />
            </div>
            <div className="tile is-parent is-justify-content-space-evenly is-flex-direction-column">
              <div className="tile is-child box notification is-primary">
                Call
              </div>
              <div className="tile is-child box notification is-link">
                Website
              </div>
              <div className="tile is-child box notification is-warning">
                Update
              </div>
              <div className="tile is-child box notification is-danger">
                Delete
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p class="subtitle">Mo, Tu, We, Th, Fr</p>
                <p>2 for $20 Entrees</p>
              </div>
            </div>
            <div className="tile is-parent">
              <div class="tile is-child box">
                <p class="subtitle">Su, Mo, Tu, We, Th, Fr, S</p>
                <p>BOGO select drinks!</p>
              </div>
            </div>
            <div class="tile is-parent">
              <img src={GCB} alt="bar" />
            </div>
            <div className="tile is-parent">
              <img src={GCB2} alt="bar" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Details
