displayName = function() {
    var user = Meteor.user();
    return user.username;
}