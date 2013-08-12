Comments = new Meteor.SmartCollection('comments');

Meteor.methods({
    comment: function(commentAttributes) {
        var user = Meteor.user();
        var post = Posts.findOne(commentAttributes.postId);
        
        if (!user)
            throw new Meteor.Error(401, 'You need to login to comment.');
        
        if (!commentAttributes.body)
            throw new Meteor.Error(422, 'Please write some content.');

        if (!commentAttributes.postId)
            throw new Meteor.Error(422, 'You must comment on a post.');
        
        comment = _.extend(_.pick(commentAttributes, 'postId', 'body'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime()
        });

        Posts.update(comment.postId, {$inc: {commentsCount: 1}});

        comment._id = Comments.insert(comment);
        
        return comment._id;
    },
    deleteComment: function(comment) {
        Comments.remove(comment._id);
    }
});
