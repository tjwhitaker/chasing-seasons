Template.admin.helpers({
	'users': function() {
		return Meteor.users.find();
	},
	'posts': function() {
		return Posts.find();
	},
});