Template.comment.helpers({
    timestamp: function() {
        return new Date(this.submitted).toString();
    }
});

Template.comment.events({
	'click .delete': function(event) {
		event.preventDefault();
		Meteor.call('deleteComment', this);
	}
})