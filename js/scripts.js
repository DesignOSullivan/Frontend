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
	
});
