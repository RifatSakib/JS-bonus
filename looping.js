/**
 * Looping Technique
 * for loop
 * while loop
 * do while ---> ignore
 * for of ---> array loop
 * for in ---> obj loop
 * 
 * 
 */

const friends = ['Elong', 'Bill', 'Mark', 'Waren'];

for( const friend of friends)
{
    // console.log( friend)
}


for( let i= 0; i < friends.length; i++){
    console.log( friends[i] );
}

const numbers = [1,23,24,54,6,787,555,775,3,5,3]

for( let i= 0; i < numbers.length; i++){
    console.log( numbers[i] );
}

let i = 0;
while( i < numbers.length){
    console.log( "from while loop" + numbers[i] );
    i++
}
