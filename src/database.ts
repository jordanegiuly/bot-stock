import * as Sequelize from 'sequelize'
const config = require('./config/database');
const connectionString = config.url

var sequelize = new Sequelize(connectionString)
// sequelize.authenticate()
// .then(() => {
//     console.log('OK')
// })
// .catch(err => {
//     console.error(err)
// })
// var client = new pg.Client(connectionString);
// client.connect();
// var query = client.query('CREATE TABLE items(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
// query.on('end', function() { client.end(); });
