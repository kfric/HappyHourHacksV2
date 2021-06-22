import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import maps from '../images/maps.jpeg'
import GCB from '../images/GCB.jpg'
import GCB2 from '../images/GCB2.jpg'

function navbarClick() {
  const navbarMenu = document.querySelector('#nav-links')
  navbarMenu.classList.toggle('is-active')
}

export function Details() {
  const params = useParams()
  const id = params.id

  const [bar, setBar] = useState({
    name: '',
    phone: '',
    address: '',
    website: '',
    style: '',
    reviews: [],
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

  return (
    <div className="container">
      <div className="column has-background-white-ter is-fixed-top p-5">
        <div className="field is-grouped">
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
              <div className="navbar-start">
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
      <nav className="breadcrumb is-centered mt-4" aria-label="breadcrumbs">
        <ul>
          <li>
            <Link to="/bars">Bars</Link>
          </li>
          <li className="is-active">
            <a href="#" aria-current="page">
              Details
            </a>
          </li>
        </ul>
      </nav>
      <div className="container is-size-4 has-text-centered m-5">
        {/* <Link to="/bars" className="fas fa-chevron-circle-left"></Link> */}
        {bar.name}
        <p className="is-size-6">({bar.reviews.length})</p>
      </div>
      <section className="section is-fullheight pt-0">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent is-8">
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
          <ul className="container is-flex is-flex-wrap-wrap is-justify-content-center">
            {bar.reviews.map((review) => (
              <li className="box has-text-centered m-2">
                <p className="subtitle mb-0">{review.title}</p>
                <p className="is-size-7 has-text-centered mb-3">
                  <span
                    className="stars"
                    style={{ '--rating': review.stars }}
                    ariel-label="Star rating of this location"
                  />
                </p>
                <p className="mb-1">{review.body}</p>
                <p className="is-size-7 has-text-right">
                  {review.creationDate}
                </p>
              </li>
            ))}
            <li className="box has-text-centered m-2">
              <p className="subtitle">Mo, Tu, We, Th, Fr</p>
              <p>2 for $20 Entrees</p>
            </li>
            <li className="box has-text-centered m-2">
              <p className="subtitle">Su, Mo, Tu, We, Th, Fr, S</p>
              <p>BOGO select drinks!</p>
            </li>
            <li className="box has-text-centered m-2">
              <p>+ Deal</p>
            </li>
            <li className="box has-text-centered m-2">
              <Link to="/add-review">
                <p>+ Review</p>
              </Link>
            </li>
            <li>
              <img src={GCB} alt="bar" className="m-2" />
            </li>
            <li>
              <img src={GCB2} alt="bar" className="m-2" />
            </li>
            <li className="box has-text-centered m-2">
              <p>+ img</p>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Details
