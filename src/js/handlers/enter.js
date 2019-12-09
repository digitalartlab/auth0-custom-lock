var ui = require( 'helpers/ui' );
var fireGAEvent = require( 'helpers/fire-ga-event' );

function showNonLDAP( element ) {
  // show social logins + passwordless
  ui.setLockState( element, 'non-ldap' );
  fireGAEvent( 'Screen change', 'Continued as non-LDAP' );
}

function showLDAP( element, connection ) {
  var emailField = document.getElementById( 'field-email' );

  // show password field
  ui.setLockState( element, 'ldap' );
  emailField.dataset.connection = connection;

  fireGAEvent( 'Screen change', 'Continued as LDAP' );
}

function errorMethodNotAvailable( element, connection ) {
  // error if account is not allowed on any active connection
  if ( connection === 'Scholen' ) {
    ui.setLockState( element, 'method-not-available-school' );
  }
  else {
    ui.setLockState( element, 'method-not-available' );
  }
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
  var supportedByRP = form.loginMethods ? form.loginMethods['supportedByRP'] : null;
  var supportsPasswordless = supportedByRP && supportedByRP.indexOf( 'email' ) > -1;
  var qualifiesForLDAPShortcut = /@(ckc-zoetermeer\.nl)$/.test( emailFieldValue );
  var ENDPOINT = NLX.person_api_domain;

  if ( emailField.value === '' || emailField.validity.valid === false ) {
    emailField.focus();
    return;
  }

  // Send @ckc-zoetermeer.nl emails straight to LDAP
  if ( qualifiesForLDAPShortcut ) {
    showLDAP( element, 'Personen' );
  }
  else if ( NLX.features.person_api_lookup ) {

    ui.setLockState( element, 'loading' );

    fetch( ENDPOINT + emailFieldValue )
      .then( function( response ) {
        return response.json();
      })
      .then( function( data ) {
        var userinfo = data;

        var isLDAP = userinfo.hasOwnProperty( 'email' ) && userinfo.hasOwnProperty( 'connection' ) && ( userinfo[ 'connection' ] === 'Scholen' || userinfo[ 'connection' ] === 'Personen' );

        if ( isLDAP ) {
          if ( supportedByRP.indexOf( userinfo.connection ) !== -1 ) {
            showLDAP( element, userinfo.connection );
          }
          else {
            errorMethodNotAvailable( element, userinfo.connection );
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
