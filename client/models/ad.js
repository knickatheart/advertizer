// Ad Model
(function(factory) {
	define(['underscore', 'backbone'], factory)
}(function(_, Backbone) {
	
	return Backbone.Model.extend({
		url: 'http://nodejsads.herokuapp.com/api/docs',

		defaults: {
			addons: '',
			default_order_type: '',
			id: '',
			lowest_price: '',
			name: '',
			next_bouquet_policy_id: '',
			shipping_options: '',
			single_only: '',
			skus: '',
			slug: ''
		}
	});

}));