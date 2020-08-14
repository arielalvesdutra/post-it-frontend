const shortcutKeys = {
  TITLE_INPUT: 'd',
  SEARCH_INPUT: 'e'
}

const focusOnTitleInput = () => {
  document.getElementById("title").focus()
}

const focusOnSearchTitleInput = () => {
  document.getElementById("search-title").focus()
}

const isSearchTitleShortcutEvent = event => {
  return event.ctrlKey && shortcutKeys.SEARCH_INPUT === event.key
}

const isTitleShortcutEvent = event => {
  return event.ctrlKey && shortcutKeys.TITLE_INPUT === event.key
}

const preventUnwantedControlKeyDownEvents = () => {
  document.addEventListener('keydown', event => {
    if (isSearchTitleShortcutEvent(event) || isTitleShortcutEvent(event)) {
      event.preventDefault()
    }
  })
}

const captureWantedKeyDownEvents = () => {
  document.addEventListener('keydown', (event) => {
    if (isTitleShortcutEvent(event)) {
      focusOnTitleInput()
      return
    }

    if (isSearchTitleShortcutEvent(event)) {
      focusOnSearchTitleInput()
      return
    }
  })
}

const KeyboardShortcutInterceptor = {

  captureShortcutEvents: () => {
    preventUnwantedControlKeyDownEvents()
    captureWantedKeyDownEvents()
  }
}

export default KeyboardShortcutInterceptor
