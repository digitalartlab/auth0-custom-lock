var fireGAEvent = require( 'helpers/fire-ga-event' );
var storeLastUsedConnection = require( 'helpers/store-last-used-connection' );

module.exports = function authorise( element, email ) {
  var form = element.closest( 'form' );
  var connection = 'ckc-azure-ad';

  fireGAEvent( 'Authorisation', 'Authorising with Azure AD' );

  form.webAuth.authorize({
    responseType: 'token',
    connection: connection,
    login_hint: email
  });

  storeLastUsedConnection( connection );
};
