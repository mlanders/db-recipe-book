const express = require('express');
const knex = require('knex')
const morgan = require('morgan');
const helmet = require('helmet');
const server = express();


server.use(express.json());
server.use(helmet());
server.use(morgan('dev');



const port = 3000;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
