# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.0.9] - 2018-10-05
### Added
- More explicit 'login' header

### Changed
- Logo now has a little less whitespace
- Body text color is now black instead of gray

### Fixed
- Cultuur op School logos are now SVG

## [1.0.8] - 2018-10-05
### Fixed
- CDN url didn't render properly for some images.

## [1.0.7] - 2018-10-05
### Added
- Cultuur op School and Digital Art Lab logos.

### Changed
- Fullscreen on mobile breakpoint

## [1.0.6] - 2018-09-21
### Fixed
- Autologin didn't check if it was disabled.

## [1.0.5] - 2018-09-19
### Changed
- Disabled autologin, as Auth0 now has Seamless SSO support.

## [1.0.4] - 2018-09-12
### Changed
- Disabled LDAP shortcut, as we need to check which connection to use at all times.

## [1.0.3] - 2018-08-17
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
