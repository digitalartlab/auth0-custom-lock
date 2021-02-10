module.exports = function fillInSessioInfo() {
  var params = new URLSearchParams( window.location.search ) || null;
  var emailField = document.getElementById( 'field-email' );

  if ( params.get( 'login_hint' ) ) {
    emailField.value = params.get( 'login_hint' );
  }
};
