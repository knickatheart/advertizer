(function(factory) {
	define(['client/models/ad.js'], factory);
}(function(Ad) {

	return Backbone.Collection.extend({

		fetch: function() {
			var model = new Ad();

			return Backbone.Collection.prototype.fetch.call(this, {url: model.url});
		}

	});

}));