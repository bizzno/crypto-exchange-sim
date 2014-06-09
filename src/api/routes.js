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
Update 41 on 2014-04-24 18:28:19
Update 47 on 2014-04-24 08:50:19
Update 55 on 2014-04-29 19:06:20
Update 56 on 2014-04-29 13:03:10
Update 63 on 2014-05-01 20:37:42
Update 65 on 2014-05-01 11:34:41
Update 66 on 2014-05-01 03:20:04
Update 76 on 2014-05-05 04:22:41
Update 82 on 2014-05-05 09:16:24
Update 85 on 2014-05-08 12:47:35
Update 89 on 2014-05-08 23:31:22
Update 102 on 2014-05-09 14:25:01
Update 104 on 2014-05-09 06:33:55
Update 107 on 2014-05-09 03:25:16
Update 108 on 2014-05-12 01:39:58
Update 109 on 2014-05-12 01:21:13
Update 110 on 2014-05-12 07:22:07
Update 112 on 2014-05-21 14:09:52
Update 114 on 2014-05-21 03:40:58
Update 120 on 2014-05-27 10:30:27
Update 121 on 2014-05-27 19:16:40
Update 124 on 2014-05-27 05:09:41
Update 126 on 2014-05-27 20:38:10
Update 132 on 2014-05-27 11:38:25
Update 136 on 2014-05-29 06:12:30
Update 143 on 2014-06-04 00:17:46
Update 144 on 2014-06-04 12:38:09
Update 155 on 2014-06-09 14:51:48
Update 159 on 2014-06-09 01:52:17
Update 160 on 2014-06-09 21:01:06
Update 161 on 2014-06-09 14:52:38
Update 165 on 2014-06-09 23:35:18
