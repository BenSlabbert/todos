let config = require( './config' );

module.exports = {
    getDbConnectionString: function () {
        return 'mongodb://' + config.uname + ':' + config.pwd + '@localhost:27017/todo'
    }
};
