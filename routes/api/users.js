const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
router.get('/pokemon', checkAuth, usersCtrl.index);
router.post('/pokemon', checkAuth, usersCtrl.create);
router.delete('/pokemon/:id', checkAuth, usersCtrl.dlte);


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
	if (req.user) return next();
	return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;