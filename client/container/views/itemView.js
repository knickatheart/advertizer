(function(factory) {
	define(['backbone', 'lazyload'], factory);
}(function(Backbone, lazyload) {
	'use strict';

	return Backbone.View.extend({

		initialize: function(options) {
			_.bindAll(this, 'render');

			var _this = this;

			$.get('client/container/templates/itemTemplate.html').then(function(ItemTemplate) {
				_this.template = _.template(ItemTemplate);
				
				_this.render();
			}).then(function() {
				$('img.lazy').lazyload({
					effect : 'fadeIn'
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