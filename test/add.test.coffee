add = (a, b) ->
  a + b

describe 'add', ->
  it 'figures add up', (done) ->
    assert.equal add(1, 2), 3
    done()
