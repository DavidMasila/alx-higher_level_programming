$(function()
{
    $("#toggle_header").click(function()
    {
        if($("header").hasClass("red")){
            $('header').addClass("green").removeClass("red"); 
        } else {
            $('header').addClass("red").removeClass("green"); 
        }
    });
});