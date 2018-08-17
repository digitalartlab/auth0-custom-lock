module.exports = function() {
  var getRPName = require( 'helpers/get-rp-name' );
  var rp = getRPName();
  var rpLocation = document.getElementById( 'rp-name-placeholder' );
  var rpSidebarLocation = document.getElementById( 'rp-name-sidebar' );

  if ( rp && rpLocation ) {
    rpLocation.textContent = rp;
  }
  if ( rp && rpSidebarLocation ) {
    rpSidebarLocation.textContent = rp;
  }
};
