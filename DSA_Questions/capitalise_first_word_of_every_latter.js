function capitalise(paragraph) {
    let a = paragraph.split(' ')
    let b = []
    for(let i=0;i<a.length;i++){
         b[i]= a[i][0].toUpperCase()+ a[i].substr(1)
    }
    let c= b.join(' ')
    return c
  }
  let paragraph= "the quick Brown fox jumps over The lazy dog."
  console.log(capitalise(paragraph))




  function isOperator(c){
    return c=='*' || c=='-' || c=='+';
}

function performOperation(a,b,sign){

    if(sign==='-')
    return a-b;

    if(sign==='+')
    return a+ b;

    return a*b;
}


// TODO: Implement this method
function postfixExpression(exp) {

    exp=exp.split(' ');

    const stack=[];

    for(let i=0;i<exp.length;i++){

        if(isOperator(exp[i])){
            const b=stack[stack.length-1];
            stack.pop();
            const a=stack[stack.length-1];
            stack.pop();

            const ans=performOperation(a,b,exp[i]);
            stack.push(ans);

        }else{
            stack.push(parseInt(exp[i]));
        }
    }

    return stack[stack.length-1];
}
