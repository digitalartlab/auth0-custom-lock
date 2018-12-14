var ui = require( 'helpers/ui' );
var fireGAEvent = require( 'helpers/fire-ga-event' );

module.exports = function goToInitialPage( element ) {
  var email = document.getElementById( 'field-email' ).value.toLowerCase();
  var emailLocation = document.getElementById( 'reset-password-email-placeholder' );

  emailLocation.textContent = email;

  ui.setLockState( element, 'reset-password' );
  fireGAEvent( 'Screen change', 'Continued to Password Reset' );
};
