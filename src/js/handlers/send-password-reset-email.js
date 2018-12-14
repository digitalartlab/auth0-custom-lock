var fireGAEvent = require( 'helpers/fire-ga-event' );
var ui = require( 'helpers/ui' );

module.exports = function reset( element ) {
  var emailField = document.getElementById( 'field-email' );
  var form = element.form;
  var connection = emailField.dataset.connection || null;
  var email = emailField.nodeValue.toLowerCase();
  var emailLocation = document.getElementById( 'reset-password-email-success-placeholder' );

  emailLocation.textContent = email;

  ui.setLockState( element, 'loading' );

  fireGAEvent( 'Authorisation', 'Requested passwordless link' );

  form.webAuth.changePassword({
    connection: connection,
    email: email
  }, function( err ) {
    if ( err ){
      ui.setLockState( element, 'initial' );
    }
    else {
      ui.setLockState( element, 'reset-password-success' );
    }
  });

};
