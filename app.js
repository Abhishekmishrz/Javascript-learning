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

// const listItems = document.querySelectorAll("li")
// console.log(listItems);

// const ArraylistItem = Array.from(listItems)
// console.log(ArraylistItem)

// const hobbies = ['cooking', 'sports'];
// const personalData = [30, 'name', { moreDetail: [] }]
// const analyticData = [[1, 2, 3], [-5, 4, 2.11]];

// for(const data of analyticData){
//     for(const datapoint of data){
//         console.log(datapoint)
//     }
// }
// console.log(analyticData[1])

// const hobbies =['sports', 'cooking']
// const pushed =hobbies.push('reading')// in the push we push the item in array end of the array
// console.log(hobbies)
// console.log(pushed)
// const unshifted = hobbies.unshift("read")// In the unshift we add item in 0th position of array
// console.log(hobbies)
// console.log(unshifted);
// hobbies.pop()//In the pop we add item in last position of array
// console.log(hobbies)
// const shifted = hobbies.shift()// it is use to move all element of array from the left side 1=>0 postion
// console.log(hobbies)
// console.log(shifted)

// hobbies[1]='coding'
//hobbies[5]='jumping' //rarely used
// console.log(hobbies)

// const removedElement= hobbies.splice(1,2,"good")// here 1 denote which index good placed and 2 denote after placeing the good in the index 1 after that delete 2 elem after this element 
//  hobbies.splice(1)// it means all elements to be deleted after  array index 1
// console.log(hobbies)
// console.log(removedElement)

// -------------if we want to delete last element in the array then we use -1
// const removeItem = hobbies.splice(-1,1)
// console.log(hobbies)
// console.log(removeItem)

const testResults =[1,5.3,1.5,10.99,-5,1.5,10]

/*------- slice methos is used to copy any array like here slice is used to copy testResults array----*/
// const storeResults = testResults.slice(0,1)//also slice is to select any array slice(0,1) then the out put is [1,5.3]
// const storedResults = testResults.concat(3.99,654,8.55);
// // testResults.push(5.6)

// console.log(testResults,storedResults)
// console.log(testResults.indexOf(1.5))
// console.log(testResults.lastIndexOf(1.5))
/*----------includes-----------*/
// console.log(testResults.includes(10.99))
// /*----------includes-----------*/
// console.log(testResults.indexOf(10.99))

// const personData =[{name: 'abhishek'},{name: 'mishra'}]
// console.log(personData.indexOf({name: 'abhishek'}))
// const manuel = personData.find((person,idx,persons)=>{
//     return person.name === "mishra"
// })
// manuel.name = "akm"
// console.log(manuel,personData)

// const Maxindex = personData.findIndex((person,idx,persons)=>{
//     return person.name === "abhishek"
// })
// console.log(Maxindex)
/*---------------foreach --------------*/
// const prices = [ 10.99,5.99,3.99,6.59]
// const tax = 0.19;
// const taxAdjustPrices =[];
// // for(const price of prices){
// //     taxAdjustPrices.push(price*(1+tax))
// // }
// prices.forEach((price,idx,prices)=>{
//     const priceObj ={index: idx,taxAdjprice:price*(1+tax)}
//     taxAdjustPrices.push(priceObj)
// })
// console.log(taxAdjustPrices)
/*-------------------Map---------- --------------*/
// const prices = [ 10.99,5.99,3.99,6.59]
// const tax = 0.19;
// const taxAdjustPrices= prices.map((price,idx,prices)=>{
//     const priceObj ={index: idx,taxAdjprice:price*(1+tax)}
//     return priceObj
// })
// console.log(taxAdjustPrices)

/*-------------------Sorting/ reverse---------- --------------*/
// const prices = [ 10.99,5.99,5.99,3.99,6.59]
// const sortedPrices =prices.sort((a,b)=>{
//     if(a>b){
//         return 1
//     }else if (a==b){
//         return 0
//     }else{
//         return -1
//     }
// })
// console.log(sortedPrices.reverse());
/*-------------------filter---------- --------------*/

// const filterArray = prices.filter(price=>price > 6) //ARROW function
// console.log(filterArray)

/*-------------------Reduce---------- --------------*/

// const sum = prices.reduce((prevalue,curvalue,index,prices)=>{
//     return prevalue + curvalue
// },0)
// console.log(sum)

/*-------------------Split---------- --------------*/

// const data = 'abhishek,145.874,5855854';
// const transfomedData =data.split(",")
// transfomedData[1,2]=+transfomedData[1,2]
// console.log(transfomedData)
/*-------------------Join---------- --------------*/
// const dataName= ['abhishek','mishra']
// const joinedDataName = dataName.join()
// console.log(joinedDataName)


// const persons = [{name: 'Abhishek',age:'23'},{name: 'Abhishek mishra',age:'53'}]
// const copperson = persons.map(person=>({name: persons.name,age:age.name}));
// persons.push({name: 'Abhi'})
// console.log(persons,copperson)

/*-------------------Spread oprater------------------------*/

// const persons =['akm','abhi','mish','moh','ams']
// const copiedPersons = [...persons]
// persons.push('Mr')
// console.log(persons,copiedPersons)
// const sum = Math.min(...prices)
// console.log(sum)

// const arrObj = [{name:'abhi',age:'24'},{name:'abhishek',age:'44'},{name:'mishra',age:'80'}]
// const copiedarrObj =arrObj.map(person =>({
// name:person.name,
// age:person.age
// }));
// arrObj.push({name:'mohit',age:'78'})
// arrObj[0].age='78'
// console.log(arrObj,copiedarrObj)

// const data = ['Abhishek','Mishra','Mr','30']
// const [firstName,lastName,...otherinfo] = data;
// console.log(firstName,lastName,otherinfo)


/*-------------------Spread oprater------------------------*/
// const A = [1,27,45,45,45,78,89,96]
// function checkNumber(A,ele){
//     let srt =0;
//     let ans =-1
//     let end =A.length-1;
//     while(srt<=end){
//         let mid =Math.floor((srt+end)/2)
//         if(A[mid]==ele){
            
//             ans= mid;
//             end = mid + 1;
            
//         } else if (ele < A[mid]){
//             end = mid -1;
//         }else{
//             srt= mid +1;
//         }
//     }
//     return ans;
// }
// console.log(checkNumber(A,45))

