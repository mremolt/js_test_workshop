require.config({
  paths: {
    components: '../../components',
    jquery: '../../components/jquery/jquery.min',
    domReady: '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady',
    basicModule: 'basic_module'
  }
});

require(
  ['jquery', 'components/lodash/dist/lodash.min', 'domReady!', 'basicModule'],
  function($, _, doc, bm) {

    console.log("finished loading");

    console.log( $(doc) );

    _(3).times(function () {
      console.log('underscore loaded!');
    });

    bm.findSense();
    console.log(bm.sense);
});
