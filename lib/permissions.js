canCreateUser = function(userId, doc) {
    return true;
}
canEditUser = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canRemoveUser = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canPost = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.profile.isAdmin;
}
canEditPost = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canRemovePost = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canComment = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return user ? true : false;
}
canEditComment = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canRemoveComment = function(userid, doc) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
