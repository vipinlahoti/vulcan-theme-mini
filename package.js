Package.describe({
  name: 'vipinlahoti:vulcan-theme-mini',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'React-Bootstrap 3 based minimalistic theme',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/vipinlahoti/vulcan-theme-mini.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.3.2');
  api.use('ecmascript');
  api.mainModule('vulcan-theme-mini.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('vipinlahoti:vulcan-theme-mini');
  api.mainModule('vulcan-theme-mini-tests.js');
});
