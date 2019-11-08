import React, { Component } from 'react'
import { connect } from 'react-redux'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import './SearchBar.css'
import { searchPostIts } from '../redux/actions/post-its';

class SearchBar extends Component {

  handleSubmit = event => {
    event.preventDefault()
    const title = event.target.title.value
    this.props.onSearch(title)
  }

  render() {

    return (
      <form className="SearchBar-Form" onSubmit={this.handleSubmit}>
        <div className="SearchBar">
          <span className="SearchBar-Input">
            <input type="text" name="title" id="search" className="Search-Input" 
              title="Pesquise pelo título. Atalho: Crtl+e"  
              placeholder="Pesquisar pelo título..." />
          </span>
          <span className="SearchBar-Button ">
            <button className="Search-Button">
              <FontAwesomeIcon icon={faSearch} size="1x" />
            </button>
          </span>
        </div>
      </form>
    )
  }
}

const mapToDispatch = dispatch => {
  return {
    onSearch: (title) => dispatch(searchPostIts(title))
  }
}

export default connect(null, mapToDispatch)(SearchBar)
