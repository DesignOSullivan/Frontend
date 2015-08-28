$(document).ready(function() {
	
	$('#tourName').bind("change paste keyup", function() {
	   if($(this).val() !== ''){
	   	$('#tourNameHeader').html($(this).val()); 
	   }
	   else{
		   $('#tourNameHeader').html('Tour Name');    
	   }
	});
	
	$('#tourCode').bind("change paste keyup", function() {
	   if($(this).val() !== ''){
	   	$('#tourCodeHeader').html($(this).val()); 
	   }
	   else{
		   $('#tourCodeHeader').html('Tour Code');    
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
	
	

	//$($('.onoffswitch-switch').html() === 'yes' ? 'no' : 'yes');

	$('.onoffswitch-checkbox').click(function() {
		
		  if ($(this).is(':checked')) {
			$(this).siblings('.onoffswitch-switch').html('yes');
		  } else {
			$(this).siblings('.onoffswitch-switch').html('no');
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
		if ($('#flyoutList').hasClass('displayNone')){
			$('#flyoutList').removeClass('displayNone');
			$('#flyoutNav span.glyphicon').removeClass('glyphicon-chevron-up');
			$('#flyoutNav span.glyphicon').addClass('glyphicon-chevron-down');
		}
		else{
			$('#flyoutList').addClass('displayNone');	
			$('#flyoutNav span.glyphicon').addClass('glyphicon-chevron-up');
			$('#flyoutNav span.glyphicon').removeClass('glyphicon-chevron-down');
		}
		
	});
	
	
	
});
