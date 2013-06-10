define(['chai', 'jquery'], function(chai, $) {
  var expect = chai.expect;

  describe('validation specs', function() {
    it('async test', function(done) {
      console.log($);
      expect(1).to.equal(1);
      done();
    });

  });

});
