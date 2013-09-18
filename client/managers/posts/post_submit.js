Template.postSubmit.events({
    'submit form': function(e) {
        e.preventDefault();

        var post = {
            url: $(e.target).find('[name=url]').val(),
            title: $(e.target).find('[name=title]').val(),
            description: $(e.target).find('[name=description]').val(),
            price: $(e.target).find('[name=price]').val(),
            category: $(e.target).find('[name=category]').val(),
            image: image //shitty global var
        }

        Meteor.call('post', post, function(error, id) {
            if (error) {
                throwError(error.reason);
                if (error.error === 302)
                    Meteor.Router.to('postPage', error.details)
            } 
            else {
                Meteor.Router.to('postPage', id);
            }
        });
    },
    'change #attachment': function(e) {
        console.log(e.files);
        image = e.files[0].url;
        console.log(image);
    }
});
