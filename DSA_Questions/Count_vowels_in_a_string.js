// function countVowels(word) {
    
// }
// function oddNumbers(N){
   
//     let s = " ";
// for (let i = 1; i <= N; i++) {
  
//   if (i%2!=0) {
//     s += i.toString();
//     s+= ' ';
//   }
  
// }
// console.log(s);

// }
// oddNumbers(5)
// // console.log(oddNumbers(5))


function findLargestNumber(a, b, c) {
    if(a>=b && a>=c){
        return a;
    } if (b>=c){
        return b
    }else {
        return c
    }
}
console.log(findLargestNumber(1.111,1.112,-2))

 