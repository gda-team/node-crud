const router = require('express').Router();
const contactsControllers = require('../controllers/contacts.controllers');

router.get('/', contactsControllers.getHomepage);
router.get('/new',contactsControllers.getNewContact);
router.post('/',contactsControllers.postNewContact);
router.get('/:id',contactsControllers.getOneContact);
router.delete('/',contactsControllers.deleteContact);
router.get('/',contactsControllers.updateContact);
router.put('/',contactsControllers.updateContact);

module.exports = router;
