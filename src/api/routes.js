// API routes for exchange simulator
const express = require('express');
const router = express.Router();

router.get('/orderbook', (req, res) => {
  res.json({ buy: [], sell: [] });
});

router.post('/order', (req, res) => {
  res.json({ status: 'placed' });
});

module.exports = router;
Update 4 on 2014-04-13 22:17:56
Update 7 on 2014-04-13 01:08:28
Update 15 on 2014-04-15 01:12:31
Update 18 on 2014-04-16 13:38:00
Update 20 on 2014-04-16 02:45:38
Update 32 on 2014-04-23 20:00:49
Update 36 on 2014-04-23 00:09:23
Update 39 on 2014-04-24 18:19:02
