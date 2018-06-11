var decorate = require( 'init/decorate' );
var setupHandlers = require( 'init/setupHandlers' );
var handlers = require( 'handlers' );
var decorators = require( 'decorators' );
var polyfill = require( 'polyfills/polyfill' );

window.Promise = require( 'promise-polyfill' );
require( 'whatwg-fetch' );
require( 'url-search-params-polyfill' );
polyfill();

document.documentElement.className = 'has-js';

// environment variables are replaced in build process
window.NLX = {
  'environment': '{{{ environment }}}',
  'auth0_domain': '{{{ auth0_domain }}}',
  'auth0_tenant': '{{{ auth0_tenant }}}',
  'client_ID': '{{{ client_ID }}}',
  'LDAP_connection_name': '{{{ LDAP_connection_name }}}',
  'person_api_domain': '{{{ person_api_domain }}}',
  'GTM_ID': '{{{ GTM_ID }}}',
  'features': {
    'autologin': '{{{ features.autologin }}}',
    'person_api_lookup': '{{{ features.person_api_lookup }}}'
  },
  'supportedLoginMethods': [ 'twitter', 'facebook', 'google-oauth2', 'email' ]
};

// run all decorators on page load
decorate( decorators );

// bind click handler so that handlers run on click
// of elements with data-handler="handler"
setupHandlers( handlers );
