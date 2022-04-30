const User = require('../models/User')()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const controller = {} // Objeto vazio

controller.login = async(req, res) => {
    try{
        // Buscar o usuário no BD
        const user = await User.findOne({email: req.body.email})
        if(!user){ // Usuário não encontrado
            // HTTP 401: Unauthorized
            res.status(401).end()
        }
        else(bcrypt.compare(res.body.password, user.password_hash), function(err, result) {
            if(result) {
                // expiresIn: prazo de validade do token, em segundos 
                const token = jwt.sign({ id: user._id },
                process.env.SECRET, { expiresIn: 3600 })
                // Resposta com HTTP 200 implícito
                res.json({auth: true, token})
            }
            else {
                // HTTP 401: Unauthorized
                res.status(401).end()
            }
        })
    }
    catch(error){
        console.error(error)
        // HTTP 500: Internal Server Error
        res.status(500).send(error)
    }
}

module.exports = controller 