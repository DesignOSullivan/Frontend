


    $(document).ready(function () {

    $(".k-dropdown span.k-input:contains('Select')").addClass("placeHolder");


    $("input").on("focus", function () {
        $(this).select();
    });
});

$("input").on("change", function () {
    $(this).siblings("span").children(":contains('Select')").addClass("placeHolder");
    $(this).siblings("span").children().not(":contains('Select')").removeClass("placeHolder");
});

//-----------------GLOBAL^^^^^^-------------

$(document).ready(function () {

    $('#firstName').bind("change paste keyup", function () {
        if ($(this).val() !== '') {
            $('#firstNameHeader, #guestNameNewRes, #guestNameNewSIG').html($(this).val()); 
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

	
//	$('#flyoutNavTrigger').click(function() {
//		if ($('#flyoutNav').hasClass('closed')){
//			$('#flyoutNav').removeClass('closed');
//			$('#flyoutList').removeClass('displayNone');
//			$('#flyoutNav span.glyphicon').removeClass('glyphicon-chevron-right');
//			$('#flyoutNav span.glyphicon').addClass('glyphicon-chevron-left');
//		}
//		else{
//			$('#flyoutNav').addClass('closed');	
//			$('#flyoutList').addClass('displayNone');
//			$('#flyoutNav span.glyphicon').addClass('glyphicon-chevron-right');
//			$('#flyoutNav span.glyphicon').removeClass('glyphicon-chevron-left');
//		}
//		
//	});

	
//	$('#remarksTrigger2').click(function() {
//		if ($('#remarks').hasClass('closed')){
//			$('#remarks').removeClass('closed');
//			$('#remarksList').removeClass('displayNone');
//            $('#remarks i.fa').removeClass('fa-chevron-left');
//            $('#remarks i.fa').addClass('fa-chevron-right');
//		}
//		else{
//			$('#remarks').addClass('closed');	
//			$('#remarksList').addClass('displayNone');
//            $('#remarks i.fa').addClass('fa-chevron-left');
//            $('#remarks i.fa').removeClass('fa-chevron-right');
//		}
//		
//	});	
//	$('#remarksTrigger2').click(function() {
//		if ($('#remarks').hasClass('closed')){
//			$('#remarks').removeClass('closed');
//			$('#remarksList').removeClass('displayNone');
//            $('#remarks i.fa').removeClass('fa-chevron-left');
//            $('#remarks i.fa').addClass('fa-chevron-right');
//		}
//		else{
//			$('#remarks').addClass('closed');	
//			$('#remarksList').addClass('displayNone');
//            $('#remarks i.fa').addClass('fa-chevron-left');
//            $('#remarks i.fa').removeClass('fa-chevron-right');
//		}
//		
//	});
	
	
	
	
});
