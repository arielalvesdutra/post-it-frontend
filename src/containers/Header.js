import React from 'react'
import './Header.css'

import SearchBar from '../components/SearchBar/SearchBar'
import HeaderLogo from '../components/HeaderLogo/HeaderLogo'

const Header = props => (
  <header className="header">
    <HeaderLogo />
    <SearchBar />
  </header>
)

export default Header
