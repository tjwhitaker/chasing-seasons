handle = Meteor.subscribeWithPagination('posts', 10);
Meteor.subscribe('categories');
Meteor.subscribe('currentUser');
Meteor.subscribe('allUsers');
