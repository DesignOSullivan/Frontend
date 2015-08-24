$(document).ready(function() {
	
    $('a[rel*=external]').click( function() {
        window.open(this.href);
        return false;
    });
	
	$('.fancybox').fancybox();
	
	// adding responsive stuff to some basic elements
	$('table').addClass('table table-striped table-bordered').removeAttr('border').removeAttr('cellpadding').removeAttr('cellspacing').wrap("<div class='table-responsive'></div>");
	$('iframe').addClass('embed-responsive-item').wrap("<div class='embed-responsive embed-responsive-16by9'></div>");
	$('embed').addClass('embed-responsive-item').wrap("<div class='embed-responsive embed-responsive-16by9'></div>");
	$('object').addClass('embed-responsive-item').wrap("<div class='embed-responsive embed-responsive-16by9'></div>");
	
	
	$(function(){
		$('.dropdown').hover(function() {
			 $(this).toggleClass('open');
		});
	});
	
});
