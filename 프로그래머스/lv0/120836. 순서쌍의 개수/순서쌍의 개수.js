function solution(n) {
    var answer = 0;
    var num = 1;
    while(num <= n) {
        if(n % num === 0) {
            answer++;
        }
        num++;
    }
    return answer;
}