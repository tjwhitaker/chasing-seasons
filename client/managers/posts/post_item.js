Template.postItem.helpers({
});

Template.postItem.events({
	'click .save': function(event) {
		event.preventDefault();
		console.log('save: ' + this.title);
	},
	'click .share': function(event) {
		event.preventDefault();
		console.log('share: ' + this.title);
	}
});