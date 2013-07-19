canCreateUser = function(userId, doc) {
    return true;
}
canEditUser = function(userId, doc) {
    return (userId && doc.user_id === userId);
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
    return (userId && doc.user_id === userId);
}
canEditComment = function(userId, doc) {
    return isAdmin(userId);
}
canRemoveComment = function(userid, doc) {
    return isAdmin(userId);
}

isAdmin = function(userId) {
    var admin = Meteor.users.findOne({'username': 'tim'});
    return (userId && admin && userId === admin._id);
}