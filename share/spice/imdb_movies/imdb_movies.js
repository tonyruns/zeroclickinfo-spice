(function (env) {
    "use strict";

    env.ddg_spice_imdb_movies = function(api_result) {
        console.log(api_result);
        // Validate the response (customize for your Spice)
        if (!api_result || api_result.Response == "False" || api_result.Error || !api_result.Search.length) {
            return Spice.failed('imdb_movies');
        }
        
        // Get original query.
        var script = $('[src*="/js/spice/imdb_movies/"]')[0],
            source = $(script).attr("src"),
            query = decodeURIComponent(source.match(/imdb_movies\/([^\/]+)/)[1]);

        
        // Render the response
        Spice.add({
            id: 'imdb_movies',

            // Customize these properties
            name: 'Movies',
            data: api_result.Search,
            meta: {
                sourceName: 'IMDb',
                sourceUrl: 'http://www.imdb.com/find?ref_=nv_sr_fn&q=' + encodeURIComponent(query) + '&s=all',
                searchTerm: query,
                itemType: 'Movies'
            },
            normalize: function(item) {
                var movieRating = parseFloat(item.imdbRating)/2.0;
                var movieAndYear = item.Title + " (" + item.Year + ")";
                
                var poster = item.Poster === "N/A" ? DDG.get_asset_path("imdb_movies","no_image_available.png") : item.Poster;
                return {
                    title: item.Title,
                    image: poster,
                    img: poster,
                    img_m: poster,
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
//                     content: Spice.imdb_movies.content,
                    rating: true,
                    moreAt: true
                }
            }
        });
    };
}(this));
