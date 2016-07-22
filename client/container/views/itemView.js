(function(factory) {
	define(['backbone', 'lazyload'], factory);
}(function(Backbone, lazyload) {
	'use strict';

	return Backbone.View.extend({

		initialize: function(options) {
			_.bindAll(this, 'render', 'activateLazyLoad');

			var _this = this;

			$.get('client/container/templates/itemTemplate.html').then(function(ItemTemplate) {
				_this.template = _.template(ItemTemplate);
				
				_this.render();
			}).then(this.activateLazyLoad);
		},

		activateLazyLoad: function() {
			$(function() {
				$('img.lazy').lazyload({
					effect: 'fadeIn',
					threshold: 0
				});
			});
		},

		render: function() {
			if (this.model.get('skus').length) {
				this.$el.append(this.template(this.model.toJSON()));
			}

			return this;
		}

	});

}));