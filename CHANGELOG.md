# Changelog

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [1.1.4] - 2019-01-30
### Changed
- Updated colours to align with new Dashboard UI colours

## [1.1.3] - 2019-01-30
### Removed
- Don't display Digital Art Lab logo, use regular CKC logo instead

## [1.1.2] - 2018-12-14
### Changed
- Wording on password reset page

## [1.1.1] - 2018-12-14
### Changed
- Increased font size for small text and links from `.75em` to `.85em`

## [1.1.0] - 2018-12-14
### Added
- Password reset is here!

### Changed
- Connection for current email is now stored on the email field, as `element` isn't consistent
- Tiny change to letter spacing

## [1.0.17] - 2018-12-05
### Fixed
- CSP error with Google Analytics

## [1.0.16] - 2018-12-05
### Changed
- Send errors to Google Analytics for errors during decision of passwordless/password

## [1.0.15] - 2018-11-06
### Added
- General <= IE 10 warning
- Favicon

### Changed
- New error if Person API lookup fails, either because of <= IE 10 or because of server error
- Updated Auth0.js to latest version

## [1.0.15] - 2018-11-06
### Added
- General <= IE 10 warning
- Favicon

### Changed
- New error if Person API lookup fails, either because of <= IE 10 or because of server error
- Updated Auth0.js to latest version

## [1.0.14] - 2018-11-06
### Added
- General <= IE 10 warning
- Favicon

### Changed
- New error if Person API lookup fails, either because of <= IE 10 or because of server error
- Updated Auth0.js to latest version

## [1.0.13] - 2018-10-17
### Fixed
- Polyfill for startsWith, required for IE11

## [1.0.12] - 2018-10-08
### Changed
- Removed "Terms" from legal links
- Purple background now fills all the way to bottom of screen on mobile breakpoint

## [1.0.11] - 2018-10-06
### Changed
- Increased contrast for some text to fit accessibility guidelines

### Fixed
- Add empty alt text to decorative images to help screen readers

### Security
- rel="noopener" on target="_blank" anchors prevents JavaScript in new page from hijacking current page

## [1.0.10] - 2018-10-05
### Fixed
- Check for only LDAP didn't work, so now it's an 'is passwordless enabled' check instead
- Wrong password error now translated
- Passwordless error would result in reset to start screen

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
