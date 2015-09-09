$(document).ready(function() {

    $('#firstName').bind("change paste keyup", function() {
        if($(this).val() !== ''){
            $('#fistNameHeader').html($(this).val()); 
        }
        else{
            $('#firstnameHeader').html('Tour Code');    
        }
    });

    $('#lastName').bind("change paste keyup", function() {
        if($(this).val() !== ''){
            $('#lastNameHeader').html($(this).val()); 
        }
        else{
            $('#lastNameheader').html('Tour Name');    
        }

    });


	$('#pre-tour-toggle').change(function(){
		if ($('#pre-tour-tab-link').hasClass('displayNone')) {
		  	$('#pre-tour-tab-link').removeClass('displayNone');
		}
		else { 
		  	$('#pre-tour-tab-link').addClass('displayNone');
		}
	});
	
	$('#post-tour-toggle').change(function(){
		if ($('#post-tour-tab-link').hasClass('displayNone')) {
		  	$('#post-tour-tab-link').removeClass('displayNone');
		}
		else { 
		  	$('#post-tour-tab-link').addClass('displayNone');
		}
	});
	
	
	$('#aux-6').change(function(){
		if ($('#visa-notes').is(':visible')) {
		  	$('#visa-notes').slideUp('');
		}
		else { 
		  	$('#visa-notes').slideDown('');
		}
		
		if ($('#visa-notes').hasClass('displayNone')) {
		  	$('#visa-notes').removeClass('displayNone');
		}
		
	});
	$('#aux-5').change(function(){
		if ($('#inoculations-notes').is(':visible')) {
		  	$('#inoculations-notes').slideUp('');
		}
		else { 
		  	$('#inoculations-notes').slideDown('');
		}
		
		if ($('#inoculations-notes').hasClass('displayNone')) {
		  	$('#inoculations-notes').removeClass('displayNone');
		}
		
	});
	
	$('#alt-return-date-toggle').change(function(){
		if ($('#alt-return-date').is(':visible')) {
		  	$('#alt-return-date').slideUp('');
		}
		else { 
		  	$('#alt-return-date').slideDown('');
		}
		
		if ($('#alt-return-date').hasClass('displayNone')) {
		  	$('#alt-return-date').removeClass('displayNone');
		}
		
	});
	
	
	$('#cabin-upgrade-toggle').change(function(){
		if ($('#cabin-upgrade').is(':visible')) {
		  	$('#cabin-upgrade').slideUp('');
		}
		else { 
		  	$('#cabin-upgrade').slideDown('');
		}
		
		if ($('#cabin-upgrade').hasClass('displayNone')) {
		  	$('#cabin-upgrade').removeClass('displayNone');
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
	
	
	
});
