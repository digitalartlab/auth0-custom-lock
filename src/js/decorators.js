// define decorators
//
// decorators are functions that run when the page loads

var decorators = {
  'check-if-maintenance-mode': require( 'decorators/check-if-maintenance-mode' ),
  'display-logo': require( 'decorators/display-logo' ),
  'display-rp-name': require( 'decorators/display-rp-name' ),
  'fill-in-session-info': require( 'decorators/fill-in-session-info' ),
  'filter-connections': require( 'decorators/filter-connections' ),
  'handle-submit': require( 'decorators/handle-submit' ),
  'init-auth': require( 'decorators/init-auth' ),
  'load-ga': require( 'decorators/load-ga' ),
  'submit-with-enter': require( 'decorators/submit-with-enter' ),
  'watch-contents': require( 'decorators/watch-contents' )
};

module.exports = decorators;

