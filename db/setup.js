const {query} = require('./promise-mysql.js')
const {cp} = require('./connection.js')

query(cp, 'DROP TABLE IF EXISTS dogs; CREATE TABLE dogs (name VARCHAR(255), dog_id INT AUTO_INCREMENT, PRIMARY KEY (dog_id));')
//.then(result => {console.log('dogs table dropped')})
//.then(() => {console.log('dogs table dropped')}) will also work
.then(result => query(cp, 'INSERT INTO dogs (name) VALUES ("Scuffles");'))
.then(result => query(cp, 'SELECT * FROM dogs;'))
.then(result => { console.log(result); process.exit() })
.catch(error => { console.log(error) })