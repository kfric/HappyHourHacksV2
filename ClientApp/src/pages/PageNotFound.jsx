import React from 'react'

export function PageNotFound() {
  function handleDropDownClick() {
    const navbarMenu = document.querySelector('#drop')
    navbarMenu.classList.toggle('is-active')
  }

  return (
    <div class="dropdown" id="drop">
      <div class="dropdown-trigger">
        <button
          onClick={handleDropDownClick}
          class="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Dropdown button</span>
          <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
          <a href="#" class="dropdown-item">
            Dropdown item
          </a>
          <a class="dropdown-item">Other dropdown item</a>
          <a href="#" class="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" class="dropdown-item">
            Other dropdown item
          </a>
          <hr class="dropdown-divider" />
          <a href="#" class="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>
  )
}
