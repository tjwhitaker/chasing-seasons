Template.postShare.helpers({ 
	encodedURI: function() {
		return encodeURIComponent(Meteor.Router.postPageUrl(this));
	}
});