# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Now display RP name in text in sidebar.

### Changed
- RP name is now taken from the Application Name in Auth0, instead of displaying the base URL.
- Removed double logic for autofocus.
- Don't allow users to try logging into a password account that's on an unsupported connection.
- Replace LDAP not available and LDAP required errors with general Method not available error.

### Removed
- Take out unused Twitter authorisation.

## [1.0.2] - 2018-08-17
### Added
- Maintenance mode banner, can be activated through config setting.
- Human readable IDP names are now included in config, so autologin can display those names.

### Changed
- Activated autologin!
- Autologin now pushes new URL into history, so users can use the back button if autologin fails.

## [1.0.1] - 2018-07-03
### Added
- Enabled Google Tag Manager.

## [1.0.0] - 2018-07-02
- First release.
- Autologin switched off for now.
