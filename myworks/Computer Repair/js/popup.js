$(document).ready(function() {
	var linkk = $('#text_center');
	var popup = $('.popup-none');
	var popup_close = $('#close');

	linkk.click(function(event) {
		popup.toggleClass('popup');
	});
	popup_close.click(function(event) {
		popup.removeClass('popup');
	});
});