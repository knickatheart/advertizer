/**
 *	@author Luigi
 *	MainApp Module
 */
(function(factory) {
	define(['client/container/views/mainView.js', 'client/models/ad.js'], factory);
}(function(MainView, Ad) {

	var construct = function() {
		console.info('This Application will render information, based on API returned response, using Backbone principles.');

		new MainView({});
	}

	construct();

}));