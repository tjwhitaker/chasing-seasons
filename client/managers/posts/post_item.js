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

		//Meteor.users.update({_id:currentUser._id}, {$push:{'profile.savedPosts': this}});
		// Meteor.call('save', this, function(error, id) {
		// 	if (error) {
		// 		throwError(error.reason);
		// 	}
		// });
		
		console.log('saved: ' + this.title);
		
		$(event.target).addClass('saved');
		$(event.target).text('Saved!');
	},
	'click .share': function(event) {
		event.preventDefault();
		console.log('shared: ' + this.title);
	},
	'click .delete': function(event) {
		event.preventDefault();
		Posts.remove(this._id);
	}
});