const db = require('../db/index');

// Show all Contacts

exports.getHomepage = async (req, res, next) => {
	try {
		await db.query('SELECT * FROM contact ORDER BY id').then((data) => {
			const contacts = data.rows;
			res.render('index', { contacts });
		});
	} catch (err) {
		console.log(err);
	}
};

// Show a Contact

exports.getNewContact = async (req, res, next) => {
	try {
		res.render('newContact');
	} catch (error) {
		console.log(error);
	}
};

// Add a New Contact

exports.postNewContact = async (req, res, next) => {
	try {
		const { nom, prenom, email, tel, description } = req.body;
		console.log(req.body);
		await db
			.query(
				'INSERT INTO contact (nom, prenom, email, tel, description) VALUES ($1, $2, $3, $4,$5)',
				[nom, prenom, email, tel, description]
			)
			.then((data) => {
				res.redirect('/');
			});
	} catch (error) {
		console.log(error);
	}
};

// Show Contact By his Id

exports.getOneContact = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		await db.query('SELECT * FROM contact WHERE id = $1', [id]).then((data) => {
			const contact = data.rows[0];
			res.render('oneContact', { contact });
		});
	} catch (error) {
		console.log(error);
	}
};

// Delete Contact

exports.deleteContact = async (req, res, next) => {
	try {
		const { id } = req.body;
		await db.query('DELETE FROM contact WHERE id = $1', [id]).then((data) => {
			res.redirect('/');
		});
	} catch (error) {
		console.log(error);
	}
};

// Show a Contact to update

exports.getUpdateContact = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		await db.query('SELECT * FROM contact WHERE id = $1', [id]).then((data) => {
			const onecontact = data.rows[0];
			res.render('updateContact', { onecontact });
		});
	} catch (error) {
		console.log(error);
	}
};

// Update a Contact

exports.putUpdateContact = async (req, res, next) => {
	try {
		const id = parseInt(req.params.id);
		console.log(req.body, req.params);
		const { nom, prenom, email, tel, description } = req.body;
		await db
			.query(
				'UPDATE contact SET nom= $1, prenom= $2, email= $3, tel= $4, description=$5 WHERE id=$6',
				[nom, prenom, email, tel, description, id]
			)
			.then((data) => {
				res.redirect('/');
			});
	} catch (error) {
		console.log(error);
	}
};
