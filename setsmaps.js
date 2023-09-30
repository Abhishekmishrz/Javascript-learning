// const ids = new Set([1,2,3]);
// ids.add(4)

// if(ids.has(4)){
//     ids.delete(4)
// }
// for(const entry of ids.entries()){
//     console.log(entry[0])
// }
// console.log(ids)





// function checkMagicSquare(n, matrix) {
//     let reqSum =0;
//     for(let i=0;i<n;i++){
//         reqSum+= matrix[0][i]
//     }
//     for(let i=1;i<n;i++){
//         let sum =0;
//         for(let j=0;j<n;j++){
//             sum+= matrix[i][j]
//         }
//         if(sum!=reqSum){
//             return false
//         }
//     }
//    for(let i=0;i<n;i++){
//         let sum =0;
//         for(let j=0;j<n;j++){
//             sum+= matrix[j][i]
//         }
//         if(sum!=reqSum){
//             return false
//         }
//     }
//     let lefDigonal =0;
//     let rightDigonal=0;
//     for(let i=0;i<n;i++){
//         lefDigonal+=matrix[i][i];
//         rightDigonal+= matrix[i][n-1-i]
//     }
//     if(lefDigonal!==reqSum|| rightDigonal!==reqSum){
//         return false
//     }


//     return true;
// }
// console.log(checkMagicSquare(3,[[4, 9 ,2,],[3, 5, 7],[8 ,1 ,6]]))

function additionOfMatrix(matrix1, matrix2) {
    var newMtrix=[[],[],[]]
    for(let i=0;i<matrix1.length;i++){
        for(let j=0;j<matrix2.length;j++){
            newMtrix[i][j]=matrix1[i][j]+matrix2[i][j]
        }
    }
    return newMtrix;
}
console.log(additionOfMatrix([[1,2,3],[2,4,4]], [[2,1,3],[6,5,4]]))