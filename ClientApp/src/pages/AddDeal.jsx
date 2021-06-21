import React from 'react'
import { Link } from 'react-router-dom'

export function AddDeal() {
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
        <div className="subtitle has-text-centered">Add Deal</div>
        <div className="container">
          <div className="hero-body pt-0">
            <div className="container">
              <div className="columns is-centered">
                <div className="column">
                  <form action=" className='box">
                    <div className="field">
                      <label className="label">
                        Deal details
                        <div className="control">
                          <textarea
                            type="text"
                            placeholder="e.g. Harry's Bar"
                            className="input has-height-0"
                            required
                          />
                        </div>
                      </label>
                      <label className="label">
                        Days(s)
                        <div className="control">
                          <div className="field is-grouped">
                            <div className="column-2">
                              Su
                              <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="column-2">
                              Mo
                              <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="column-2">
                              Tu
                              <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="column-2">
                              We
                              <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="column-2">
                              Th
                              <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="column-2">
                              Fr
                              <input type="checkbox" className="checkbox" />
                            </div>
                            <div className="column-2">
                              S
                              <input type="checkbox" className="checkbox" />
                            </div>
                          </div>
                        </div>
                      </label>
                      <label className="label">
                        From
                        <div className="control">
                          <div className="dropdown" id="drop">
                            <div className="dropdown-trigger">
                              <input
                                onClick={handleDropDownClick}
                                className="button has-text-left"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                placeholder="Select one"
                              />
                            </div>
                            <div
                              className="dropdown-menu"
                              id="dropdown-menu"
                              role="menu"
                              required
                            >
                              <div className="dropdown-content">
                                <div className="dropdown-item">12pm</div>
                                <div className="dropdown-item">1pm</div>
                                <div className="dropdown-item">2pm</div>
                                <div className="dropdown-item">3pm</div>
                                <div className="dropdown-item">4pm</div>
                                <div className="dropdown-item">5pm</div>
                                <div className="dropdown-item">6pm</div>
                                <div className="dropdown-item">7pm</div>
                                <div className="dropdown-item">8pm</div>
                                <div className="dropdown-item">9pm</div>
                                <div className="dropdown-item">10pm</div>
                                <div className="dropdown-item">11pm</div>
                                <div className="dropdown-item">12am</div>
                                <div className="dropdown-item">1am</div>
                                <div className="dropdown-item">2am</div>
                                <div className="dropdown-item">3am</div>
                                <div className="dropdown-item">4am</div>
                                <div className="dropdown-item">5am</div>
                                <div className="dropdown-item">6am</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </label>
                      <label className="label">
                        To
                        <div className="control">
                          <div className="dropdown" id="drop">
                            <div className="dropdown-trigger">
                              <input
                                onClick={handleDropDownClick}
                                className="button has-text-left"
                                aria-haspopup="true"
                                aria-controls="dropdown-menu"
                                placeholder="Select one"
                              />
                            </div>
                            <div
                              className="dropdown-menu"
                              id="dropdown-menu"
                              role="menu"
                              required
                            >
                              <div className="dropdown-content">
                                <div className="dropdown-item">12pm</div>
                                <div className="dropdown-item">1pm</div>
                                <div className="dropdown-item">2pm</div>
                                <div className="dropdown-item">3pm</div>
                                <div className="dropdown-item">4pm</div>
                                <div className="dropdown-item">5pm</div>
                                <div className="dropdown-item">6pm</div>
                                <div className="dropdown-item">7pm</div>
                                <div className="dropdown-item">8pm</div>
                                <div className="dropdown-item">9pm</div>
                                <div className="dropdown-item">10pm</div>
                                <div className="dropdown-item">11pm</div>
                                <div className="dropdown-item">12am</div>
                                <div className="dropdown-item">1am</div>
                                <div className="dropdown-item">2am</div>
                                <div className="dropdown-item">3am</div>
                                <div className="dropdown-item">4am</div>
                                <div className="dropdown-item">5am</div>
                                <div className="dropdown-item">6am</div>
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
