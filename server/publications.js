Meteor.startup(function() {
    Meteor.users.allow({
        insert: function(userId, doc) {
            return canCreateUser(userId, doc);
        },
        update: function(userId, doc, fields, modifier) {
            return canEditUser(userId, doc);
        },
        remove: function(userId, doc) {
            return canRemoveUser(userId, doc);
        }
    });
    Posts.allow({
        insert: function(userId, doc) {
            return canPost(userId, doc);
        },
        update: function(userId, doc, fields, modifier) {
            return canEditPost(userId, doc);
        },
        remove: function(userId, doc) {
            return canRemovePost(userId, doc);
        }
    });
    Comments.allow({
        insert: function(userId, doc) {
            return canComment(userId, doc);
        },
        update: function(userId, doc, fields, modifier) {
            return canEditComment(userId, doc);
        },
        remove: function(userId, doc) {
            return canRemoveComment(UserId, doc);
        }
    });
});

Meteor.publish('posts', function(limit) {
    return Posts.find({}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('comments', function(postId) {
    return Comments.find({postId: postId});
});
Meteor.publish('allUsers', function() {
    return Meteor.users.find();
});