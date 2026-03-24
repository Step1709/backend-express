const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('mydb.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name text)`);

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.all("SELECT id, name FROM users", [], (err, rows) => {
        if (err) {
            console.log(err);
        } else {
            res.send(rows);
        }
    });
});

router.post('/', function(req, res, next) {
    const newUser = req.body;
    const insert = "INSERT INTO users (name) VALUES (?)";
    db.run(insert, [newUser.name]);
    res.status(201).json(newUser);
})

router.get('/:id', function(req, res, next)  {
    if (req.params.id <= users.length) {
        res.send(users[req.params.id - 1]);
    }
    else{
        res.status(404).send('Not Found');
    }
})

module.exports = router;
