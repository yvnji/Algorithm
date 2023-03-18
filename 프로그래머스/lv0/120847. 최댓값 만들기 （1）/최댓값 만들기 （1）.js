function solution(numbers) {
    const sortArr = numbers.sort((a,b)=>a-b);
    return sortArr[sortArr.length-1]*sortArr[sortArr.length-2];
}