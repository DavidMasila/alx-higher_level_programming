$(function () {
    $('#btn_translate').click(translate);
    $('#language_code').focus(function () {
        $(this).keydown(function (e) {
            if (e.keyCode === 13) {
                translate();
            }
        });
    });
});

function translate () {
    const input = $("#language_code").val();
    if (input.length === 2) {
        $.getJSON(`https://stefanbohacek.com/hellosalut/?lang=${input}`, (data) => {
          $('#hello').text(`${data.hello}`);
        });
      }
}