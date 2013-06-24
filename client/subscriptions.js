handle = Meteor.subscribeWithPagination('posts', 10);
Meteor.subscribe('categories');
