module.exports = function() {
  var cdn = NLX.cdn;
  var getRPName = require( 'helpers/get-rp-name' );
  var rp = getRPName();
  var logoLocation = document.getElementById( 'logo' );
  var logoAnchorLocation = document.getElementById( 'logoAnchor' );

  if ( rp && logoLocation && logoAnchorLocation ) {
    if ( rp.startsWith( 'Cultuur op School' ) ) {
      logoLocation.src = cdn + '/images/cos-logo.svg';
      logoAnchorLocation.href = 'https://cultuuropschool.nl';
    }
    else if ( rp.startsWith( 'Digital Art Lab' ) ) {
      logoLocation.src = cdn + '/images/dal-logo.svg';
      logoAnchorLocation.href = 'https://digitalartlab.nl';
    }
  }

};
