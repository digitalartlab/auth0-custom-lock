// define decorators
//
// decorators are functions that run when the page loads

var decorators = {
  'decide-screen': require( 'decorators/decide-screen' ),
  'display-rp-name': require( 'decorators/display-rp-name' ),
  'fill-in-session-info': require( 'decorators/fill-in-session-info' ),
  'filter-connections': require( 'decorators/filter-connections' ),
  'handle-submit': require( 'decorators/handle-submit' ),
  'init-auth': require( 'decorators/init-auth' ),
  'load-ga': require( 'decorators/load-ga' ),
  'set-autologin-preference': require( 'decorators/set-autologin-preference' ),
  'submit-with-enter': require( 'decorators/submit-with-enter' ),
  'tooltip': require( 'decorators/tooltip' ),
  'watch-contents': require( 'decorators/watch-contents' )
};

module.exports = decorators;

