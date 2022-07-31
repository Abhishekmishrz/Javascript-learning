// console.log("hello world")
// const numbers = [1,2,3];
// console.log(numbers)

// const moreNumbers = Array(5,2)
// console.log(moreNumbers)

// const moreNumber = Array(5)// it will give the array of  length and value is undefind or null
// console.log(moreNumber)

// const yetMoreNumbers = Array.of(1,2) // it will slower for preformance perspective
// console.log(yetMoreNumbers)
// const moreNumber= Array.from("Hello World"); // it is use to convert a string in  charactor of string ["hello"] to ["h","e","l","l","o"]
// console.log(moreNumber);

function convertArray(arr) {

    const copy = [];
    console.log(copy)

    arr.forEach( i => {
         let n=(i + 1) * arr[i];

         copy.push(n)
        
        
    });
    console.log(copy)

    return copy
}
const arr=[1, 2, 2, 3, 1, 2]
console.log(convertArray(arr))


