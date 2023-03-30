function solution(box, n) {
    return box.map(num => Math.floor(num/n)).reduce((a, b) => a*b);
}