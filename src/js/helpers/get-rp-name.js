function getRpName( string ) {
  var hostedConfig;
  var isHostedLock = string !== '@@' + 'config@@'; // if the string isn't this, we're not in the hosted Lock

  if ( isHostedLock ) {
    hostedConfig = JSON.parse( decodeURIComponent( escape( window.atob( string ) ) ) );
    return hostedConfig.dict.signin.title || null;
  }
  else {
    return null;
  }
}

module.exports = function() {
  var rpTitle = getRpName( NLX.hostedConfig );

  return rpTitle;
};
