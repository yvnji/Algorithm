function solution(n) {
    var answer = [];
    for(let i = (n + '').length - 1; i >= 0; i--) {
        answer.push((n + '')[i]);
    }
    return answer.map(str => parseInt(str));
}