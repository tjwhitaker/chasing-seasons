Template.postItem.events({
	'click .save': function(event) {
		event.preventDefault();
		var currentUser = Meteor.user();
		Meteor.users.update({_id:currentUser._id}, {$push:{'profile.savedPosts': this}});
		console.log('saved: ' + this.title);
	},
	'click .share': function(event) {
		event.preventDefault();
		console.log('shared: ' + this.title);
	}
});