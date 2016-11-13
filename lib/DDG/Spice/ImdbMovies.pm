package DDG::Spice::ImdbMovies;

# ABSTRACT: Write an abstract here

# Start at http://docs.duckduckhack.com/walkthroughs/forum-lookup.html if you are new
# to instant answer development

use DDG::Spice;
use strict;
use warnings;

# Caching - http://docs.duckduckhack.com/backend-reference/api-reference.html#caching
spice is_cached => 1;
spice proxy_cache_valid => '200 1d'; # defaults to this automatically

spice wrap_jsonp_callback => 1; # only enable for non-JSONP APIs (i.e. no &callback= parameter)

# API endpoint - http://docs.duckduckhack.com/walkthroughs/forum-lookup.html#api-endpoint
spice to => 'http://www.omdbapi.com/?t=$1&y=&plot=short&r=json';

# Triggers - https://duck.co/duckduckhack/spice_triggers
triggers end => 'ratings', 'film';
triggers startend => 'imdb';

# Handle statement
handle remainder => sub {

    # Query is in $_ or @_, depending on the handle you chose...if you
    # need to do something with it before returning
    my $find = "%20";
    my $replace = "+";
    my $title = join( $replace, split($find, $_) );
    return $title;
};

1;
