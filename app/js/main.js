require.config({
  paths: {
    // basic paths
    lib: '../../lib',
    app: '../js',
    templates: '../templates',

    // shortcuts for often used libs
    jquery: '../../lib/jquery',
    underscore: '../../lib/lodash',
    moment: '../../lib/moment',
    domReady: '../../lib/domReady',
    text: '../../lib/text'
  }
});

var dependencies = ['require', 'jquery', 'underscore', 'app/date_formatter',
  'app/form_validation', 'app/renderer', 'domReady!'];

require(dependencies, function(require, $, _, dateFormatter, validation, Renderer) {

  var today = dateFormatter.formatDate(new Date());
  $("#today").text(today);

  var renderer = new Renderer('welcome');
  renderer.renderTo('#welcome', { name: 'Welt'});

  validation.required('#the-name');
  validation.email('#the-email');

});
