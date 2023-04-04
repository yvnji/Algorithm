function solution(a, b) {
    let answer = 0;
    const numSort = [a, b].sort((a, b) => a - b);
    for(let i = numSort[0]; i <= numSort[1]; i++) {
        answer += i;
    }
    return answer;
}