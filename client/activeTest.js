Meteor.startup(function() {
    Template.nav.rendered = function() {
        $('li a').first().addClass('active');
    };
});
