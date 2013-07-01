Template.postList.helpers({
    posts: function() {
        var category = Session.get('currentCategory');
        if (Session.equals('currentCategory', 'All')) {
            return Posts.find();
        } 
        else {
            return Posts.find({categories: category});
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
    'click .load-more': function(e) {
        e.preventDefault();
        handle.loadNextPage();
    }
});
