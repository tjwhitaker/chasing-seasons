canCreateUser = function(userId, doc) {
    return true;
}
canEditUser = function(userId, doc) {
    return isAdmin(userId);
}
canRemoveUser = function(userId, doc) {
    return isAdmin(userId);
}
canPost = function(userId, doc) {
    return isAdmin(userId);
}
canEditPost = function(userId, doc) {
    return isAdmin(userId);
}
canRemovePost = function(userId, doc) {
    return isAdmin(userId);
}
canComment = function(userId, doc) {
    var user = Meteor.users.findOne(userId);
    return user ? true : false;
}
canEditComment = function(userId, doc) {
    return isAdmin(userId);
}
canRemoveComment = function(userid, doc) {
    return isAdmin(userId);
}

isAdmin = function(userId) {
    var admin = Meteor.users.findOne({'emails.address': 'tmwhtkr@gmail.com'});
    return (userId && admin && userId === admin._id);
}