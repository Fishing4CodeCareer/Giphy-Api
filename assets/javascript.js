


$("button").on("click", function() {
    var music = $(this).attr("data-music");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
music + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";


$.ajax({
url: queryURL,
method: "GET"
})

.then(function(response) {
  console.log(queryURL);

  console.log(response);
  
  var results = response.data;
  
  for (var i = 0; i < results.length; i++) {

                var musicDiv = $("<div>");
                var p = $("<p>").text("Rating: " + results[i].rating);
                var musicImage = $("<img>");
                musicImage.attr("src", results[i].images.fixed_height.url);

    
    musicDiv.append(p);
    musicDiv.append(musicImage);

   
    $("#gifs-appear-main").prepend(musicDiv);
  }
});
});