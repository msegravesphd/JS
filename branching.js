// var priceofphone = 42000, bankbalance = 20000, creditlimit = 30000;

// if( priceofphone < bankbalance ) {
   //  console.log( 'all ok. process payment' )
// } else if( priceofphone < creditlimit ) {
    // console.log( 'Bank payment failed. Credit card will be used.')
// } else {
//     console.log( 'sorry, you do not have sufficient funds' );
// }

// console.log( 'transaction over' );



// var priceofphone = 30000, bankbalance = 25000;

// if( priceofphone <= bankbalance ) 
   //  console.log( 'I can buy the phone' )
 // else ( priceofphone > bankbalance ) 
    // console.log( 'I cant buy the phone'); 

// var creditlimit = 3000;

// if( priceofphone <= creditlimit + bankbalance) {
   //  console.log("I can buy the phone now")
// } else {var leftAmount = priceofphone - bankbalance - creditlimit;
 //    console.log ("The money required is: ",leftAmount );
// }





// else {
    // console.log( 'sorry, you do not have sufficient funds' );
//}

// console.log( 'transaction over' );

var chocolate = "Hersheys", quantity;
switch( chocolate ) {
    case "Dairy Milk":
    quantity = 5;
    break;
    case "Hersheys":
    quantity = 50;
    break;
    case "Toblerone":
    quantity = 1;
    break;
    default:
    quantity = 2;
}

console.log( quantity );

// to prevent default variable errors (e.g., if you misspell a variable, etc.), you can put in 'use strict'; or "use strict"; as a string. This will bring up an error which will help you identity the spelling error, etc.