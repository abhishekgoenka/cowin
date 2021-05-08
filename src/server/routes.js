const express = require('express');
const router = express.Router();

const cowinService = require('./cowin.service');

router.get('/centers', (req, res) => {
  cowinService.getCenters(req, res);
});

// router.post('/hero', (req, res) => {
//   heroService.postHero(req, res);
// });

// router.put('/hero/:id', (req, res) => {
//   heroService.putHero(req, res);
// });

// router.delete('/hero/:id', (req, res) => {
//   heroService.deleteHero(req, res);
// });

module.exports = router;