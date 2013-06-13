define(['chai', 'fixtures', 'app/renderer'], function(chai, Fixtures, Renderer) {
  var expect = chai.expect;
  var fixtures = new Fixtures();
  fixtures.path = 'fixtures';

  describe('Renderer', function() {
    var renderer,
      $;

    beforeEach(function() {
      renderer = new Renderer('welcome');
      fixtures.load('renderer.html');
      $ = chai.jQueryWrapped(fixtures.window());

      afterEach(function() {
        fixtures.cleanUp();
      });

    });

    describe('render to a selector', function() {
      beforeEach(function(done) {
        renderer.renderTo($('#content'), { name: 'testsuite' }, done);
      });

      it('displays the rendered content', function() {
        expect( $('#content').html() ).to.contain('<p>Hallo testsuite!</p>');
      });
    });

  });

});
