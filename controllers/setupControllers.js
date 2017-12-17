let Todos = require( '../models/todoModel' );

module.exports = function ( app ) {
    app.get( '/api/setupTodos', function ( req, res ) {
        // data from: https://www.json-generator.com/
        let starterTodos = [
            {
                "username": "test",
                "todo": "commodo irure non voluptate ex",
                "isDone": true,
                "hasAttachment": true
            },
            {
                "username": "test",
                "todo": "minim commodo eiusmod exercitation deserunt",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "test",
                "todo": "in aliqua sunt culpa irure",
                "isDone": false,
                "hasAttachment": true
            }
        ];
        Todos.create( starterTodos, function ( err, results ) {
            res.send( results );
        } );
    } );
};
