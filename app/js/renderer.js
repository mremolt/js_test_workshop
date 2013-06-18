define(['require', 'module', 'underscore', 'jquery'], function(require, module, _, $) {
  'use strict';

  var Renderer = function(templateName) {
    this.templateName = templateName;
  };

  Renderer.prototype.loadTemplate = function() {
    var templatePath = 'text!templates/' + this.templateName + '.html.ejs';
    var deferred = new $.Deferred();

    require([templatePath], function(html) {
      deferred.resolve(_.template(html));
    });

    return deferred.promise();
  };

  Renderer.prototype.renderTo = function(selector, context, callback) {
    $.when(this.loadTemplate()).done(function(template) {
      var result = template(context);
      $(selector).html(result);
      // if a callback function was given ...
      if (_(callback).isFunction() ) { callback(); }
    });
  };

  module.exports = Renderer;
});

