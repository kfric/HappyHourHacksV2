import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import { authHeader } from '../auth'

export function EditBar() {
  const params = useParams()
  const id = params.id

  const [newBar, setNewBar] = useState({
    name: '',
    phone: '',
    address: '',
    website: '',
    style: '',
  })

  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    async function fetchRestaurant() {
      const response = await fetch(`/api/Bars/${id}`)

      if (response.ok) {
        const apiData = await response.json()

        setNewBar(apiData)
        setIsLoaded(true)
      }
    }

    fetchRestaurant()
  }, [id])

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateBar = { ...newBar, [fieldName]: value }
    setNewBar(updateBar)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch(`/api/Bars/${id}`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newBar),
    })

    if (response.status === 401) {
      setErrorMsg('Not Authorized')
    } else {
      if (response.ok) {
        history.push('/bars')
      } else {
        const json = await response.json()
        setErrorMsg(Object.values(json.errors).join(' '))
      }
    }
  }

  // If we don't have any restaurant ID, return an empty component
  if (!isLoaded) {
    return <></>
  }

  return (
    <section className="hero is-fullheight">
      <div className="notification is-primary has-text-centered is-size-3">
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
              Edit bar
            </div>
          </li>
        </ul>
      </nav>
      <div className="subtitle has-text-centered has-text-white is-size-3">
        Edit bar
      </div>
      {errorMsg ? (
        <div className="notification is-danger has-text-centered">
          {errorMsg}
        </div>
      ) : null}
      <div className="container is-fluid">
        <div className="hero-body pt-0">
          <div className="container">
            <form onSubmit={handleFormSubmit}>
              <label className="label">
                <div className="has-text-white">Bar name</div>
                <div className="control">
                  <input
                    type="text"
                    placeholder="e.g. Harry's Bar"
                    className="input"
                    value={newBar.name}
                    name="name"
                    onChange={handleStringFieldChange}
                    maxLength={35}
                  />
                </div>
              </label>
              <label className="label">
                <div className="has-text-white">Phone number</div>
                <div className="control">
                  <input
                    type="tel"
                    placeholder="e.g. 111-222-3333"
                    className="input"
                    value={newBar.phone}
                    name="phone"
                    onChange={handleStringFieldChange}
                  />
                </div>
              </label>
              <label className="label">
                <div className="has-text-white">Address</div>
                <div className="control">
                  <input
                    type="text"
                    placeholder="e.g. 123 45th N Somewhere, ST 67890"
                    className="input"
                    value={newBar.address}
                    name="address"
                    onChange={handleStringFieldChange}
                  />
                </div>
              </label>
              <label className="label">
                <div className="has-text-white">Website</div>
                <div className="control">
                  <input
                    type="text"
                    placeholder="e.g. harrysbar@gmail.com"
                    className="input"
                    value={newBar.website}
                    name="website"
                    onChange={handleStringFieldChange}
                  />
                </div>
              </label>
              <label className="label">
                <div className="has-text-white">Style</div>
                <div className="control">
                  <select
                    className="button has-text-left"
                    value={newBar.style}
                    name="style"
                    onChange={handleStringFieldChange}
                  >
                    <option value="American">American</option>
                    <option value="BBQ">BBQ</option>
                    <option value="Brazilian">Brazilian</option>
                    <option value="bar & Grill">bar & Grill</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Food Truck">Food Truck</option>
                    <option value="Kitchen">Kitchen</option>
                    <option value="Korean">Korean</option>
                    <option value="Beer Hall">Beer Hall</option>
                    <option value="Brewery">Brewery</option>
                    <option value="Cocktail Lounge">Cocktail Lounge</option>
                    <option value="Dive Bar">Dive Bar</option>
                    <option value="Hotel Bar">Hotel Bar</option>
                    <option value="Hole in the wall">Hole in the wall</option>
                    <option value="Irish Pub">Irish Pub</option>
                    <option value="Karaoke Bar">Karaoke Bar</option>
                    <option value="Lounge">Lounge</option>
                    <option value="Mexican">Mexican</option>
                    <option value="Music Bar">Music Bar</option>
                    <option value="Night Club">Night Club</option>
                    <option value="Pub">Pub</option>
                    <option value="Sports Bar">Sports Bar</option>
                    <option value="Steak House">Steak House</option>
                    <option value="Wine Bar">Wine Bar</option>
                    <option value="Tavern">Tavern</option>
                    <option value="Tap House">Tap House</option>
                    <option value="Vietnamese">Vietnamese</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </label>
              <div className="field is-grouped mt-4">
                <input
                  type="submit"
                  className="button is-primary"
                  value="Submit"
                />
                <div className="container has-text-right">
                  <Link to="/bars" className="button is-danger">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}