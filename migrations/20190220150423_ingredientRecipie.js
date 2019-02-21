exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredientRecipie', function(table) {
		table.integer('ingredient_id').unsigned();
		table.integer('recipie_id').unsigned();
		table.foreign('ingredient_id').references('ingredients.id');
		table.foreign('recipie_id').references('recipies.id');
	});
};

exports.down = function(knex, Promise) {};
