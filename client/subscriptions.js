Deps.autorun(function() {
	Meteor.subscribe('posts', Session.get('currentCategory'));
});