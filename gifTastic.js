$(document).ready(function () {
    // Initial array of topics
    var topics = ["Acura", "infinti", "mercedez", "audi", "dodge", "chrysler", "bmw", "porsche", "accord", "jaguar", "Bentley", "ford", "hyundai", "honda", "Des Auto", "Chery", "subaru", "ford", "GMC"];
    /*  $('button').on('click', function () {
          var topics = $(this).data('display-name');
 
 
        /*  var api = "http://api.giphy.com";
          var endpoint = "/v1/gifs/search?";
          var apiKey = "&api_key=eQ1PPJDq0AsE4FSablzWEUKd8wS3bqBY"
          var query = "&q=cars&limit=10";*/


    // Function for displaying movie data
    function renderButtons() {

        // Deleting the movie buttons prior to adding new movie buttons
        // (this is necessary otherwise we will have repeat buttons)
        $("#topics-view").empty();

        // Looping through the array of cars
        for (var i = 0; i < topics.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class
            a.addClass("car-topic");
            // Adding a data-attribute with a value of the movie at index i
            a.attr("data-name", topics[i]);
            // Providing the button's text with a value of the movie at index i
            a.text(topics[i]);
            // Adding the button to the HTML
            $("#topics-view").append(a);
        }
    }



    // calling renderButtons which handles the processing of our topic array
    renderButtons();
});

// Calling the renderButtons function at least once to display the initial list of cars

$("#topics-view").on('click',"button",
 function() {
   console.log("click");



    var api = "http://api.giphy.com";
    var endpoint = "/v1/gifs/search?";
    var apiKey = "&api_key=eQ1PPJDq0AsE4FSablzWEUKd8wS3bqBY"
    var query = "&q=cars&limit=10";

    var queryURL = api + endpoint + apiKey + query;
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
    })
})


