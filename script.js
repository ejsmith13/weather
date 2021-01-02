


$(".city").on("click", function() {
    var city= $(this).attr("data-city")
    console.log(city)

    var queryURL= "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1e1b966716694bd21ec978c2606afbc8"

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        $("#fiveDayForecast").empty();

        $("#currentCity").text(response.city.name);
        $("#currentText").text(response.list[0].weather[0].description);
        console.log(response.list[0].weather[0].description);

        $("#fiveDayCity").text(response.city.name);

        for (var i=4 ; i < 37;) {
            var dayEl= $("<p>").text(response.list[i].dt_txt + " " + response.list[i].weather[0].description)
            console.log(response.list[i].dt_txt + " " + response.list[i].weather[0].description)
            $("#fiveDayForecast").append(dayEl)
            i= i + 8;

        };
       
      });

});

$("#searchBtn").on("click", function() {
    var city= $("#citySearch").val().trim().toLowerCase();
    console.log(city)

    var queryURL= "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=1e1b966716694bd21ec978c2606afbc8"

    $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);

        $("#fiveDayForecast").empty();

        $("#currentCity").text(response.city.name);
        $("#currentText").text(response.list[0].weather[0].description);
        console.log(response.list[0].weather[0].description);

        $("#fiveDayCity").text(response.city.name);

        for (var i=4 ; i < 37;) {
            var dayEl= $("<p>").text(response.list[i].dt_txt + " " + response.list[i].weather[0].description)
            console.log(response.list[i].dt_txt + " " + response.list[i].weather[0].description)
            $("#fiveDayForecast").append(dayEl)
            i= i + 8;

        };
       
      });

});

