Meteor.publish('posts', function(limit) {
    return Posts.find({}, {sort: {submitted: -1}, limit:limit});
});

Meteor.publish('singlePost', function(id) {
    return id && Posts.find(id);
});

Meteor.publish('categories', function(limit) {

});

Meteor.publish('comments', function(postId) {
    return Comments.find({postId: PostId});
});
