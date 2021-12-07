var express = require('express');
var router = express.Router();


// Require the controller that exports
// the todo CRUD functions
const skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET "/skills" - Index Route
router.get('/', skillsCtrl.index);

// GET Request, path is -> "/skills/new" - New Route 
router.get('/new', skillsCtrl.new);


// GET "/todos/:id" - Show Route
router.get('/:id', skillsCtrl.show);

// POST request -> "/skills" -Create the route
router.post('/', skillsCtrl.create);


// DELETE "/skills/:id" - Delete Route
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
