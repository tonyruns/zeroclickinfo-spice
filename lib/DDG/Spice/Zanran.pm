package DDG::Spice::Zanran;
# ABSTRACT: Search for stastistical data

use strict;
use DDG::Spice;

spice to => 'http://www.zanran.com/search/simple_json?callback={{callback}}&q=$1';

triggers startend => 'zanran';

handle remainder => sub {
    $_ =~ s/"//g;
    return $_ if $_;
};

1;
