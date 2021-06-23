import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function AddDeal() {
  const [newDeal, setNewDeal] = useState({
    name: '',
    phone: '',
    address: '',
    website: '',
    style: '',
  })
  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateDeal = { ...newDeal, [fieldName]: value }
    setNewDeal(updateDeal)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Bars', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newDeal),
    })

    if (response.ok) {
      history.push('bars')
    } else {
      const json = await response.json()
      setErrorMsg(Object.values(json.errors).join(' '))
    }
  }

  return (
    // <div>
    //   <section className="hero is-fullheight">
    //     <div className="notification is-primary has-text-centered is-size-3">
    //       Happy Hour Hacks
    //     </div>
    //     <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
    //       <ul>
    //         <li>
    //           <Link to="/bars">Bars</Link>
    //         </li>
    //         <li className="is-active">
    //           <a href="#" aria-current="page">
    //             Add deal
    //           </a>
    //         </li>
    //       </ul>
    //     </nav>
    //     <div className="subtitle has-text-centered">Add bar</div>
    //     {errorMsg ? (
    //       <div className="notification is-danger">{errorMsg}</div>
    //     ) : null}
    //     <div className="container is-fluid">
    //       <div className="hero-body pt-0">
    //         <div className="container">
    //           {/* <div className="columns is-centered"> */}
    //           {/* <div className="column"> */}
    //           <form>
    //             {/* <div className="field"> */}
    //             <label className="label">
    //               Deal details
    //               <div className="control">
    //                 <input
    //                   type="text"
    //                   placeholder="e.g. BOGO wells"
    //                   className="input"
    //                   name="details"
    //                 />
    //               </div>
    //             </label>
    //             <label className="label">
    //               Days(s)
    //               <div className="control">
    //                 <div className="field is-grouped">
    //                   <div className="column-2">
    //                     Su
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                   <div className="column-2">
    //                     Mo
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                   <div className="column-2">
    //                     Tu
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                   <div className="column-2">
    //                     We
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                   <div className="column-2">
    //                     Th
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                   <div className="column-2">
    //                     Fr
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                   <div className="column-2">
    //                     S
    //                     <input type="checkbox" className="checkbox" />
    //                   </div>
    //                 </div>
    //               </div>
    //             </label>
    //             <label className="label">
    //               From
    //               <div className="control">
    //                 <div className="dropdown" id="drop">
    //                   <div className="dropdown-trigger">
    //                     <input
    //                       onClick={handleDropDownClick}
    //                       className="button has-text-left"
    //                       aria-haspopup="true"
    //                       aria-controls="dropdown-menu"
    //                       placeholder="Select one"
    //                     />
    //                   </div>
    //                   <div
    //                     className="dropdown-menu"
    //                     id="dropdown-menu"
    //                     role="menu"
    //                     // required
    //                   >
    //                     <div className="dropdown-content">
    //                       <div className="dropdown-item">12pm</div>
    //                       <div className="dropdown-item">1pm</div>
    //                       <div className="dropdown-item">2pm</div>
    //                       <div className="dropdown-item">3pm</div>
    //                       <div className="dropdown-item">4pm</div>
    //                       <div className="dropdown-item">5pm</div>
    //                       <div className="dropdown-item">6pm</div>
    //                       <div className="dropdown-item">7pm</div>
    //                       <div className="dropdown-item">8pm</div>
    //                       <div className="dropdown-item">9pm</div>
    //                       <div className="dropdown-item">10pm</div>
    //                       <div className="dropdown-item">11pm</div>
    //                       <div className="dropdown-item">12am</div>
    //                       <div className="dropdown-item">1am</div>
    //                       <div className="dropdown-item">2am</div>
    //                       <div className="dropdown-item">3am</div>
    //                       <div className="dropdown-item">4am</div>
    //                       <div className="dropdown-item">5am</div>
    //                       <div className="dropdown-item">6am</div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </label>
    //             <label className="label">
    //               To
    //               <div className="control">
    //                 <div className="dropdown" id="drop">
    //                   <div className="dropdown-trigger">
    //                     <input
    //                       onClick={handleDropDownClick}
    //                       className="button has-text-left"
    //                       aria-haspopup="true"
    //                       aria-controls="dropdown-menu"
    //                       placeholder="Select one"
    //                     />
    //                   </div>
    //                   <div
    //                     className="dropdown-menu"
    //                     id="dropdown-menu"
    //                     role="menu"
    //                     // required
    //                   >
    //                     <div className="dropdown-content">
    //                       <div className="dropdown-item">12pm</div>
    //                       <div className="dropdown-item">1pm</div>
    //                       <div className="dropdown-item">2pm</div>
    //                       <div className="dropdown-item">3pm</div>
    //                       <div className="dropdown-item">4pm</div>
    //                       <div className="dropdown-item">5pm</div>
    //                       <div className="dropdown-item">6pm</div>
    //                       <div className="dropdown-item">7pm</div>
    //                       <div className="dropdown-item">8pm</div>
    //                       <div className="dropdown-item">9pm</div>
    //                       <div className="dropdown-item">10pm</div>
    //                       <div className="dropdown-item">11pm</div>
    //                       <div className="dropdown-item">12am</div>
    //                       <div className="dropdown-item">1am</div>
    //                       <div className="dropdown-item">2am</div>
    //                       <div className="dropdown-item">3am</div>
    //                       <div className="dropdown-item">4am</div>
    //                       <div className="dropdown-item">5am</div>
    //                       <div className="dropdown-item">6am</div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </label>
    //             <div className="field is-grouped">
    //               <div className="container">
    //                 <button className="button is-primary">Submit</button>
    //               </div>
    //               <div className="container has-text-right">
    //                 <Link to="/bars" className="button is-danger">
    //                   Cancel
    //                 </Link>
    //               </div>
    //             </div>
    //             {/* </div> */}
    //           </form>
    //           {/* </div>
    //           </div> */}
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
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
                Add bar
              </a>
            </li>
          </ul>
        </nav>
        <div className="subtitle has-text-centered">Add bar</div>
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
                      placeholder="e.g. Harry's Bar"
                      value={newDeal.name}
                      name="name"
                      onChange={handleStringFieldChange}
                    />
                  </div>
                </label>
                <div className="field is-grouped is-flex is-justify-content-center is-justify-content-space-evenly m-5">
                  <label className="label is-flex is-align-items-center">
                    <div>Start</div>
                    <div className="control ml-4">
                      <select
                        className="button has-text-left"
                        value={newDeal.style}
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
                  <label className="label is-flex is-align-items-center">
                    <div>End</div>
                    <div className="control ml-4">
                      <select
                        className="button has-text-left"
                        value={newDeal.style}
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
                </div>
                <div className="field is-grouped">
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
    </div>
  )
}
