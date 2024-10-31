const persons = ['rakib', 'sakib', 'nokib', 'akib', 'dakib'];
const sortedPerson = persons.sort();
console.log(sortedPerson);

//sort --> ascending (choto theke boro) -->

const numbers = [4,7,12,8,43,6,1];
// const numbers_asc = numbers.sort();// not working properly 
const numbers_asc = [...numbers].sort(function(a,b){return a - b});


//descending --> (boro theke choto)

const numbers_dsc = [...numbers].sort(function(a,b){return b - a});
console.log(numbers_asc);

console.log(numbers_dsc);