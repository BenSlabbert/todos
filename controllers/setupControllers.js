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
            },
            {
                "username": "v",
                "todo": "sit eiusmod adipisicing dolore et",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "test",
                "todo": "aliqua elit cillum dolore enim",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "test",
                "todo": "in aute ipsum eiusmod veniam",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "test",
                "todo": "aute proident sunt non Lorem",
                "isDone": true,
                "hasAttachment": true
            },
            {
                "username": "test",
                "todo": "amet exercitation anim et officia",
                "isDone": true,
                "hasAttachment": true
            },
            {
                "username": "test",
                "todo": "excepteur nulla Lorem cillum nostrud",
                "isDone": true,
                "hasAttachment": false
            },
            {
                "username": "test",
                "todo": "veniam velit exercitation ad dolore",
                "isDone": true,
                "hasAttachment": true
            }
        ];
        Todos.create( starterTodos, function ( err, results ) {
            res.send( results );
        } );
    } );
};
