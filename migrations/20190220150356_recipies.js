exports.up = function(knex, Promise) {
	return knex.schema.createTable('recipies', function(table) {
		table.increments('id');
		table.string('name', 256);
		table.string('instructions', 512);
		table.integer('dish_id').unsigned();
		table.foreign('dish_id').references('dishes.id');
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('recipies');
};
