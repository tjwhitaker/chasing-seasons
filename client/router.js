Meteor.Router.add({
    '/': {to: 'postList', as: 'home'},
    '/posts/:id': {
        to: 'postPage',
        and: function(id) { Session.set('currenPostId', id); }
    },
    '/posts/:id/edit': {
        to: 'postEdit',
        and: function(id) { Session.set('currentPostId', id); }
    },
    '/submit': 'postSubmit'
});

Meteor.Router.filters({
    'requireLogin': function(page) {
        if (Meteor.user())
            return page;
        else if (Meteor.loggingIn())
            return 'loading';
        else
            return 'accessDenied';
    },
    'clearErrors': function(page) {
        clearErrors();
        return page;
    }
});

Meteor.Router.filter('clearErrors');
