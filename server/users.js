Accounts.onCreateUser(function(options, user) {
    options.profile = {'savedPosts': [], 'premium': false};
    if (options.profile)
    	user.profile = options.profile;
    return user;
});