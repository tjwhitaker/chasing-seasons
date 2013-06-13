if (Posts.find().count() === 0) {
    Posts.insert({
        title: 'Chasing',
        author: 'Tim Whitaker'
    });
    Posts.insert({
        title: 'Seasons',
        author: 'Timothy Jay Whitaker'
    });

    for (i=0; i < 20; i++) {
        Posts.insert({
            title: 'Test Post #' + i,
            author: 'Tim'
        });
    }
}
