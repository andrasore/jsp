# jsp

A tool for processing files using Javascript one-liners

Are you a lazy person? Have you ever came across a situation where you thought
"Well, I could whip out my trusty sed/awk/jq/perl etc. for an one-liner,
but gosh, Javascript would be so much easier..."? Well, say no more fam! `jsp`
(stands for JavaScript Pipes) is a super simple script into which you can pipe any
text/JSON you want, and transform the lines with a Javascript function.

It also comes with a shorthand option `-j` to parse your input as JSON.

Pro tip: You can use `lodash` inside your transform function.

    Usage: jsp [options] <pipe function>

    Options:

    -j : Parse input file as JSON
    -s : Read whole input as a single string

    Pipe function should parse to a valid Javascript function.

## Examples

    echo 'foobar' | jsp 'text => text.toUpperCase()'

    > FOOBAR

    echo '{"someNumbers":[1,2,3]}' | jsp -j 'json => json.someNumbers.map(n => n * 2)'

    > [2, 4, 6]

    echo '["ding", "dong"]' | jsp -j 'json => _.reverse(json)'

    > ["dong", "ding"]
