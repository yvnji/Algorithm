function solution(numbers) {
    const newNumArr = numbers.sort((a,b)=> a - b);
    const compare1 = newNumArr[0]*newNumArr[1];
    const compare2 = newNumArr[newNumArr.length - 1]*newNumArr[newNumArr.length - 2];
    if(compare1 > compare2) return compare1
    return compare2
}