Template.postList.helpers({
    posts: function() {
        if (Session.equals('currentCategory', 'All')) {
            return Posts.find();
        } 
        else {
            return Posts.find({category: Session.get('currentCategory')});
        }
    },
    postsLoading: function() {
    	return !handle.ready();
    }
});

window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        if (Posts.find().count() >= handle.loaded()) {
            handle.loadNextPage();
        }
    }
};