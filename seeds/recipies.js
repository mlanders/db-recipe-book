exports.seed = function(knex, Promise) {
	return knex('recipies')
		.truncate()
		.then(function() {
			return knex('recipies').insert([
				{
					id: 1,
					name: 'Mom lasagna',
					instructions: 'These are instructions on how to make this item',
					dish_id: 4,
				},
				{
					id: 2,
					name: 'Dad lasagna',
					instructions: 'These are instructions on how to make this item',
					dish_id: 4,
				},
				{
					id: 3,
					name: 'Gordon Ramsey pasta',
					instructions: 'These are instructions on how to make this item',
					dish_id: 5,
				},
				{
					id: 4,
					name: 'pork tacos',
					instructions: 'These are instructions on how to make this item',
					dish_id: 2,
				},
				{
					id: 5,
					name: 'reuben',
					instructions: 'These are instructions on how to make this item',
					dish_id: 5,
				},
				{
					id: 6,
					name: 'grilled cheese',
					instructions: 'These are instructions on how to make this item',
					dish_id: 5,
				},
			]);
		});
};
