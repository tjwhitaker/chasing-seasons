Meteor.Router.add('/api/posts', function() {
    var posts = Posts.find().fetch();
    return JSON.stringify(posts);
});

Meteor.Router.add('/api/posts/:_id', function(id) {
    return JSON.stringify(Posts.findOne(id));
});
