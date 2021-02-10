// define handlers
//
// handlers are functions that run when a user clicks an interactive
// element with data-handler="function-name"

// handlers are in the folder of the component they relate to. If they relate to
// no component, they are in the general 'handlers' folder (src/assets/js/handlers).

module.exports = {
  'enter': require( 'handlers/enter' ),
  'go-to-initial-page': require( 'handlers/go-to-initial-page' ),
  'go-to-password-reset': require( 'handlers/go-to-password-reset' ),
  'authorise-ad': require( 'handlers/authorise-ad' ),
  'authorise-ldap': require( 'handlers/authorise-ldap' ),
  'authorise-google': require( 'handlers/authorise-google' ),
  'authorise-apple': require( 'handlers/authorise-apple' ),
  'send-password-reset-email': require( 'handlers/send-password-reset-email' ),
  'send-passwordless-link': require( 'handlers/send-passwordless-link' )
};

