import React from 'react'
import { Link } from 'react-router-dom'

import 'bulma/css/bulma.min.css'

export function Bars() {
  return (
    <div>
      <br />
      <div className="container">
        <div className="control has-icons-left">
          <input
            className="input is-rounded"
            type="text"
            placeholder="Search..."
          />
          <span className="icon is small is-left">
            <i className=""></i>
          </span>
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
