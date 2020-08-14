import React from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import './SearchBar.css'
import { fetchPostIts } from '../redux/actions/postItsActions';

/**
 * FOCUS something....
 */
const ShortcutEventCapturer = ({ inputId, keyboard, caseSensitive }) => {

}

const SearchBar = (props) => {
  const { onFetchPostIts } = props

  const keyboardShortcut = () => {

    const someInput = {
      id: 'title',
      focus: () => {},
      shortcut: {
        keyboard: '',
        caseSensitive: false
      }
    }
    /**
     * ### Options to capture the keydown
     */
  }

  function onSubmitSearchForm(event) {
    event.preventDefault()
    const title = event.target.title.value
    const description = event.target.description.value
    onFetchPostIts({ title, description})    
  }

  return (
    <section className="searchBar">
      <form onSubmit={onSubmitSearchForm} className="searchBar__form">
        <span className="searchBar__inputSpan">
          <input type="text" name="title" id="search-title" 
              className="searchBar__input"
              placeholder="Pesquisar pelo título..." 
              title="Pesquise pelo o título. Atalho: Crtl + E"/>
        </span>
        <span className="searchBar__inputSpan">
          <input type="text" name="description" id="search-description"
              className="searchBar__input"
              placeholder="Pesquisar pela descrição..."/>
        </span>
        <span className="searchBar__buttonSpan">
          <button className="searchBar__button">
            <FontAwesomeIcon icon={faSearch} size="1x" />
          </button>
         </span> 
      </form>
    </section>
  )
}

const mapToDispatch = dispatch => {
  return {
    onFetchPostIts: (filters) => dispatch(fetchPostIts(filters))
  }
}

export default connect(null, mapToDispatch)(SearchBar)
