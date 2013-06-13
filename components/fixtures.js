/*jshint jquery:true,browser:true */

(function (global, Fixtures) {
	"use strict";

	if (typeof require === "function" && typeof exports === "object" && typeof module === "object") {
		// NodeJS
		module.exports = Fixtures;
	} else if (typeof define === 'function' && define.amd) {
		define(function () {
			return Fixtures;
		});
	} else {
		global.fixtures = new Fixtures(global);
	}

})(this,
	(function(){
		"use strict";
		var
			fixturesCache = {},
			self = this;

		self.containerId = 'js-fixtures';
		self.path = 'spec/javascripts/fixtures';

		self.window = function () {
			var iframe = jQuery('iframe#' + self.containerId);
			if (!iframe) { return null; }

			return iframe.contents();
		};

		self.body = function () {
			return jQuery('iframe#' + self.containerId).contents().find('body').html();
		};

		self.set = function (html) {
			self.cleanUp();
			addToContainer(html);
		};

		self.appendSet = function (html) {
			addToContainer(html);
		};

		self.preload = function () {
			self.read.apply(self, arguments);
		};

		self.load = function () {
			self.cleanUp();
			createContainer(self.read.apply(self, arguments));
		};

		self.json = function (url) {
			var result = {};
			url = makeFixtureUrl(url);

			if (typeof fixturesCache[url] !== 'undefined') {
				return fixturesCache[url];
			}

			jQuery.ajax({
				url: url,
				async: false,
				cache: true,
				dataType: 'json',
				xhr: function(){
					var xhr = jQuery.ajaxSettings.xhr();
					xhr.overrideMimeType('application/json');
					return xhr;
				},
				success: function (data) {
					result = data;
				}
			});

			return result;
		};

		self.appendLoad = function () {
			addToContainer(self.read.apply(self, arguments));
		};

		self.read = function () {
			var htmlChunks = [],
				fixtureUrls = Array.prototype.slice.call(arguments);

			for (var urlCount = fixtureUrls.length, urlIndex = 0; urlIndex < urlCount; urlIndex++) {
				htmlChunks.push(getFixtureHtml(fixtureUrls[urlIndex]));
			}

			return htmlChunks.join('');
		};

		self.clearCache = function () {
			fixturesCache = {};
		};

		self.cleanUp = function () {
			jQuery('iframe#' + self.containerId).remove();
		};

		var createContainer = function (html) {
			var iframe = jQuery('<iframe/>', {
				'id': self.containerId,
				'src': 'javascript:false'
			});

			iframe.appendTo('body');

			var doc = iframe[0].contentDocument || iframe[0].contentWindow.document;
			doc.write(html);
			doc.close();
		};

		var addToContainer = function (html) {
			var container = jQuery('#' + self.containerId);

			if (!container.length) {
				createContainer(html);
			} else {
				container.contents().find('body').append(html);
			}
		};

		var getFixtureHtml = function (url) {
			if (typeof fixturesCache[url] === 'undefined') {
				loadFixtureIntoCache(url);
			}
			return fixturesCache[url];
		};

		var loadFixtureIntoCache = function (relativeUrl) {
			var url = makeFixtureUrl(relativeUrl),
				result = '';

			jQuery.ajax({
				'url': url,
				'async': false,
				'dataType': 'html',
				xhr: function () {
					var xhr = jQuery.ajaxSettings.xhr();
					xhr.overrideMimeType('text/html');
					return xhr;
				},
				'success': function (data) {
					result = data;
				},
				'cache': false
			});

			fixturesCache[relativeUrl] = result;
		};

		var makeFixtureUrl = function (relativeUrl) {
			return self.path.match('/$') ? self.path + relativeUrl : self.path + '/' + relativeUrl;
		};

		return self;
	})
);
