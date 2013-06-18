define(['chai', 'underscore', 'jquery'], function(chai, _, $) {
  var expect = chai.expect;

  describe('sample test', function() {
    it('a simple test', function() {
      expect(3).to.equal(3);
    });
  });

  describe('libs are present via requirejs', function() {
    it('has underscore present at _', function() {
      expect( _([1,2,3,4,5]).first() ).to.equal(1);
    });

    it('has jquery present at $', function() {
      expect( $().jquery ).to.equal("1.10.1");
    });
  });

  describe('show a bit of Mochas/Chais API', function() {
    it('executes the following expectations', function() {
      // see http://chaijs.com/api/bdd/

      expect(1).to.equal(1);
      expect(true).to.be.ok;

      expect('Barsch').to.include('arsch');
      expect([1, 2, 3, 4, 5]).to.include(3);
      expect([1, 2, 3, 4, 5]).to.not.include(7);

      expect([]).to.be.empty;
      expect('').to.be.empty;
      expect({}).to.be.empty;
      expect([1]).to.not.be.empty;
      expect('0').to.not.be.empty;

      expect(5 > 3).to.be.true;
      expect(5).to.be.greaterThan(3);

      expect(3).to.be.within(2, 7);

      expect('hallo').to.be.a('string');
      expect([1, 2]).to.be.instanceOf(Array);

      expect({ foo: 'bar' }).to.have.property('foo');
      expect({ foo: 'bar' }).to.not.have.property('test');
      expect({ foo: 'bar' }).to.have.property('foo', 'bar');
      expect({ foo: 'bar' }).to.not.have.property('foo', 'baz');

      var fn = function() { throw new Error('AAAAAAA'); };
      expect(fn).to.throw(Error);
      expect(fn).to.throw(Error, /AAA/);
    });

    describe('beforeEach and afterEach', function() {
      beforeEach(function() {
        console.log('This gets executed before each "it"');
      });

      afterEach(function() {
        console.log('This gets executed after each "it"');
      });

      before(function() {
        console.log('This gets executed before the first "it"');
      });

      after(function() {
        console.log('This gets executed after the last "it"');
      });

      it('run1', function() {
        console.log('in 1');
      });

      it('run2', function() {
        console.log('in 2');
      });

      it('run3', function() {
        console.log('in 3');
      });
    });

    describe('pending specs', function() {
      xit('use Xit to temporary disable specs', function() {
        expect(1).to.equal(2);
      });

      it('or leave out the function to mark as pending');

      xdescribe('or deactivate a whole describe block via Xdescribe', function() {
        it('fails miserably', function() {
          expect(1).to.equal(2);
        });
      });
    });

    describe('use the chrome debugger', function() {

      xit('stops execution on calling debugger', function() {
        var bla = 12;
        debugger;
        bla = 42;
        debugger;
        console.log("after last debugger");
      });
    });

    describe('using done for async tests', function() {

      describe('timeout example', function() {
        var bla;

        beforeEach(function(done) {
          setTimeout(function() {
            bla = 42;
            done();
          }, 300);
        });

        it('waits till beforeEach is done', function() {
          expect(bla).to.equal(42);
        });
      });

      describe('jQuery ajax example', function() {
        var result = '';

        beforeEach(function(done) {
          $.get('/app/index.html', function(data) {
            result = data;
            done();
          });

        });

        it('has done the ajax call', function() {
          expect(result).to.include('<title>Homepage</title>');
        });

      });
    });

  });

});
