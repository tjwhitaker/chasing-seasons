Deps.autorun(function() {
	Meteor.subscribe('posts', Session.get('currentCategory'));
	Meteor.subscribe('currentUser');
	Meteor.subscribe('allUsers');
});