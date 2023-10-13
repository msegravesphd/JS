// function declaration syntax

// output of the function is called a return value

console.log( sum( 20, 19 ) );


function sum( x, y ) {
    var result = x + y;
    return result;
}

var result = sum( 12, 13 );
console.log( 'result is', result );


// function expression syntax (varaible declaratio and assignment)

var sum2 = function( x, y) {
    var result = x + y;
    return result;
};

console.log( sum2( 13, 14 ) );

// there are diffrences; they are not very important

// one difference; with the first, you can name the variable before the line of declaration and it will work. With the expression syntax, you cannot. (This relates to "hoisting"; we will learn this later)