// function palindromeNumber(n){
//     // let sum=0,temp;
//     // while(n>0){
//     //     let r=n%10
//     //     sum =(sum/10)+r
//     //     n=n/10
//     //     if(temp==sum){
//     //         console.log("palindromeNumber ")
//     //     }else{
//     //         console.log("Not palindromeNumber")
//     //     }
//     // }
//     let num = n.split(" ") 
//     console.log(num)

// const { url } = require("inspector");


// }
// console.log(palindromeNumber(151))
// function fun1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             const error=true;
//             if(!error){
//                 console.log("functin: your function is resolved")
//                 resolve()
//             }else{
//                 console.log("functin: your function is not resolved")
//                 reject('');
//         }
//         },2000)
//     })
// }
// fun1().then(function(){
//     console.log("abhi: your problem has been resolved")
// }).catch(function(){
//     console.log("abhi: your probise is not rsolved")
// })
// function getData(){
//     url ="https://api.github.com/users"
//     fetch(url).then(function(response){
//         return response.json()
//     }).then(function(data){
//         console.log(data)
//     })
// }
// getData();
// function postData(){
//     url ="https://dummy.restapiexample.com/api/v1/create"
//     data='{"name":"Abhishek","salary":"123","age":"23"}'
//     params={
//         method:"post",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:data
//     }
//     fetch(url,params).then(function(response){
//         return response.json()
//     }).then(function(data){
//         console.log(data)
//     })
// }
// postData();
async function abhishek(){
    let response = await fetch("https://api.github.com/users")
    let users=await response.json()
    return users
}
let a=abhishek()
console.log(a)
a.then(function(data){
    console.log(data)
})
