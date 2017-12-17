let Todos = require( '../models/todoModel' );

module.exports = function ( app ) {
    app.get( '/api/setupTodos', function ( req, res ) {
        // data from: https://www.json-generator.com/
        let starterTodos = [
            {
                "username": "Amie",
                "todo": "commodo irure non voluptate ex",
                "isDone": true,
                "hasAttachment": true
            },
            {
                "username": "Carolyn",
                "todo": "minim commodo eiusmod exercitation deserunt",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "Diaz",
                "todo": "in aliqua sunt culpa irure",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "Tammy",
                "todo": "sit eiusmod adipisicing dolore et",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "Luella",
                "todo": "aliqua elit cillum dolore enim",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "Hess",
                "todo": "in aute ipsum eiusmod veniam",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "Valeria",
                "todo": "aute proident sunt non Lorem",
                "isDone": true,
                "hasAttachment": true
            },
            {
                "username": "Nikki",
                "todo": "amet exercitation anim et officia",
                "isDone": true,
                "hasAttachment": true
            },
            {
                "username": "Leona",
                "todo": "excepteur nulla Lorem cillum nostrud",
                "isDone": true,
                "hasAttachment": false
            },
            {
                "username": "Colon",
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
