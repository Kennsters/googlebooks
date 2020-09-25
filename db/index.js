//setting up database connection
module.exports = require('mongoose').connect('mongodb://localhost/googlebooks', {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true
})