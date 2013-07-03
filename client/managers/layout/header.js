Template.header.events({
	'click .banner': function(event) {
		Session.set('currentCategory', 'All');
		$('.nav a').removeClass('active');
		$('.categories li a:contains("All")').addClass('active');
	}
});