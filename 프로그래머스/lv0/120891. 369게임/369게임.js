function solution(order) {
    var answer = 0;
    const num = (order + '').split('').map(n=>parseInt(n));
    for (let i of num){
        if(i % 3 === 0 && i !== 0) answer++;
    }
    return answer;
}