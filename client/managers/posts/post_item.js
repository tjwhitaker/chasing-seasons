Template.postItem.helpers({ 
	currentUserIsAdmin: function() {
		if (Meteor.user()) {
			return isAdmin(Meteor.userId());
		};
	}
});

Template.postItem.events({
	'click .save': function(event) {
		event.preventDefault();
		var currentUser = Meteor.user();

		if (Meteor.call('save', this))
		{
			$(event.target).addClass('saved');
			$(event.target).text('Saved!');
			console.log('Saved: ' + this.title);
		}
		else {
			$(event.target).text('Error');
			console.log('Error saving: ' + this.title);
		}
	},
	'click .share': function(event) {
		event.preventDefault();
		console.log('shared: ' + this.title);
	},
	'click .delete': function(event) {
		event.preventDefault();
		Meteor.call('deletePost', this);
	}
});