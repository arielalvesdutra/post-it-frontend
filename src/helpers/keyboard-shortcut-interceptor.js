const titleInput = {
  id: 'title',
  shortcut: 'd',
  focus: function() { document.getElementById(this.id).focus()},
  isShortcutEvent: function ({ event, isCaseSensitive = false}) {
    if (isCaseSensitive) 
    return event.ctrlKey && this.shortcut === event.key
  return event.ctrlKey && this.shortcut === event.key.toLowerCase()
  }
}

const searchTitleInput = {
  id: 'search-title',
  shortcut: 'e',
  focus: function() { document.getElementById(this.id).focus()},
  isShortcutEvent: function ({ event, isCaseSensitive = false}) {
    if (isCaseSensitive) 
    return event.ctrlKey && this.shortcut === event.key
  return event.ctrlKey && this.shortcut === event.key.toLowerCase()
  }
}

const preventUnwantedControlKeyDownEvents = () => {
  document.addEventListener('keydown', event => {
    if (searchTitleInput.isShortcutEvent({event}) 
          || titleInput.isShortcutEvent({event})) {
      event.preventDefault()
    }
  })
}

const captureWantedKeyDownEvents = () => {
  document.addEventListener('keydown', (event) => {
    if (titleInput.isShortcutEvent({event})) {
      titleInput.focus()
      return
    }

    if (searchTitleInput.isShortcutEvent({event})) {
      searchTitleInput.focus()
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
