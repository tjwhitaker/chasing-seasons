Template.comment.helpers({
    timestamp: function() {
        return new Date(this.submitted).toString();
    },
    isOG: function() {
    	return Meteor.user().profile.og;
    }
});

Template.comment.events({
	'click .delete': function(event) {
		event.preventDefault();
		Meteor.call('deleteComment', this);
	}
})