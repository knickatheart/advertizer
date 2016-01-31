(function(factory) {
	define(['client/container/collections/ads.js', 'client/container/views/itemView.js'], factory);
}(function(Ads, ItemView) {
	'use strict';

	return Backbone.View.extend({

		el: '#main-app-container',

		initialize: function(options) {
			_.bindAll(this, 'render', 'appendItem');

			var _this = this;

			$.get('client/container/templates/mainTemplate.html').done(function(MainTemplate) {
				_this.template = MainTemplate;
			});

			this.collection = new Ads();

			this.collection.fetch().done(function() {
				_this.render();

				_this.appendItem();
			});
		},

		render: function() {
			this.$el.html(_.template(this.template));

			return this;
		},

		appendItem: function() {
			$('.spinning').remove();

			_.each(this.collection.models, function(model) {
				new ItemView({
					model: model,
					el: '.item-container'
				});
			});
		}

	});

}));