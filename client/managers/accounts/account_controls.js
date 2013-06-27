Template.accountControls.events = {
    'click .register-link': function(event) {
        event.preventDefault();

        if ($('.account-modal').is(':hidden')) {
            $('.account-modal').show();
            $('.account-modal .register').show();
        }
        else if($('.account-modal .register').is(':hidden')) {
            $('.account-modal .login').hide();
            $('.account-modal .register').show();
        }
        else {
            $('.account-modal').hide();
            $('.account-modal .register').hide();
        }
    },
    'click .login-link': function(event) {
        event.preventDefault();
        
        if ($('.account-modal').is(':hidden')) {
            $('.account-modal').show();
            $('.account-modal .login').show();
        }
        else if ($('.account-modal .login').is(':hidden')) {
            $('.account-modal .register').hide();
            $('.account-modal .login').show();
        }
        else {
            $('.account-modal').hide();
            $('.account-modal .login').hide();
        }

    },
    'click .logout-link': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
};
