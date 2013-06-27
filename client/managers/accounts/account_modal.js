Template.accountModal.events = {
    'click .login': function(event) {
        var email = $('.email-field').val();
        var password = $('.password-field').val();
        Meteor.loginWithPassword(email, password, function() {
            $('.account-modal').hide();
            $('.account-modal .login').hide();
        });
    },
    'click .register': function(event) {
        var email = $('.email-field').val();
        var password = $('.password-field').val();
        Accounts.createUser({email:email, password:password}, function() {
            $('.account-modal').hide();
            $('.account-modal .register').hide();
        });
    }
};
