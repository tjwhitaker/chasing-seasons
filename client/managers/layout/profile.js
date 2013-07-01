Template.profile.helpers({
	savedPosts: function() {
		return Posts.find();
	}
});