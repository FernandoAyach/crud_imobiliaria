const express = require('express')
const router = express.Router()

const connection = require('./database/db')

router.get('/', (req, res) => {
    connection.query('SELECT * FROM imobiliaria', (error, results) => {
        //console.log(results);
        if (error) {
            throw error
        } else {
            res.render('index', {results:results.rows})
        }
    })
})

router.get('/create', (req, res) => {
    res.render('create')
})

router.get('/edit/:id', (req, res) => {
    const id = req.params.id

    connection.query('SELECT * FROM imobiliaria WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        } else {
            res.render('edit', {user:results.rows[0]})
        }
    })
})

router.get('/delete/:id', (req, res) => {
    const id = req.params.id

    connection.query('DELETE FROM imobiliaria WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        } else {
            res.redirect('/')
        }
    })
})

const crud = require('./controllers/crud')
router.post('/save', crud.save)
router.post('/update', crud.update)

module.exports = router