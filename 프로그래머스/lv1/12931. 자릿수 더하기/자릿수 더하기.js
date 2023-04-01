function solution(n){
    var numStr = n + '';
    if(n>9) {
        return numStr.split('').reduce((a, b)=> parseInt(a) + parseInt(b))      
    } else {
        return n
    }
}