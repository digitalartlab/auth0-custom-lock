var authoriseLDAP = require( 'handlers/authorise-ldap' );

module.exports = function( element ) {

  element.addEventListener( 'submit', function( event ) {
    var currentState = element.getAttribute( 'lock-state' );
    var secondTry = false;

    event.preventDefault();

    switch ( currentState ) {
    case 'initial':
      authoriseLDAP( element, secondTry );
      break;
    case 'ldap':
      authoriseLDAP( element, secondTry );
      break;
    case 'error-password':
      secondTry = true;
      authoriseLDAP( element, secondTry );
      break;
    }
  });
};
