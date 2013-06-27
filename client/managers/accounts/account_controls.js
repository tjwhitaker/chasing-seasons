Template.accountControls.events = {
    'click .register-link': function(event) {
        event.preventDefault();
        if ($('.account-modal').is(':hidden'))
        {
            $('.account-modal').show();
            $('.account-modal .register').show();
        }
    },
    'click .login-link': function(event) {
        event.preventDefault();
        if ($('.account-modal').is(':hidden'))
        {
            $('.account-modal').show();
            $('.account-modal .login').show();
        }

    },
    'click .logout-link': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
};
