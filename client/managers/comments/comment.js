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

Template.comment.events({
	'click .delete': function(event) {
		event.preventDefault();
		Meteor.call('deleteComment', this);
	}
})