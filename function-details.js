function foo( x, y, z ) {
    console.log( x, y, z );
    console.log( 'foo was called' );

    console.log( arguments ); 
    console.log(arguments [0], arguments [2], arguments [1], arguments [3]);
    console.log (arguments.length );
}

foo( 'hello', 'world', 'Good', 'morning' );

// argument object of a function

// 'arguments' is another data type (in additional to number, string and boolean)