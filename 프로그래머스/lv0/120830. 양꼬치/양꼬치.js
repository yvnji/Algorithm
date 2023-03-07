function solution(n, k) {
    var answer = 0;
    const lamb = 12000;
    const drink = 2000;
    if(n>=10){
        answer += n*lamb + (k - Math.floor(n/10))*drink;
    }else{
        answer += n*lamb + k*drink;
    }
    return answer;
}