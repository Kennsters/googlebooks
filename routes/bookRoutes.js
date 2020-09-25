const router = require('express').Router()
const { Book } = require('../models')

// "title": "The Hunger Games",
//         "authors": "Suzanne Collins",
//         "description": "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature.",
//         "image": "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
//         "link": "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"

router.get('/books', (req, res) => {
    Book.find()
        .then(book => res.json(book))
        .catch(err => console.log(err))
})

router.post('/books', (req, res) => {
    Book.create(req.body)
        .then(book => res.json(book))
        .catch(err => console.log(err))
})

router.put('/books/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json(book))
        .catch(err => console.log(err))
})

router.delete('/books/:id', (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove())
        .then(book => res.json(book))
        .catch(err => console.log(err))
})

module.exports = router