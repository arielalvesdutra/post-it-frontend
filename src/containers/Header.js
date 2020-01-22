import React from 'react'
import './Header.css'

import SearchBar from '../components/SearchBar'
import HeaderLogo from '../components/HeaderLogo'

const Header = props => (
  <header className="header">
    <HeaderLogo />
    <SearchBar />
  </header>
)

export default Header
