exports.up = function(knex, Promise) {
	return knex.schema.createTable('ingredients', function(table) {
		table.increments('id');
		table.string('name', 256);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExsists('ingredients');
};
