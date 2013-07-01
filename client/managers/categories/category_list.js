Template.categoryList.events({
	'click a': function(event) {
		var $this = $(event.target); 
		$('.categories li a').removeClass('active');
		$this.addClass('active');
		Session.set('currentCategory', $this.text());
	} 
});