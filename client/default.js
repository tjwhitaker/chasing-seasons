Meteor.startup(function() {
	Session.setDefault('currentCategory', 'All');
	Session.setDefault('isSharing', false);
	
	var currentCategory = Session.get('currentCategory');
	$('.categories li a:contains("' + currentCategory + '")').addClass('active');

	filepicker.setKey("AeITdgrOxSWprEqfDtN9gz");
	filepicker.constructWidget(document.getElementById('attachment'));
});