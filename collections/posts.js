Posts = new Meteor.Collection('posts');

Meteor.methods({
    post: function(postAttributes) {
        var user = Meteor.user();
        
        if (!user) 
            throw new Meteor.Error(401, "You need to login to post new stories!");

        if (!postAttributes.title)
            throw new Meteor.Error(422, 'Please fill in a headline');

        if (!postAttributes.description)
            throw new Meteor.Error(422, 'Please write a description');

        if (!postAttributes.price)
            throw new Meteor.Error(422, 'Please name a price');

        if (!postAttributes.url)
            throw new Meteor.Error(422, 'Please enter a url');

        var post = _.extend(_.pick(postAttributes, 'url', 'title', 'description', 'price', 'image', 'categories'), {
            userId: user._id,
            author: user.username,
            submitted: new Date().getTime(),
            commentsCount: 0
        });

        if (isAdmin(user._id)) {
            var postId = Posts.insert(post);
            return postId;
        } 
        else {
            return 0;
        }
    }
});
