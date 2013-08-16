Template.postItem.helpers({ 
	currentUserIsAdmin: function() {
		if (Meteor.user()) {
			return isAdmin(Meteor.userId());
		};
	},
	isSaved: function() {
		user = Meteor.user();

		if (user && _.where(user.profile.savedPosts, {_id: this._id}).length > 0)
			return true;
		return false;
	},
	isSharing: function() {
		if (this._id === Session.get('isSharing')) {return true;} 
		return false;
	}
});

Template.postItem.events({
	'click .save': function(event) {
		event.preventDefault();
		var currentUser = Meteor.user();

		Meteor.call('save', this, function(error, result) {
			if (error) {
				$(event.target).addClass('error');
				$(event.target).text('Error');
			}
		});
	},
	'click .share': function(event) {
		event.preventDefault();
		console.log(this);
		Session.set('isSharing', this._id);
	},
	'click .delete': function(event) {
		event.preventDefault();
		Meteor.call('deletePost', this);
	},
	'click .dim': function(event) {
		event.preventDefault();
		Session.set('isSharing', false);
	}
});