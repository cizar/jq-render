;(function(root, undefined) {

  'use strict';

  var pluginName = 'render';

  var $ = root.jQuery;

  if ('undefined' === typeof $) {
    if ('undefined' === typeof require) {
      $.error('The plugin "' + pluginName + '" requires jQuery');
    }
    $ = require('jquery');
  }
  var Handlebars = root.Handlebars;

  if ('undefined' == typeof Handlebars) {
    if ('undefined' === typeof require) {
      $.error('The plugin "' + pluginName + '" requires Handlebars');
    }
    Handlebars = require('handlebars');
  }

  $.fn[pluginName] = function(data, source) {
    if ('string' === typeof data) {
      source = data;
      data = {};
    }
    return this.each(function() {
      var template = $(this).data('template');
      source = source || $(this).html();
      if (source.length) {
        template = Handlebars.compile(source);
        $(this).data('template', template);
      }
      if (!template) {
        $.error('The view must be initialized first');
      }
      $(this).html(template(data));
    });
  };

}(this));
