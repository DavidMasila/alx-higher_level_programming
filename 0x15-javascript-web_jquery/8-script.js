$(function(){
    $.get("https://swapi-api.hbtn.io/api/films/?format=json", function(data, textStatus)
    {
        for(let i=0; i<data.results.length; i++) {
            $("#list_movies").append($("<li></li>").text(data.results[i].title))
        }
    })
})