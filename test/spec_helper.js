require.config({
  paths: {
    // basic paths
    components: '../components',
    app: '../app/js',
    templates: '../app/templates',

    // shortcuts for often used libs
    jquery: '../components/jquery/jquery.min',
    underscore: '../components/lodash/dist/lodash.min',
    moment: '../components/moment/min/moment.min',
    text: '../components/requirejs-text/text',
    mocha: '../components/mocha/mocha',
    chai: '../components/chai/chai',
    sinon: '../components/sinon/index',
    chaiJquery: '../components/chai-jquery/chai-jquery',
    sinonChai: '../components/sinon-chai/lib/sinon-chai',
    fixtures: '../components/fixtures'
  }
});

require(['require', 'chai', 'chaiJquery', 'sinonChai', 'mocha'], function(require, chai, chaiJquery, sinonChai)  {
  mocha.setup('bdd');
  chai.use(chaiJquery);
  chai.use(sinonChai);

  var specs = [
    'spec/dummy_spec',
    'spec/date_formatter_spec',
    'spec/validation_spec',
    'spec/form_validation_spec',
    'spec/renderer_spec',
    'spec/obj_spec'
  ];

  require(specs, function() {

    // workaround: as mocha runs in an iframe, the default jQuery doesn't see the fixtures
    // this function helps wrapping jQuery to the fixture context, see beforeEach below
    chai.jQueryWrapped = function(defaultContext) {
      return function(selector, context) {
        return new jQuery.fn.init( selector, context || defaultContext );
      };
    };

    mocha.run();
  });
});
