function solution(n) {
    return String(n).split('').reduce((x,y) => parseInt(x) + parseInt(y), 0);
}