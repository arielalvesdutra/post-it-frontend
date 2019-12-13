const TITLE_INPUT_SHORTCUT_KEY = 'd'
const SEARCH_INPUT_SHORTCUT_KEY = 'e'

const focusOnTitleInput = () => {
  document.getElementById("title").focus()
}

const focusOnSearchInput = () => {
  document.getElementById("search").focus()
}

const isSearchShortcutEvent = event => {
  return event.ctrlKey && SEARCH_INPUT_SHORTCUT_KEY === event.key
}

const isTitleShortcutEvent = event => {
  return event.ctrlKey && TITLE_INPUT_SHORTCUT_KEY === event.key
}

const preventUnwantedControlKeyDownEvents = () => {
  document.addEventListener('keydown', event => {
    if (isSearchShortcutEvent(event) || isTitleShortcutEvent(event)) {
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

    if (isSearchShortcutEvent(event)) {
      focusOnSearchInput()
      return
    }
  })
}

const KeyboardShortcutInterptor = {

  caputureShortcutEvents: () => {
    preventUnwantedControlKeyDownEvents()
    captureWantedKeyDownEvents()
  }
}

export default KeyboardShortcutInterptor