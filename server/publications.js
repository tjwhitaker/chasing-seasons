Meteor.publish('allUsers', function() {
    //if admin, publish all fields
    if (this.userId && isAdmin(this.userId)) {
        return Meteor.users.find();
    }
    //else hide sensitive info
    else {
        return Meteor.users.find({}, {fields: {
            isAdmin: false
        }});
    }
});

Meteor.publish('posts', function(limit) {
    return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('categories', function(limit) {
    return Categories.find({}, {sort: {title:1}, limit: limit});
});

Meteor.publish('comments', function(postId) {
    return Comments.find({postId: postId});
});
