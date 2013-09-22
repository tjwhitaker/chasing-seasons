Accounts.onCreateUser(function(options, user) {
    options.profile = {'savedPosts': [], 'premium': false, 'og': false};
    
    if (Meteor.users.find().count() < 50)
    	options.profile.og = true;
    
    if (options.profile)
    	user.profile = options.profile;
    
    return user;
});