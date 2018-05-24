
const _ = require('lodash')
const fp = require('lodash/fp')

const get = field => obj => obj[field] // fp.get
const map = fn => data => data.map(fn) // fp.map
const getIdsFromArray = map(get('id')) // fp.map(fp.get('id'))

// retrieve :: object -> () -> Promise([])
const retrieve = model => () => model.find()
const create = model => (data) => model.create(data)
const update = model => criteria => data => model.update(criteria, data)
const retrieveIds = model => () => model.find().then(getIdsFromArray)

const buildRepo = model => ({
        retrieve: retrieve(model),
        create: create(model),
        update: update(model),
        retrieveIds: retrieveIds(model)
})

module.exports = {
    retrieve,
    create,
    update,
    retrieveIds,
    buildRepo
}