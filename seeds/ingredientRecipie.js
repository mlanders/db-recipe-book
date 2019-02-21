exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('ingredientRecipie')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('ingredientRecipie').insert([
				{ ingredient_id: 1, recipie_id: 4 },
				{ ingredient_id: 2, recipie_id: 1 },
				{ ingredient_id: 2, recipie_id: 2 },
				{ ingredient_id: 2, recipie_id: 4 },
				{ ingredient_id: 2, recipie_id: 5 },
				{ ingredient_id: 4, recipie_id: 1 },
				{ ingredient_id: 4, recipie_id: 2 },
				{ ingredient_id: 5, recipie_id: 5 },
				{ ingredient_id: 6, recipie_id: 5 },
				{ ingredient_id: 7, recipie_id: 6 },
				{ ingredient_id: 5, recipie_id: 6 },
				{ ingredient_id: 8, recipie_id: 5 },
				{ ingredient_id: 9, recipie_id: 3 },
				{ ingredient_id: 3, recipie_id: 5 },
				{ ingredient_id: 3, recipie_id: 3 },
			]);
		});
};
