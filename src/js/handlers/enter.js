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
            ui.setLockState( element, 'method-not-available' );
          }
        }
        else {
          if ( !supportsPasswordless ) {
            ui.setLockState( element, 'method-not-available' );
          }
          else {
            showNonLDAP( element );
          }
        }
      })
      .catch( function( err ) {
        console.error( err );
        if ( !supportsPasswordless ) {
          ui.setLockState( element, 'error-fetch' );
        }
        else {
          showNonLDAP( element );
        }
      });
  }
  else {
    if ( !supportsPasswordless ) {
      ui.setLockState( element, 'method-not-available' );
    }
    else {
      showNonLDAP( element );
    }
  }
};
