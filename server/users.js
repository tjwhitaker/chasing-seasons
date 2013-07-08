Accounts.onCreateUser(function(options, user) {
	user.profile = options.profile || {};

	if (!Meteor.users.find().count()) {
		user.isAdmin = true;
	}
	else {
		user.isAdmin = false;
	}
	return user;
});