$(document).on("ready" function () {

//    DROPDOWN ADD PLACEHOLDER
    $(".k-dropdown span.k-input:contains('Select')").addClass("placeHolder");

//FOCUS ON FOCUS
    $("input").on("focus", function () {
        $(this).select();
   
});

//DROPDWON PLACEHOLDER REMOVER
$("#countries").on("change", function () {
    $(this).siblings("span").children(":contains('Select')").addClass("placeHolder");
    $(this).siblings("span").children().not(":contains('Select')").removeClass("placeHolder");
});
    
});

//CHARACTER COUNTDOWN
var maxLength = 255;
$(document).on("ready", function(){
    $('.chars').text(maxLength + " Remaining");


    $('textarea').on("keyup", function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        $(this).parent().find('.chars').text(length + " Remaining");
    });

});