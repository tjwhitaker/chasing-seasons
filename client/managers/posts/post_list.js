Template.postList.helpers({
    posts: function() {
        if (Session.equals('currentCategory', 'All')) {
            return Posts.find();
        } 
        else {
            return Posts.find({category: Session.get('currentCategory')});
        }
    },
    postsReady: function() {
    	return handle.ready();
    },
    allPostsLoaded: function() {
    	return handle.ready() && Posts.find().count() < handle.loaded();
    }
});

Template.postList.events({
	'click .load-more' : function(e) {
		e.preventDefault();
		handle.loadNextPage();
	}
});