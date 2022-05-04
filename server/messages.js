const moment = require('moment')

function formatMessage(username, text, likes ){
    return {
        username,
        text, 
        likes,
        time: moment().format('h:mm a')
    }
    
    
}

module.exports = formatMessage;