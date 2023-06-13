const {callFetch} = require('../javascript/js')

it('doesnt really fetch', async () => {
    const fakeData = { fake: 'data' }

    // global.fetch = jest.fn().mockImplementation(callFetch())

    jest.spyOn(global, "fetch").mockImplementation(callFetch())
  
    const res = await fetch('anyUrl')
    const json = await res.json()
    expect(json).toEqual({ data: fakeData })
  
    global.fetch.mockClear()
  })