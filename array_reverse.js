const numbers = [1,2,3,4,5,6,7];
// method- 1
console.log(numbers);
numbers.reverse();
console.log(numbers); 


// method- 2
const numbers2 = [1,2,3,4,5,6,7];
const rev_numbers = [];
for (const num of numbers2) {
    // console.log(num);
    rev_numbers.unshift(num);
}

console.log(rev_numbers);


// method 3
const reversed_numbers =[];
for (let i = 0; i < numbers2.length; i++) {
    const num = numbers2[i];
    reversed_numbers.unshift(num);

}
console.log(reversed_numbers);

//method- 4

const rev_num2 = []
for (let i = numbers2.length - 1; i >= 0; i--) {

    const num = numbers2[i];
    // console.log(num);
     rev_num2.push(num);

}

console.log(rev_num2);



