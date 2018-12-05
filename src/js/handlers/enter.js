var ui = require( 'helpers/ui' );
var fireGAEvent = require( 'helpers/fire-ga-event' );

function showNonLDAP( element ) {
  // show social logins + passwordless
  ui.setLockState( element, 'non-ldap' );
  fireGAEvent( 'Screen change', 'Continued as non-LDAP' );
}

function showLDAP( element, passwordField, connection ) {
  // show password field
  ui.setLockState( element, 'ldap' );
  element.dataset.connection = connection;

  fireGAEvent( 'Screen change', 'Continued as LDAP' );
}

function errorMethodNotAvailable( element ) {
  // error if account is not allowed on any active connection
  ui.setLockState( element, 'method-not-available' );
  fireGAEvent( 'Error', 'Method not available' );
}

function errorFetch( element ) {
  // error if fetching User API data failed, either because the server is down or because IE 10 is a bitch
  ui.setLockState( element, 'error-fetch' );
  fireGAEvent( 'Error', 'User API: fetch failed' );
}


module.exports = function enter( element ) {
  var form = document.querySelector( 'form' );
  var emailField = document.getElementById( 'field-email' );
  var emailFieldValue = emailField.value.toLowerCase();
  var passwordField = document.getElementById( 'field-password' );
  var supportedByRP = form.loginMethods ? form.loginMethods['supportedByRP'] : null;
  var supportsPasswordless = supportedByRP && supportedByRP.indexOf( 'email' ) > -1;
  var ENDPOINT = NLX.person_api_domain;

  if ( emailField.value === '' || emailField.validity.valid === false ) {
    emailField.focus();
    return;
  }

  if ( NLX.features.person_api_lookup ) {

    ui.setLockState( element, 'loading' );

    fetch( ENDPOINT + emailFieldValue )
      .then( function( response ) {
        return response.json();
      })
      .then( function( data ) {
        var userinfo = JSON.parse( JSON.stringify( data ) );

        var isLDAP = userinfo.hasOwnProperty( 'email' ) && userinfo.hasOwnProperty( 'connection' ) && ( userinfo[ 'connection' ] === 'Scholen' || userinfo[ 'connection' ] === 'Personen' );

        if ( isLDAP ) {
          if ( supportedByRP.indexOf( userinfo.connection ) !== -1 ) {
            showLDAP( element, passwordField, userinfo.connection );
          }
          else {
            errorMethodNotAvailable( element );
          }
        }
        else {
          if ( !supportsPasswordless ) {
            errorMethodNotAvailable( element );
          }
          else {
            showNonLDAP( element );
          }
        }
      })
      .catch( function( ) {
        // Always error if User API is down, as schools can't use Passwordless
        errorFetch( element );
      });
  }
  else {
    if ( !supportsPasswordless ) {
      errorMethodNotAvailable( element );
    }
    else {
      showNonLDAP( element );
    }
  }
};
