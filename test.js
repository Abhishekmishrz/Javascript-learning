// function incrementNumber(N, A) {
//     let arr=[N+1];
//     for(let i=N-1;i>=0;i--){
//         if(A[i]<9){
//             A[i]++
//             return A
//         }
//         A[i]=0;
//         arr[0]=1
//         return arr
//     }
// }
// function incrementNumber(N, A) {
//     for(let i=N-1;i>=0;i--){
//         if(A[i]<9){
//             A[i]= A[i]+1
//             // return A
//         }else{
//             A[i]=0;
//         }   
//     }
//     A.unshift(1);
//         return A
// }
// let N =3;
// let A =[9,9,9]
// const revArr=(arr,start,end)=>{
//     while(start<end){
//     [arr[start],arr[end]]=[arr[end],arr[start]]
//     start++
//     end--
//  }
// }
// function cyclicRotation(n, arr, k) {
//     k=k%n;
//     revArr(arr,0,k-1)
//     revArr(arr,k,n-1)
// }
// function cyclicRotation(n, arr, k)
// {
//   var x = arr[n-1], i;
//   for(i = n-1; i > 0; i--)
//       arr[i] = arr[i-1];
//   arr[0] = x;   
// }
 
// var arr = [1, 2, 3, 4, 5];
// var n = 5;
// console.log(cyclicRotation(arr, n,2))
