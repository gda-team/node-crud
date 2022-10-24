const router = require('express').Router();
const contactsControllers = require('../controllers/contacts.controllers');

router.get('/', contactsControllers.getHomepage);

module.exports = router;
