function solution(n){
    return (n+"").split("").reduce((a, b) => a + parseInt(b), 0)
}