//Calculate 10!
/*function factorial(n){
    let ans = 1
    if(n == 0 || n == 1){
        return ans;
    }else{
        for(var i = n; i >= 1; i--){
            ans = ans * i;
        }
        return ans;
    }
}
*/

function factorial(n){
    if(n == 0 || n == 1){
        return 1;
    }else{
        return n * factorial(n - 1)
    }
}
console.log(factorial(6));
