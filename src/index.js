const Promise = require('any-promise')

export default timeout => new Promise(resolve => setTimeout(resolve, timeout))
