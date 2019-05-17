import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css'

const SearchBar = () => (
  <div className="SearchBar">
    <span className="SearchBar-Input">
      <input type="text" name="search"
        className="Search-Input" placeholder="Pesquisar..." />
    </span>
    <span className="SearchBar-Button ">
      <button className="Search-Button">
        <FontAwesomeIcon icon={faSearch}  size="1x"/>
      </button>
    </span>
  </div>
)

export default SearchBar
