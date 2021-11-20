const router = require('express').Router();

const apiRoutes = require('./api');

// when homepage routes need to be made
// const homeRoutes = require('./home-routes.js');
// router.use('/', homeRoutes);

router.use('/api', apiRoutes);

module.exports = router;