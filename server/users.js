Accounts.onCreateUser(function(options, user) {
	if (Meteor.users.find().count() === 0) {
		user.isAdmin = true;
	}
	else {
		user.isAdmin = false;
	}
	return user;
});