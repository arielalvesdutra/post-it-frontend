import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { renderWithRedux } from '../../test/test-utils'
import IndexPage from './IndexPage'

describe('Pages: IndexPage', () => {
  
  test('render should work', () => {
    const { getByText, debug, container } =  renderWithRedux(<IndexPage />)

    expect(getByText('Cadastrar Post-It')).toBeInTheDocument()
    expect(container.querySelector('.listPostIts')).toBeInTheDocument()
  })
    
})
