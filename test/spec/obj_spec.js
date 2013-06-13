define(['chai', 'app/obj', 'sinon'], function(chai, Obj) {
  var expect = chai.expect;

  describe('Obj', function() {
    var subject;

    beforeEach(function() {
      subject = new Obj({
        key1: 'value1',
        key2: 'value2'
      });
    });

    describe('#get', function() {
      it('reads the correct value from attrs', function() {
        expect( subject.get('key1') ).to.equal('value1');
        expect( subject.get('key2') ).to.equal('value2');
      });

      it('triggers the get event', function() {
        // Spies act as placeholders for callbacks. So you can see, if a function was
        // called, how often ...
        var spy = sinon.spy();
        $(subject).on('get', spy);
        subject.get('key1');
        expect( spy ).to.have.been.calledOnce;
      });
    });

    describe('#set', function() {
      it('writes the correct value to attrs', function() {
        subject.set('key3', 'value3');
        expect( subject.get('key3') ).to.equal('value3');
      });

      it('prevents direct access to attrs', function() {
        subject.set('key3', 'value3');
        expect( subject.attrs).to.be.undefined;
      });

      it('triggers the set event', function() {
        var spy = sinon.spy();
        $(subject).on('set', spy);
        subject.set('key1', 'value1');
        expect( spy ).to.have.been.calledOnce;
      });
    });

    describe('#extend', function() {
      var person;
      var Person = Obj.extend({
        fullName: function() {
          return this.get('firstName') + ' ' + this.get('lastName');
        }
      });

      beforeEach(function() {
        person = new Person({
          firstName: 'Arthur',
          lastName: 'Dent'
        });
      });

      it('creates a new instance of Person', function() {
        expect( person.get('firstName') ).to.equal('Arthur');
      });

      it("adds the object hash given to extend to the prototype", function() {
        expect( person.fullName() ).to.equal('Arthur Dent');
      });
    });

  });
});
