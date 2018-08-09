const Efetivo = require('./efetivo')
const errorHandler = require('../common/errorHandler')

Efetivo.methods(['get', 'post', 'put', 'delete'])
Efetivo.updateOptions({new: true, runValidators: true})
Efetivo.after('post', errorHandler).after('put', errorHandler)

Efetivo.route('count', (req, res, next) => {
    Efetivo.count((error, value) => {
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({value})
        }
    })
})



module.exports = Efetivo