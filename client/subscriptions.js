handle = Meteor.subscribeWithPagination('posts', 10);
Meteor.subscribe('allUsers');
Deps.autorun(function() {
	Meteor.subscribe('comments', Session.get('currentPostId'));
});