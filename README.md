# jsp

A tool for processing files using Javascript one-liners

Are you a lazy person? Have you ever came across a situation where you thought
"well, I could write an one-liner for this in Javascript, but definetely not in
sed/awk/jq/vimscript etc..."? Well, say no more fam! `jsp` (stands for
JavaScript Pipes) is a super simple script in which you can pipe any text/JSON
you want, and transform it with a handy dandy one liner.

It also comes with a shorthand option `-j` to parse your input as JSON.

## Examples

    echo 'foobar' | jsp 'text => text.toUpperCase()'

    > FOOBAR

    echo '{"someNumbers":[1,2,3]}' | jsp -j 'json => json.someNumbers.map(n => n \* 2)'

    > [2, 4, 6]
