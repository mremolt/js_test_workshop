define(['chai', 'underscore'], function(chai, _) {
  var expect = chai.expect;

  describe('sample test', function() {
    it('async test', function(done) {
      expect(1).to.equal(1);
      done();
    });

    it('sync test', function() {
      expect(3).to.equal(3);
    });
  });

  describe('libs are present', function() {
    it('has underscore present at _', function() {
      expect( _([1,2,3,4,5]).first() ).to.equal(1);
    });

    it('has jquery present at $', function() {
      expect( $().jquery ).to.equal("1.10.1");
    });
  });

});
