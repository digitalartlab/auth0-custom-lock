var dom = require( 'helpers/dom' );
var ui = require( 'helpers/ui' );
var fireGAEvent = require( 'helpers/fire-ga-event' );
var applyEmptyClass = require( 'helpers/apply-empty-class' );

module.exports = function( element ) {
  var form = element.form;
  var url = 'https://' + NLX.domain + '/public/api/' + form.webAuthConfig.clientID + '/connections';

  ui.setLockState( element, 'loading' );

  fetch( url ).then( function( response ) {
    return response.json();
  }).then( function( supported ) {
    var loginMethods;
    var i;

    loginMethods = {
      'supportedByRP': [],
      'supportedByNLX': NLX.supportedLoginMethods.split( ',' ),
      'removed': []
    };

    for ( i = 0; i < supported.length; i++ ) {
      loginMethods['supportedByRP'].push( supported[i].name );
    }

    loginMethods['supportedByNLX'].forEach( function( loginMethod ) {
      var optionsInDom;

      // Remove login options from page if not supported by RP
      if ( loginMethods['supportedByRP'].indexOf( loginMethod ) === -1 ) {
        optionsInDom = dom.$( '[data-optional-login-method="' + loginMethod + '"]' );

        optionsInDom.forEach( function( method ) {
          method.remove();
        });

        loginMethods['removed'].push( loginMethod );

        fireGAEvent( 'Hiding', 'Hiding login method that isn\'t supported for this RP' );
        fireGAEvent( 'Hiding', 'Hiding ' + loginMethod + ' as it isn\'t supported for this RP' );
      }
    });

    form.loginMethods = loginMethods;

    applyEmptyClass();

    ui.setLockState( element, 'initial' );

  }).catch( function() {
    // Could not check which connections are available for this RP; just show all.
    ui.setLockState( element, 'initial' );
  });
};
