const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const reqQuest = {
      items :[
        {"id": 1, "name": "Козлов Иван"},
        {"id": 2, "name": "Степченко Фёдор"}
      ]
  }
  res.send(reqQuest.items);
});

module.exports = router;
