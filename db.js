const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
    getRecipies,
    addRecipe
}
function getDishes() {
	return db('dishes');
}

function addDish(dish) {
	return db('dishes').insert(dish);
}

function getDish(id) {
	return db('dishes').where('id' id);
}

function getRecipies() {
	return db('recipies');
}

function addRecipe(recipe) {
	return db('recipies').inster(recipe);
}
