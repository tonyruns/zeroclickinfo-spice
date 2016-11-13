(function (env) {
    "use strict";

    env.ddg_spice_imdb_movies = function(api_result) {
        console.log(api_result);
        // Validate the response (customize for your Spice)
        if (!api_result || api_result.error || api_result.Response == "False" ) {
            return Spice.failed('imdb_movies');
        }

        // Render the response
        Spice.add({
            id: 'imdb_movies',

            // Customize these properties
            name: 'Movies',
            data: api_result,
            meta: {
                sourceName: 'IMDb',
                sourceUrl: ''
            },
            normalize: function(item) {
                var movieRating = parseFloat(item.imdbRating)/2.0;
                var movieAndYear = item.Title + " (" + item.Year + ")";

                return {
                    title: item.Title,
                    image: item.Poster,
                    img: item.Poster,
                    img_m: item.Poster,
                    heading: movieAndYear,
                    rating: movieRating,
                    ratingText: item.imdbVotes,
                    reviewCount: item.imdbVotes,
                    abstract: item.Plot
                    // runTime:
                };
            },
            templates: {
                group: 'movies',
                options: {
                    content: Spice.imdb_movies.content,
                    rating: true,
                    moreAt: true
                }
            }
        });
    };
}(this));
