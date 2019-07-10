const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

const eventsData = require('./responseData/eventsData');
const nurseryFieldsData = require('./responseData/nurseryFields')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

//Add custom routes before JSON Server router
server.get('/data', (req, res) => {
    res.status(200).jsonp({
        code: 200,
        data: eventsData.getEvents,
        error: false,
    });
});

server.get('/data/types', (req, res) => {
    res.status(200).jsonp({
        code: 200,
        data: eventsData.getEventTypes,
        error: false,
    });
});

// POST - Events
server.post('/events', (req, res) => {
    res.status(201).jsonp({
        code: 201,
        error: false,
        message: "Nursery Field Event successfully created."
    });
});

// POST - data Fields
server.post('/data-fields', (req, res) => {
    res.status(201).jsonp({
        code: 201,
        error: false,
        message: "Nursery Field successfully created"
    })
})

server.get('/data-fields', (req, res) => {
    res.status(200).jsonp({
        code: 200,
        data: nurseryFieldsData.getNurseryFields,
        error: false
    })
})

server.get('/data-fields/data-types', (req, res) => {
    res.status(200).jsonp({
        code: 200,
        data: nurseryFieldsData.getNurseryTypes,
        error: false
    })
})


// DELETE - Events
server.delete(`/data/1`, (req, res) => {
    res.status(200).jsonp({
        code: 200,
        error: false,
        message: "Nursery Field Event successfully deleted"
    })
})

// DELETE - Nursery Fields
server.delete(`/data-fields/1`, (req, res) => {
    res.status(200).jsonp({
        code: 200,
        error: false,
        message: "Nursery Field successfully deleted"
    })
})


// Use default router
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})
