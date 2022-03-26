const mongoose = require('mongoose')

module.exports = function() {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERV}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
        // Parâmetros da conexão
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    });

    mongoose.connection.on('connected', () =>
        console.log('** Mongoose! conectado ao servidor remoto')
    )

    mongoose.connection.on('error', erro =>
        console.error('* ERRO: Mongoose! não conectado ao servidor remoto. Causa: ' + erro)
    )
};
//`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_SERV}/${process.env.DB_NAME}?retryWrites=true&w=majority`
//mongodb+srv://rafael:12345@cluster0.8k22u.mongodb.net/ergolist?retryWrites=true&w=majority