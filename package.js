Package.describe({
  name: "aldeed:reload-extras",
  summary: "Useful additions to the Meteor reload package",
  version: "0.0.1",
  git: "https://github.com/aldeed/meteor-reload-extras.git"
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['session', 'reload'], 'client');
  api.imply('reload', 'client');
  api.addFiles('reload-extras.js', 'client');
});
