const test = require('tape')
const _ = require('lodash')
const genericRepositoryModule = require('./genericRepository')
const {retrieve: retrieveFn} = require('./genericRepository') //Option 2

let mockModel = {
    find: () => new Promise((resolve, reject) => resolve([{id: 10, message: 'xxxxx'}, {id: 20, message: 'yyyyyy'}]))
}
let repo = genericRepositoryModule.buildRepo(mockModel)

test('retrieve must returns an array of records', assert => {
    retrieveFn(mockModel)()
        .then(data => {
            assert.equal(true, Array.isArray(data), 'retrieve function must return an array')
        })

    assert.end()
})

test('retrieveIds must returns an array of ids', assert => {
    let expectedIds = [10, 20]
    repo.retrieveIds()
        .then(data => {
            assert.equal(true, Array.isArray(data), 'retrieveIds function must return an array')
            assert.equal(true, _.isEqual(expectedIds, data), 'data must be equals to expected ids')
        })

    assert.end()
})
