import { buildQueryString } from './query-string-builder'


describe('Helpers: query-string-builder', () => {

  test('empty filter should return empty string', () => {

    const queryString = buildQueryString('')

    expect(queryString).toBe('')
  })

  test('filter should have name query', () => {

    const queryString = buildQueryString({ name: 'Geralt'})

    expect(queryString).toBe('?name=Geralt')
  })

  test('filter should have name and active query', () => {

    const queryString = buildQueryString({ name: 'Geralt', active: true })

    expect(queryString).toBe('?active=true&name=Geralt')
  })

})
