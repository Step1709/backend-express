let users = [
    {"id": 1, "name": "Козлов Иван"},
    {"id": 2, "name": "Степченко Фёдор"}
]

const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const reqQuest = {
      items :users
  }
  res.send(reqQuest.items);
});

router.get('/:id', function(req, res, next)  {
    if (req.params.id <= users.length) {
        res.send(users[req.params.id - 1]);
    }
    else{
        res.status(404).send('Not Found');
    }
})

module.exports = router;
