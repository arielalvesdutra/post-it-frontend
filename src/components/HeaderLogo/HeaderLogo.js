import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'

import './HeaderLogo.css'

const HeaderLogo = () => {
  return (
    <section className="headerLogo">
      <span className="headerLogo__icon">
        <FontAwesomeIcon icon={faStickyNote} size="3x" />
      </span>
      <span>
        Post-Its
      </span>
    </section>
  )
}

export default HeaderLogo
