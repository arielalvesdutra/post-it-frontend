import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { initialState as initialStateParam } from '../redux/reducers/postItsReducer'
import  storeParam from '../redux/store'


function renderWithRedux(
  ui, { initialState = initialStateParam, store = storeParam, ...renderOptions  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { renderWithRedux }
