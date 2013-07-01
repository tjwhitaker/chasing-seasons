Meteor.startup(function() {
	Session.setDefault('currentCategory', 'All');
	
	var currentCategory = Session.get('currentCategory');
	$('.categories li a:contains("' + currentCategory + '")').addClass('active');
});