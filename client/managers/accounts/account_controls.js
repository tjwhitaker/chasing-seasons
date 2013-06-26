Template.accountControls.events = {
    'click .logout': function(event) {
        event.preventDefault();
        Meteor.logout();
    }
};
