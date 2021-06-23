import id from 'date-fns/esm/locale/id/index.js'
import React, { useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'

export function AddDeal() {
  const params = useParams()
  const id = params.id

  const [newDeal, setNewDeal] = useState({
    details: '',
    start: '',
    end: '',
    sunday: false,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false,
    saturday: false,
    barId: id,
  })

  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateDeal = { ...newDeal, [fieldName]: value }
    setNewDeal(updateDeal)
  }

  function handleCheckBoxClick(event) {
    const value = event.target.checked
    const fieldName = event.target.name
    const updateDeal = { ...newDeal, [fieldName]: value }
    setNewDeal(updateDeal)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Deals', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newDeal),
    })

    if (response.ok) {
      history.goBack()
    } else {
      const json = await response.json()
      setErrorMsg(Object.values(json.errors).join(' '))
    }
  }

  return (
    <div>
      <section className="hero is-fullheight">
        <div className="notification is-primary has-text-centered is-size-3">
          Happy Hour Hacks
        </div>
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/bars">Bars</Link>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                Add deal
              </a>
            </li>
          </ul>
        </nav>
        <div className="subtitle has-text-centered">Add deal</div>
        {errorMsg ? (
          <div className="notification is-danger">{errorMsg}</div>
        ) : null}
        <div className="container is-fluid">
          <div className="hero-body pt-0">
            <div className="container">
              <form onSubmit={handleFormSubmit}>
                <label className="label">
                  Details
                  <div className="control">
                    <textarea
                      className="textarea"
                      placeholder="e.g. BOGO drinks!"
                      value={newDeal.details}
                      name="details"
                      onChange={handleStringFieldChange}
                    />
                  </div>
                </label>
                <div className="field is-grouped is-flex is-justify-content-space-evenly mt-4">
                  <label className="label is-flex-direction-column">
                    <div className="is-flex is-justify-content-center">
                      Start
                    </div>
                    <div className="control ml-4">
                      <select
                        className="button has-text-left"
                        value={newDeal.start}
                        name="start"
                        onChange={handleStringFieldChange}
                      >
                        <option value="12pm">12pm</option>
                        <option value="1pm">1pm</option>
                        <option value="2pm">2pm</option>
                        <option value="3pm">3pm</option>
                        <option value="4pm">4pm</option>
                        <option value="5pm">5pm</option>
                        <option value="6pm">6pm</option>
                        <option value="7pm">7pm</option>
                        <option value="8pm">8pm</option>
                        <option value="9pm">9pm</option>
                        <option value="10pm">10pm</option>
                        <option value="11pm">11pm</option>
                        <option value="12am">12am</option>
                        <option value="1am">1am</option>
                        <option value="2am">2am</option>
                        <option value="3am">3am</option>
                        <option value="4am">4am</option>
                        <option value="5am">5am</option>
                        <option value="6am">6am</option>
                      </select>
                    </div>
                  </label>
                  <label className="label is-flex-direction-column">
                    <div className="is-flex is-justify-content-center">End</div>
                    <div className="control ml-4">
                      <select
                        className="button"
                        value={newDeal.end}
                        name="end"
                        onChange={handleStringFieldChange}
                      >
                        <option value="12pm">12pm</option>
                        <option value="1pm">1pm</option>
                        <option value="2pm">2pm</option>
                        <option value="3pm">3pm</option>
                        <option value="4pm">4pm</option>
                        <option value="5pm">5pm</option>
                        <option value="6pm">6pm</option>
                        <option value="7pm">7pm</option>
                        <option value="8pm">8pm</option>
                        <option value="9pm">9pm</option>
                        <option value="10pm">10pm</option>
                        <option value="11pm">11pm</option>
                        <option value="12am">12am</option>
                        <option value="1am">1am</option>
                        <option value="2am">2am</option>
                        <option value="3am">3am</option>
                        <option value="4am">4am</option>
                        <option value="5am">5am</option>
                        <option value="6am">6am</option>
                      </select>
                    </div>
                  </label>
                </div>
                <label className="label">
                  <div className="field is-flex is-justify-content-space-evenly my-4">
                    <div className="label is-flex-direction-column">
                      <div className="is-flex">Su</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="sunday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="is-flex-direction-column">
                      <div>Mo</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="monday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="is-flex-direction-column">
                      <div>Tu</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="tuesday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="is-flex-direction-column">
                      <div>We</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="wednesday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="is-flex-direction-column">
                      <div>Th</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="thursday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="is-flex-direction-column">
                      <div>Fr</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="friday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="is-flex-direction-column">
                      <div>Sa</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="saturday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                  </div>
                </label>
                <div className="field is-flex is-justify-content-space-evenly">
                  <input
                    type="submit"
                    className="button is-primary"
                    value="Submit"
                  />
                  <Link to="/bars" className="button is-danger">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
