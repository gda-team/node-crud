const router = require('express').Router();
const contactsControllers = require('../controllers/contacts.controllers');

router.get('/', contactsControllers.getHomepage);
router.get('/new', contactsControllers.getNewContact);
router.post('/', contactsControllers.postNewContact);
router.get('/:id', contactsControllers.getOneContact);
router.post('/delete', contactsControllers.deleteContact);
router.get('/update/:id', contactsControllers.getUpdateContact);
router.post('/update/:id', contactsControllers.putUpdateContact);

module.exports = router;
