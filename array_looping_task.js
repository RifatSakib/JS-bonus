 /**
  * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
  */

const colors = ['red', 'blue', 'green', 'yellow', 'orange']
const reverse = [];

for (let i = 0; i < colors.length; i++) {
    const rev_color = colors[i];
     reverse.unshift(rev_color);
}

console.log(reverse);


/*

Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
*/

const numbers = [12, 98, 5, 41, 23, 78, 46];
const evenNumbers =[];
for (let i = 0; i < numbers.length; i++) {
    const num  = numbers[i];
    if (num % 2 === 0) {
        evenNumbers.push(num); 
        
    }

}

console.log(evenNumbers);


/**
 Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'


 */

var numbers2 = ['Tom', 'Tim', 'Tin', 'Tik'];
let newName = '';
for( const name of numbers2 ){
  newName += name;

}
console.log("'"+newName+"'");


/**
 Task 4 (Hard)
Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'

 */

const statement = 'I am a hard working person';
let newName2 = '';
const words = statement.split(' ');
console.log(words);
reversed_words = words.reverse();
console.log(reversed_words);

for( const name of reversed_words ){
  newName2 += name + " ";

}
console.log("'"+newName2+"'");