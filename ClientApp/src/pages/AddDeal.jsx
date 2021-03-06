import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { authHeader } from '../auth'

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
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newDeal),
    })

    if (response.status === 401) {
      setErrorMsg('Not Authorized')
    } else {
      if (response.ok) {
        history.goBack()
      } else {
        const json = await response.json()
        setErrorMsg(Object.values(json.errors).join(' '))
      }
    }
  }

  return (
    <div>
      <section className="hero is-fullheight">
        <div className="hero is-primary has-text-centered is-size-1 has-text-weight-bold p-5 is-family-secondary">
          Happy Hour Hacks
        </div>
        <nav className="breadcrumb is-centered mt-5" aria-label="breadcrumbs">
          <ul>
            <li>
              <div
                className="link mr-4"
                onClick={function () {
                  history.goBack()
                }}
              >
                Bars
              </div>
            </li>
            <li className="is-active">
              <div aria-current="page" className="has-text-white ml-4">
                Add deal
              </div>
            </li>
          </ul>
        </nav>
        <div className="subtitle has-text-centered has-text-white is-size-3">
          Add deal
        </div>
        {errorMsg ? (
          <div className="notification is-danger">{errorMsg}</div>
        ) : null}
        <div className="container is-fluid">
          <div className="hero-body pt-0">
            <div className="container">
              <form onSubmit={handleFormSubmit}>
                <label className="label">
                  <div className="has-text-white">Details</div>
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
                    <div className="is-flex is-justify-content-center has-text-white">
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
                    <div className="is-flex is-justify-content-center has-text-white">
                      End
                    </div>
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
                      <div className="daysOfTheWeek is-flex">Su</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="sunday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="daysOfTheWeek is-flex-direction-column">
                      <div>Mo</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="monday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="daysOfTheWeek is-flex-direction-column">
                      <div>Tu</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="tuesday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="daysOfTheWeek is-flex-direction-column">
                      <div>We</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="wednesday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="daysOfTheWeek is-flex-direction-column">
                      <div>Th</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="thursday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="daysOfTheWeek is-flex-direction-column">
                      <div>Fr</div>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name="friday"
                        onClick={handleCheckBoxClick}
                      />
                    </div>
                    <div className="daysOfTheWeek is-flex-direction-column">
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
                  <div
                    className="button is-danger"
                    onClick={function () {
                      history.goBack()
                    }}
                  >
                    Cancel
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
