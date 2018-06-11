var fireGAEvent = require( 'helpers/fire-ga-event' );
var storeLastUsedConnection = require( 'helpers/store-last-used-connection' );

module.exports = function authorise( element ) {
  var form = element.closest( 'form' );
  var connection = 'facebook';

  fireGAEvent( 'Authorisation', 'Authorising with facebook' );

  form.webAuth.authorize({
    responseType: 'token',
    connection: connection
  });

  storeLastUsedConnection( connection );
};
