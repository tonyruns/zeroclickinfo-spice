(function (env) {
    "use strict";

    env.ddg_spice_imdb_movies = function(api_result) {

        // Validate the response (customize for your Spice)
        if (!api_result || api_result.error) {
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
                return {
                    title: item.Title + " (" + item.Year + ")",
                    image: item.Poster,
                    img: item.Poster,
                    img_m: item.Poster,
                    heading: item.Title,
                    rating: item.imdbRating,
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
