Template.footer.helpers({ 
	currentUserIsAdmin: function() {
		if (Meteor.user()) {
			return isAdmin(Meteor.userId());
		};
	}
});