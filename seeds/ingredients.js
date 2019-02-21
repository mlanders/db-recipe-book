exports.seed = function(knex, Promise) {
	return knex('ingredients')
		.truncate()
		.then(function() {
			return knex('ingredients').insert([
				{ id: 1, name: 'pork' },
				{ id: 2, name: 'cheddar cheese' },
				{ id: 3, name: 'salt' },
				{ id: 4, name: 'marinara' },
				{ id: 5, name: 'bread' },
				{ id: 6, name: 'corned beef' },
				{ id: 7, name: 'swiss cheese' },
				{ id: 8, name: 'thousand island dressing' },
				{ id: 9, name: 'chicken' },
			]);
		});
};
