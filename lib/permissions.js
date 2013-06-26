canEditUser = function(userId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canRemoveUser = function(userId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canPost = function(userId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canEditPost = function(userId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canRemovePost = function(userId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canComment = function(userId) {
    var user = Meteor.users.findOne(userId);
    return user ? true : false;
}
canEditComment = function(userId, commentId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
canRemoveComment = function(userid, commentId) {
    var user = Meteor.users.findOne(userId);
    return !!user.isAdmin;
}
