Template.nav.helpers({
    currentPageIsProfile: function() {
        return Meteor.Router.page() == "profile";
    },
});
