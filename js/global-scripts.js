$(document).on("ready" function () {

    $(".k-dropdown span.k-input:contains('Select')").addClass("placeHolder");


    $("input").on("focus", function () {
        $(this).select();
   
});

$("#countries").on("change", function () {
    $(this).siblings("span").children(":contains('Select')").addClass("placeHolder");
    $(this).siblings("span").children().not(":contains('Select')").removeClass("placeHolder");
});
    
});