const Client = require('pg').Client;

const connection = new Client({
    user: "postgres", 
    password: "12345", 
    host: "localhost", 
    port: 5432,
    database: "trabalho_crud"
}); 

connection.connect((error)=> {
    if (error) {
        console.error('The connection got an error: ' + error);
        return;
    }
    console.log('Connected successfully');
}
);

module.exports = connection;
