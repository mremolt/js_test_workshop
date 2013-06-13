require.config({
  paths: {
    // basic paths
    components: '../components',
    app: '../js',
    templates: '../templates',

    // shortcuts for often used libs
    // jquery: '../../components/jquery/jquery.min',
    jquery: 'http://code.jquery.com/jquery-1.10.1.min',
    underscore: '//cdnjs.cloudflare.com/ajax/libs/lodash.js/1.3.1/lodash.min',
    moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.0.0/moment.min',
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.5/text',
    domReady: '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady'
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
