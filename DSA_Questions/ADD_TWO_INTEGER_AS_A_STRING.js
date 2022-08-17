function AddTwoString(str1,str2){
    let n = str1.length
    let m = str2.length
    let i= n-1
    let j= m-1
    let ans=""
    let carry=0;
    while(i>=0 && j>=0){
        // let carry =0;
        let sum = parseInt(str1[i])+parseInt(str2[j]) + carry
        let reminder = sum %10
        ans+=reminder;
        carry = Math.floor( sum/10)
        i--
        j--
    }
    while(i>=0){
        // let carry =0;
        let sum = parseInt(str1[i]) +carry
        let reminder = sum %10
        ans+=reminder;
        carry = Math.floor( sum /10)
        i-- 
    }
    while(j>=0){
        // let carry =0;
        let sum = parseInt(str2[j])+ carry
        let reminder =sum%10
        ans+=reminder;
        carry = Math.floor(sum/10)
        j--
    }
    if(carry){
        ans+=carry;
    }
    return ans.split('').reverse('').join(" ");
}

const result = AddTwoString("1024","23456")
console.log(result)