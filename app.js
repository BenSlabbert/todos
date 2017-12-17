let express = require( 'express' );
let app = express();
let mongoose = require( 'mongoose' );
let config = require( './config' );
let setupController = require( './controllers/setupControllers' );

let port = process.env.PORT || 9001;

app.use( '/assets', express.static( __dirname + '/public' ) );

app.set( 'view engine', 'ejs' );

mongoose.connect( config.getDbConnectionString() );

setupController( app );

app.listen( port );
