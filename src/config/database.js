const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');

class Database {
    constructor() {
        this.connection = null;
    }

    connect (){
        const mongo_url = "";
        console.log('Tentando conexão com banco de dados...');
        mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then (() => {
            console.log('Conectado com o banco de dados.')
            this.connection = moongose.connection; 
        }).catch (err => {
            console.error(err);
        })
    }
}

module.exports = Database;