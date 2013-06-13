if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Meteor',
        author: 'Tim'
    });
    Posts.insert({
        title: 'Chasing',
        author: 'Tim Whitaker'
    });
    Posts.insert({
        title: 'Seasons',
        author: 'Timothy Jay Whitaker'
    });
}
