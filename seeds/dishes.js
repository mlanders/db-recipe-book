exports.seed = function(knex, Promise) {
	return knex('dishes')
		.truncate()
		.then(function() {
			return knex('dishes').insert([
				{ id: 1, name: 'pizza' },
				{ id: 2, name: 'tacos' },
				{ id: 3, name: 'stew' },
				{ id: 4, name: 'lasagna' },
				{ id: 5, name: 'sandwhich' },
				{ id: 6, name: 'pasta' },
			]);
		});
};
