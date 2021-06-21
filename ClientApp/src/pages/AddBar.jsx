import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function AddBar() {
  const [styleSelection, setStyleSelection] = useState()

  function handleDropDownClick() {
    const navbarMenu = document.querySelector('#drop')
    navbarMenu.classList.toggle('is-active')
  }

  return (
    <div>
      <section className="hero is-fullheight">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
        <div className="subtitle has-text-centered">Add Bar</div>
        <div className="container">
          <div className="hero-body pt-0">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <form action=" className='box">
                    <div className="field">
                      <label className="label">
                        Bar name
                        <div className="control">
                          <input
                            type="text"
                            placeholder="e.g. Harry's Bar"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Address
                        <div className="control">
                          <input
                            type="text"
                            placeholder="e.g. 123 45th N Somewhere, ST 67890"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Phone number
                        <div className="control">
                          <input
                            type="tel"
                            placeholder="e.g. 111-222-3333"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Website
                        <div className="control">
                          <input
                            type="url"
                            placeholder="e.g. harrysbar@gmail.com"
                            className="input"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Bar Style
                        <div className="control">
                          <div className="dropdown" id="drop">
                            <div className="dropdown-trigger">
                              <input
                                onClick={handleDropDownClick}
                                className="button has-text-left"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                placeholder="Select one"
                                value={styleSelection}
                              />
                            </div>
                            <div
                              className="dropdown-menu"
                              id="dropdown-menu"
                              role="menu"
                              required
                            >
                              <div className="dropdown-content">
                                <div
                                  className="dropdown-item"
                                  onClick={function (event) {
                                    setStyleSelection(event.target.value)
                                  }}
                                >
                                  American
                                </div>
                                <div className="dropdown-item">BBQ</div>
                                <div className="dropdown-item">Brazillian</div>
                                <div className="dropdown-item">Bar & Grill</div>
                                <div className="dropdown-item">Chinese</div>
                                <div className="dropdown-item">Food Truck</div>
                                <div className="dropdown-item">Kitchen</div>
                                <div className="dropdown-item">Korean</div>
                                <div className="dropdown-item">Beer Hall</div>
                                <div className="dropdown-item">Brewery</div>
                                <div className="dropdown-item">
                                  Cocktail Lounge
                                </div>
                                <div className="dropdown-item is-active">
                                  Dive Bar
                                </div>
                                <div className="dropdown-item">Hotel Bar</div>
                                <div className="dropdown-item">
                                  Hole in the Wall
                                </div>
                                <div className="dropdown-item">Irish Pub</div>
                                <div className="dropdown-item">karaoke Bar</div>
                                <div className="dropdown-item">Lounge</div>
                                <div className="dropdown-item">Mexican</div>
                                <div className="dropdown-item">Music Bar</div>
                                <div className="dropdown-item">Nightclub</div>
                                <div className="dropdown-item">Pub</div>
                                <div className="dropdown-item">Sports Bar</div>
                                <div className="dropdown-item">Steak House</div>
                                <div className="dropdown-item">Wine Bar</div>
                                <div className="dropdown-item">Tavern</div>
                                <div className="dropdown-item">Tap House</div>
                                <div className="dropdown-item">Vietnamese</div>
                                <hr className="dropdown-divider" />
                                <div className="dropdown-item">Other</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                      <div className="field is-grouped">
                        <div className="container">
                          <button className="button is-primary">Submit</button>
                        </div>
                        <div className="container has-text-right">
                          <Link to="/bars" className="button is-danger">
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AddBar
