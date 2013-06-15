Template.comment.helpers({
    timestamp: function() {
        return new Date(this.submitted).toString();
    }
});
