Accounts.onCreateUser(function(options, user) {
    options.profile = {'savedPosts': []};
    if (options.profile)
    	user.profile = options.profile;
    return user;
});