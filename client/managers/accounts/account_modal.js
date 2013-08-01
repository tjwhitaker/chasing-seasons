Template.accountModal.events = {
    'click .login': function(event) {
        var username = $('.username-field').val();
        var password = $('.password-field').val();
        Meteor.loginWithPassword(username, password, function() {
            $('.account-modal').hide();
            $('.account-modal .login').hide();
        });
    },
    'click .register': function(event) {
        var username = $('.username-field').val();
        var password = $('.password-field').val();
        Accounts.createUser({username:username, password:password}, function() {
            $('.account-modal').hide();
            $('.account-modal .register').hide();
        });
    },
    'keypress input': function(event) {
        if (event.which ===13) {
            var username = $('.username-field').val();
            var password = $('.password-field').val();
            if ($('.login').is(':visible')) {
                Meteor.loginWithPassword(username, password, function() {
                    $('.account-modal').hide();
                    $('.account-modal .login').hide();
                });
            }
            else if ($('.register').is(':visible')) {
                Accounts.createUser({username:username, password:password}, function() {
                    $('.account-modal').hide();
                    $('.account-modal .register').hide();
                });
            }
        }
    }
};
