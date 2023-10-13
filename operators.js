// arithmetic operators
// var x = 12, y = 13
// console.log( 10 + 20 );
// console.log( x - y );
// console.log( x * y );
// console.log( x / y );
// console.log( x % y );
// console.log( y % x );
// % gives the remainder



// relational operators (for comparing 2 values) + can be used to add or join strings

// var isBefore = "hello" < "hi"; 
// console.log( isBefore );

// var isBefore = "hello" > "hi"; 
// console.log( isBefore );

// var isGreater = 10 > 9;
//console.log( isGreater );
//
//console.log( x <= y );
//console.log( x >= y );
//console.log( x == y );
//console.log( x != y );




// logical operators - these combine various boolean values, etc. (If this, then that, or else this or that, etc.)

// var isRaining = true, Goingbywalk = false, GoingbyCar = true;
// var takeumbrella = isRaining && Goingbywalk;
// console.log( takeumbrella );

// var priceofphone = 42000, bankbalance = 20000, friendsbank = 80000, interest = false;
// var willibuyphone = priceofphone < bankbalance && interest; 
// console.log( willibuyphone );

// console.log(priceofphone < bankbalance || priceofphone < friendsbank && interest );

// console.log( !true );


// || is the "or" logical operator
// && is the "and" logical operator
// ! is the "negation/not" logical operator

// miscellaneous operators

//var isRaining = true;
//console.log( typeof isRaining ); 

//var city = "Lodi";
//var isTrafficHuge = city === "Stockton" ? "Yes" : "No";
//console.log( isTrafficHuge );

// BODMAS or PEMDAS is the rule which defines the order of arithmetic operations

var num1 = 3, num2 = 7

var value = ( num1 + num2 ) >= 10 ? num1 : num2

console.log(value)
console.log(6 - 4 % 3 / 5 ** 2 * 3 )


// console.log( 1 + 2 + 3 * 4 ); // 1 + 2 + 12 








// var name = 'John', message = 'Good morning,';
// console.log( message + ' ' + name );
// console.log( 0.1 + 0.2 );

// console.log( 1 == "1" ); // type unspecific; this not often used
// console.log( 1 === "1" ); // type specific

// console.log( 1 !== "1" );
// console.log( 1 !== "1" ); // ! "not"

// var x = 40, y = 58;

// console.log("Both numbers are equal and have the same data type:", x===y );
// console.log("First number is greater than the second:", x > y );
// console.log("Second number is great than first number:", y > x );

// Operator precendence is about which gets evaluated first

// Relational operators are evaluated first; more precedence than logical operators. 

// The logical AND operator (&&) has higher precedence than the logical OR (||) operator. 

// var Saturday = false, Sunday = true; 
// var weekend = Saturday || Sunday;
// console.log("Today is during the weekend:", weekend );

// var freetime = true;

// console.log("Can I go to the park today", freetime && weekend && Sunday);
