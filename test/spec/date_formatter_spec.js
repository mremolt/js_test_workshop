define(['chai', 'app/date_formatter'], function(chai, df) {
  var expect = chai.expect;

  describe('dateFormatter', function() {
    var sampleDateString = '2013-12-24 18:05';
    var sampleDate = new Date(2013, 11, 24, 18, 5, 0);

    describe('#formatDate', function() {
      it('formats a date object as a german date string', function() {
        expect( df.formatDate(sampleDate) ).to.equal('24.12.2013');
      });

      it('formats an iso date string as a german date string', function() {
        expect( df.formatDate(sampleDateString) ).to.equal('24.12.2013');
      });
    });

    describe('#formatTime', function() {
      it('formats a date object as a german time string', function() {
        expect( df.formatTime(sampleDate) ).to.equal('18:05');
      });

      it('formats an iso date string as a german time string', function() {
        expect( df.formatTime(sampleDateString) ).to.equal('18:05');
      });

    });

    describe('#formatDateTime', function() {
      it('formats a date object as a german datetime string', function() {
        expect( df.formatDateTime(sampleDate) ).to.equal('24.12.2013 18:05');
      });

      it('formats an iso date string as a german datetime string', function() {
        expect( df.formatDateTime(sampleDateString) ).to.equal('24.12.2013 18:05');
      });
    });

  });

});
