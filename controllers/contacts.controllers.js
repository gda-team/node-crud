exports.getHomepage = (req, res, next) => {
	res.render('index');
};
exports.getNewContact = (req, res, next) =>{
	res.render('newContact')
}
exports.postNewContact = (req, res, next) =>{
	res.redirect('/')
}
exports.getOneContact = (req, res, next) =>{
	res.render('oneContact')
}
exports.deleteContact = (req, res, next) =>{
	res.redirect('/')
}
exports.getUpdateContact = (req, res, next) =>{
	res.render('updateContact')
}
exports.putUpdateContact = (req, res, next) =>{
	res.redirect('/')
}