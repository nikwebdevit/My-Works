$(document).ready(function() {
	var link = $('.menu-burger');
	var menu = $('.fixed_menu_none');
	var menu_close = $('#first_el');

	link.click(function(event) {
		menu.toggleClass('fixed_menu');
	});
	menu_close.click(function(event) {
		menu.removeClass('fixed_menu');
	});
});