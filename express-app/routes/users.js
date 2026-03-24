let users = [
    {"id": 1, "name": "Козлов Иван"},
    {"id": 2, "name": "Степченко Фёдор"}
]
let next_id = 3

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const reqQuest = {
      items :users
  }
  res.send(reqQuest.items);
});

router.post('/', function(req, res, next) {
    const newUser = req.body;
    newUser.id = next_id;
    next_id++;
    users.push(newUser);
    res.status(201).json(newUser);
})

module.exports = router;
