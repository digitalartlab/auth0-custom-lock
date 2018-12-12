var ui = require( 'helpers/ui' );
var fireGAEvent = require( 'helpers/fire-ga-event' );

module.exports = function goToInitialPage( element ) {
  ui.setLockState( element, 'reset-password' );
  fireGAEvent( 'Screen change', 'Continued to Password Reset' );
};
