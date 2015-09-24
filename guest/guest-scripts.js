$(document).ready(function () {

    $('#firstName').bind("change paste keyup", function () {
        if ($(this).val() !== '') {
            $('#firstNameHeader').html($(this).val()); 
        }
        else {
            $('#firstNameHeader').html('New');    
        }
    });

    $('#lastName').bind("change paste keyup", function () {
        if ($(this).val() !== '') {
            $('#lastNameHeader').html($(this).val()); 
        }
        else {
            $('#lastNameHeader').html('Guest');    
        }

    });
    
    
    
    
	$(function() {
		  $('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			  var target = $(this.hash);
			  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			  if (target.length) {
				$('html,body').animate({
				  scrollTop: target.offset().top + (-150)
				}, 1000);
				return false;
			  }
			}
		  });
		});

	
	$('#flyoutNavTrigger').click(function() {
		if ($('#flyoutNav').hasClass('closed')){
			$('#flyoutNav').removeClass('closed');
			$('#flyoutList').removeClass('displayNone');
			$('#flyoutNav span.glyphicon').removeClass('glyphicon-chevron-right');
			$('#flyoutNav span.glyphicon').addClass('glyphicon-chevron-left');
		}
		else{
			$('#flyoutNav').addClass('closed');	
			$('#flyoutList').addClass('displayNone');
			$('#flyoutNav span.glyphicon').addClass('glyphicon-chevron-right');
			$('#flyoutNav span.glyphicon').removeClass('glyphicon-chevron-left');
		}
		
	});

	
	$('#remarksTrigger').click(function() {
		if ($('#remarks').hasClass('closed')){
			$('#remarks').removeClass('closed');
			$('#remarksList').removeClass('displayNone');
			$('#remarks span.glyphicon').removeClass('glyphicon-chevron-right');
			$('#remarks span.glyphicon').addClass('glyphicon-chevron-left');
		}
		else{
			$('#remarks').addClass('closed');	
			$('#remarksList').addClass('displayNone');
			$('#remarks span.glyphicon').addClass('glyphicon-chevron-right');
			$('#remarks span.glyphicon').removeClass('glyphicon-chevron-left');
		}
		
	});
	
	$('#remarksTrigger2').click(function() {
		if ($('#remarks').hasClass('closed')){
			$('#remarks').removeClass('closed');
			$('#remarksList').removeClass('displayNone');
			$('#remarks span.glyphicon').removeClass('glyphicon-chevron-left');
			$('#remarks span.glyphicon').addClass('glyphicon-chevron-right');
		}
		else{
			$('#remarks').addClass('closed');	
			$('#remarksList').addClass('displayNone');
			$('#remarks span.glyphicon').addClass('glyphicon-chevron-left');
			$('#remarks span.glyphicon').removeClass('glyphicon-chevron-right');
		}
		
	});
	
	
	
});
