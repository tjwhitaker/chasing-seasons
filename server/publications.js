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
    Meteor.posts.allow({
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
    Meteor.comments.allow({
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
    Meteor.categories.allow({
        insert: function(userId, doc) {
            return false;
        },
        update: function(userId, doc, fields, modifier) {
            return false;
        },
        remove: function(userId, doc) {
            return false;
        }
    });
});


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
