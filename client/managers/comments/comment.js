Template.comment.helpers({
    timestamp: function() {
        return new Date(this.submitted).toString();
    },
	currentUserIsAdmin: function() {
		if (Meteor.user()) {
			return isAdmin(Meteor.userId());
		};
	}
});

