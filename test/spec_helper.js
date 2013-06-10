require.config({
  paths: {
    // basic paths
    lib: '../lib',
    app: '../app/js',

    // shortcuts for often used libs
    jquery: '../lib/jquery',
    underscore: '../lib/lodash',
    moment: '../lib/moment',
    mocha: '../lib/mocha',
    chai: '../lib/chai'
  }
});

require(['require', 'chai', 'lib/chai-jquery', 'mocha'], function(require, chai, chaiJquery)  {
  mocha.setup('bdd');
  chai.use(chaiJquery);

  var specs = [
    'spec/dummy_spec',
    'spec/date_formatter_spec',
    'spec/validation_spec',
    'spec/form_validation_spec'
  ];

  require(specs, function() {
    mocha.run();
  });
});
