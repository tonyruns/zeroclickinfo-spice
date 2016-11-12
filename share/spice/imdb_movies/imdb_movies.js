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
                sourceName: 'Example.com',
                sourceUrl: 'http://example.com/url/to/details/' + api_result.name
            },
            normalize: function(item) {
                return {
                    title: "Hi",
                    url: 'www.google.com',
                    points: 0,
                    num_comments: 0
                };
            },
            templates: {
                group: 'text',
                options: {
                },
                detail: false,
                item_detail: false,
                variants: {
                    tileTitle: "3line-small",
                    tileFooter: "3line"
                }
            }
        });
    };
}(this));
