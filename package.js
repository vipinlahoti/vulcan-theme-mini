Package.describe({
  name: "vulcan:boot",
  summary: "Vulcan Theme package",
  version: '0.1.0',
  git: "https://github.com/vipinlahoti/vulcan-boot.git"
});

Package.onUse( function(api) {

  api.use([
    'vulcan:core@1.3.2',
    'vulcan:posts@1.3.2',
    'vulcan:comments@1.3.2',
    'vulcan:voting@1.3.2',
    'vulcan:accounts@1.3.2',
    'vulcan:email',
    'vulcan:forms',
    'vulcan:newsletter',
    'vulcan:notifications',
    'vulcan:getting-started',
    'vulcan:categories',
    'vulcan:events',
    'vulcan:embedly',
    'vulcan:api',
    'vulcan:rss',
    'vulcan:subscribe',
    'vulcan:base-components',
    // 'vulcan:base-styles',
    'vulcan:email-templates',

    'fourseven:scss@4.5.0',
  ]);

  api.mainModule('server.js', 'server');
  api.mainModule('client.js', 'client');

  var packages = [
    'jquery'
  ];

  api.use(packages);
  api.imply(packages);
  
  api.addFiles([
    // Bootstrap Css
    'lib/theme/scss/bootstrap.css',

    // Scss
    'lib/theme/scss/main.scss',

    // Js
    'lib/theme/js/bootstrap.js'
  ], ['client']);

});
