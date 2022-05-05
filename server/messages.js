const moment = require('moment')

function MessageFormat(username, text, likes ){
    return {
        username,
        text, 
        likes,
        time: moment().format('h:mm a')
    }
    
    
}

module.exports = MessageFormat;