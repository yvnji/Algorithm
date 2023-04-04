function solution(x) {
    var numArr = (x + '').split('').reduce((a, b) => a + parseInt(b), 0);
    return x % numArr === 0 ? true : false;
}