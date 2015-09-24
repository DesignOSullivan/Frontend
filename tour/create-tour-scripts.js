$(document).ready(function() {
	
	$('#tourCode').bind("change paste keyup", function() {
	   if($(this).val() !== ''){
	   	$('#tourCodeHeader').html($(this).val()); 
	   }
	   else{
		   $('#tourCodeHeader').html('Tour Code');    
	   }
	});
	
	$('#tourName').bind("change paste keyup", function() {
	   if($(this).val() !== ''){
	   	$('#tourNameHeader').html($(this).val()); 
	   }
	   else{
		   $('#tourNameHeader').html('Tour Name');    
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
	
	
	$('#business-class-addon').change(function(){
		if ($('#business-class-addon-price').parent().is(':visible')) {
		  	$('#business-class-addon-price').parent().slideUp('');
		}
		else { 
		  	$('#business-class-addon-price').parent().slideDown('');
		}
		
		if ($('#business-class-addon-price').parent().hasClass('displayNone')) {
		  	$('#business-class-addon-price').parent().removeClass('displayNone');
		}
		
	});
	
	$('#premium-class-addon').change(function(){
		if ($('#premium-class-addon-price').parent().is(':visible')) {
		  	$('#premium-class-addon-price').parent().slideUp('');
		}
		else { 
		  	$('#premium-class-addon-price').parent().slideDown('');
		}
		
		if ($('#premium-class-addon-price').parent().hasClass('displayNone')) {
		  	$('#premium-class-addon-price').parent().removeClass('displayNone');
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
	
	
	
	
});