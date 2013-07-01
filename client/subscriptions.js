handle = Meteor.subscribeWithPagination('posts', 10);
Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');

Meteor.startup(function() {
	Session.setDefault('currentCategory', 'all');
});