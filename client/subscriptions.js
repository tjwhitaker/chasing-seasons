Deps.autorun(function() {
	Meteor.subscribe('posts', Session.get('currentCategory'));
	Meteor.subscribe('comments', Session.get('currentPostId'));
});