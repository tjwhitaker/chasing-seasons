Template.profile.helpers({
	savedPosts: function() {
		return Meteor.user().profile.savedPosts;
	},
	isLast: function(index) {
		return index%3 ? false : true;
	},
	eachWithIndex: function(array, fn) {
		var buffer = '';
		for (var i=0, j=array.length; i < j; i++) {
			var item = array[i];
			item.index = i+1;
			buffer += fn(item);
		}
		return buffer;
	}
});