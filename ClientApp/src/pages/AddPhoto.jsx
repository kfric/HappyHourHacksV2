import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useDropzone } from 'react-dropzone'

import { authHeader } from '../auth'

export function AddPhoto() {
  const params = useParams()
  const id = params.id

  const [newPhoto, setNewPhoto] = useState({
    title: '',
    url: '',
    barId: id,
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFile,
  })

  const history = useHistory()
  const [errorMsg, setErrorMsg] = useState('')
  const [isUploading, setIsUploading] = useState(false)

  function handleStringFieldChange(event) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateNewPhoto = { ...newPhoto, [fieldName]: value }
    setNewPhoto(updateNewPhoto)
  }

  async function handleFormSubmit(event) {
    event.preventDefault()

    const response = await fetch('/api/Photos', {
      method: 'POST',
      headers: { 'content-type': 'application/json', ...authHeader() },
      body: JSON.stringify(newPhoto),
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

  async function onDropFile(acceptedFiles) {
    // Do something with the files
    const fileToUpload = acceptedFiles[0]
    console.log(fileToUpload)

    setIsUploading(true)

    // Create a formData object so we can send this
    // to the API that is expecting som form data.
    const formData = new FormData()

    // Append a field that is the form upload itself
    formData.append('file', fileToUpload)

    try {
      // Use fetch to send an authorization header and
      // a body containing the form data with the file
      const response = await fetch('/api/Uploads', {
        method: 'POST',
        headers: {
          ...authHeader(),
        },
        body: formData,
      })

      // If we receive a 200 OK response, set the
      // URL of the newPhoto in our state so that it is
      // sent along when creating the restaurant,
      // otherwise show an error
      if (response.ok) {
        const apiResponse = await response.json()

        const url = apiResponse.url

        setNewPhoto({ ...newPhoto, url: url })
      } else {
        setErrorMsg('Unable to upload image')
      }
    } catch {
      // Catch any network errors and show the user we could not process their upload
      setErrorMsg('Unable to upload image')
    }
    setIsUploading(false)
  }

  let dropZoneMessage = 'Drag a picture of the restaurant here to upload!'

  if (isUploading) {
    dropZoneMessage = 'Uploading...'
  }

  if (isDragActive) {
    dropZoneMessage = 'Drop the files here ...'
  }

  return (
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
              Add Photo
            </div>
          </li>
        </ul>
      </nav>
      <div className="subtitle has-text-centered has-text-white is-size-3">
        Add New Photo
      </div>
      {errorMsg ? (
        <div className="notification is-danger">{errorMsg}</div>
      ) : null}
      <div className="container is-fluid">
        <div className="hero-body pt-0">
          <div className="container">
            <form onSubmit={handleFormSubmit}>
              <label className="label">
                <div className="has-text-white">Title</div>
                <div className="control">
                  <input
                    type="text"
                    placeholder="e.g. Draft beers"
                    className="input"
                    name="title"
                    onChange={handleStringFieldChange}
                    value={newPhoto.title}
                    maxLength={35}
                  />
                </div>
              </label>
              <label className="label">
                <div className="has-text-white">New Photo</div>
                <div className="control has-text-centered">
                  {newPhoto.url ? (
                    <p>
                      <img alt="Bar" width={200} src={newPhoto.url} />
                    </p>
                  ) : null}
                  <div className="file-drop-zone uploading-box p-5">
                    <div
                      {...getRootProps()}
                      className="has-text-black is-size-7 has-text-centered"
                    >
                      <input {...getInputProps()} />
                      {dropZoneMessage}
                    </div>
                  </div>
                </div>
              </label>
              <div className="field is-grouped mt-4">
                <input
                  type="submit"
                  className="button is-primary"
                  value="Submit"
                />
                <div className="container has-text-right">
                  <div
                    className="button is-danger"
                    onClick={function () {
                      history.goBack()
                    }}
                  >
                    Cancel
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
