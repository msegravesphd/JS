var days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
];
// square brackets set off an array; array items are separated by commas

console.log( days );
console.log( days [2] )

days[2] = 'Wed';


days[5] = 'Saturday';
days[10] = 'A Day in Mars';
console.log( days );
console.log( days[8] );

console.log( days.length );

var dummyArray = [
    'hello',
    1,
    true,
    null,
]

console.log( dummyArray );

// two-dimensional array; an item, within which is another item, etc.

var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14 ],
]


console.log ( matrix[1][2] );
console.log ( matrix[1] );
console.log ( matrix[2][4] );
console.log ( matrix[2][5] );

// code challenge
function calculateSquares(numbers){
    varsquares=[];
    for(vari=0;i<numbers.length;i++){
        varsquare=numbers[i]*numbers[i];
        squares.push(square);
    }
    return squares;
}
//Example usage:

var numbers=[1,2,3,4,5];
var squares=calculateSquares(numbers);
console.log(squares);