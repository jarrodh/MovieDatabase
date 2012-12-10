(function () {
    "use strict";

    var moviesArray = [
        { title: "Skyfall", released: new Date("30 November 2012"), duration: 143 },
        { title: "Wreck-It Ralph", released: new Date("2 November 2012"), duration: 101 },
        { title: "Flight", released: new Date("2 November 2012"), duration: 138 },
        { title: "Argo", released: new Date("12 October 2012"), duration: 120 },
        { title: "Taken 2", released: new Date("12 October 2012"), duration: 92 }
    ];
    
    var moviesList = new WinJS.Binding.List(moviesArray);
    
    WinJS.Namespace.define("MovieData", {
        movies: moviesArray,
        moviesList: moviesList
    });
})();