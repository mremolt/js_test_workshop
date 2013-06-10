require.config({
  paths: {
    // basic paths
    lib: '../lib',
    app: '../app',

    // shortcuts for often used libs
    jquery: '../lib/jquery',
    underscore: '../lib/lodash',
    mocha: '../lib/mocha',
    chai: '../lib/chai'
  }
});

require(['require', 'mocha'], function(require)  {
  mocha.setup('bdd');

  var specs = [
    'spec/dummy_spec',
    'spec/validation_spec'
  ];

  require(specs, function() {
    mocha.run();
  });
});
