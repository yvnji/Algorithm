function solution(arr, divisor) {
    let filterArr = arr.filter(num => num % divisor === 0);
    return filterArr.length === 0 ? [-1] : filterArr.sort((a, b) => a - b);
}