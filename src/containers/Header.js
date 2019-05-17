import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote } from '@fortawesome/free-solid-svg-icons'
import './Header.css'

import SearchBar from '../components/SearchBar'

const Header = props => (
  <div className="Header">
    <span className="Header-Logo">
      <span className="Header-Logo-Icon">
        <FontAwesomeIcon icon={faStickyNote} size="3x" />
      </span>
      <span>
        Post-Its
      </span>
    </span>
    <SearchBar />
  </div>
)

export default Header
