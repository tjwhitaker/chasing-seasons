displayName = function() {
    var user = Meteor.user();
    return user.emails[0].address;
}
