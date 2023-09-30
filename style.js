function factorialize(num) {
    var array = [];
    var product =1;
    for(let i = 1; i<=num;i++) {
   array.push(i); 
  //  console.log(array)
  for (let j=0;  j < array.length; j++) {
    product = product * array[j];
  }
  // return product;
   }
  }

  console.log(factorialize(5));