(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var movieList = document.getElementById("movieList");

            MovieData.movies.forEach(function(movie) {
                var item = document.createElement("li");
                item.innerHTML = "Title: " + movie.title;
                movieList.appendChild(item);
            });
        }
    });
})();
