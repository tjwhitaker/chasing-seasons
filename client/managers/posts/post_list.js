Template.postList.helpers({
    posts: function() {
        return Posts.find();
    },

    postsReady: function() {
        return handle.ready();
    },

    allPostsLoaded: function() {
        return handle.ready() &&
            Posts.find().count() < handle.loaded();
    }
});

Template.postList.events({
    'click .load-more': function(e) {
        e.preventDefault();
        handle.loadNextPage();
    }
});
