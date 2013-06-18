define(['module', 'underscore', 'jquery'], function(module, _, $) {
  'use strict';

  var Obj = function(attrs) {
    attrs = attrs || {};
    var that = this;
    var bla = 42;

    // accessor method for the "private" attribute attrs
    this.get = function(key) {
      // event callback
      // use with $(instance).on('get', handlerFunction)
      $(that).trigger('get', {
        key: key
      });

      return attrs[key];
    };

    this.set = function(key, value) {
      attrs[key] = value;

      // event callback
      $(that).trigger('set', {
        key: key,
        value: value
      });

      return that;
    };
  };

  Obj.extend = function(content) {
    var NewClass = function(attrs) {
      // call parent constructor
      Obj.call(this, attrs);
    };

    // Set the prototype of the new class to the base class.
    // So we can call all methods of the parent class
    NewClass.prototype = new Obj();
    // but override the constructor of the new class with its own again
    NewClass.prototype.constructor = NewClass;

    // Use lodash #extend to easily put all instance attributes/methods to the
    // new prototype.
    _(NewClass.prototype).extend(content);

    return NewClass;
  };

  module.exports = Obj;
});
