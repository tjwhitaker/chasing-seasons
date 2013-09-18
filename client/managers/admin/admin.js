Template.admin.helpers({
	'users': function() {
		return Meteor.users.find();
	},
	'posts': function() {
		return Posts.find();
	},
});
Template.admin.events({
	'click .delete': function(e) {
		e.preventDefault();
		Meteor.call('deletePost', this);
	},
	'click .edit': function(e) {
		e.preventDefault();
	}
});