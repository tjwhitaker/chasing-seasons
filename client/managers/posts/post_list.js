Template.postList.helpers({
    posts: function() {
        if (Session.equals('currentCategory', 'All')) {
            return Posts.find();
        } 
        else {
            return Posts.find({categories: Session.get('currentCategory')});
        }
    },
});