$(function()
{
    $("#btn_translate").click(function()
    {
        const input = $("#language_code").val();
        if(input.length === 2){
            $.getJSON(`https://stefanbohacek.com/hellosalut/?lang=${input}`, function(data) {
                $("#hello").text(data.hello)
            });
        } else {
            $("#hello").text("Check length of language code").css("color","red")
        }
    });
});
