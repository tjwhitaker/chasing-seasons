Template.profile.helpers({
	savedPosts: function() {
		return Meteor.user().profile.savedPosts;
	}
});