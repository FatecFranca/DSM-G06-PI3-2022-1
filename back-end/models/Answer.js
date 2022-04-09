const mongoose = require('mongoose')

module.exports = function() {
    const schema = mongoose.Schema({
        assessment: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'Assessment'
        },
        question: {
            type: mongoose.ObjectId,
            required: true,
            ref: 'Question'
        },
        /*
            Valores válidos para obejective_answer
            Y: Sim (Yes)
            N: Não (No)
            N/A: Não aplicável (Not Applicable)
            P: Resposta adiada (Postponed)
        */
        objective_answer: {
           type: String,
           enum: ['Y', 'N', 'N/A', 'P'],
           required: true
       },
       comments: {
           type: String,
           required: false // opcional
       },
       datetime: {
           type: Date,
           required: true,
           default: Date.now()
       }
    })

    schema.index({assessment: 1, question: 1}, {unique: true})

    return mongoose.model('Answer', schema, 'answers')
}