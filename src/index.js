'use strict'

export default timeout => new Promise(resolve => setTimeout(resolve, timeout))
