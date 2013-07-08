isAdmin = function(userId) {
    var user = Meteor.users.findOne(userId);
    if(!user || typeof user === 'undefined')
        return false;
    return !!user.profile.isAdmin;
}
