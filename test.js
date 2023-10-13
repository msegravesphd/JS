for (var input = 1; input <= 20; input++) {
    console.log(input);
   }

function isLeapYear(year) {
    if (
        year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    )
        console.log(" Input year:", year, "is a Leap Year");
    else
        console.log(
            " Input year:",
            year,
            "is NOT a Leap Year"
        );
}
 
let inputYear = 2023;
isLeapYear(inputYear);
inputYear = 2024;
isLeapYear(inputYear);

function printNumbers() {
    for( var i=1; i<=20; i++) {
        console.log( i+"" );
    }
}
printNumbers()