function solution(left, right) {
    const numArr = Array.from({ length: right - left + 1 }, (_, i) => i + left);
    let divisor = [];
    let count = 0;
    
    // 배열 안 모든 숫자의 약수 구하기
    for(let i = 0; i < numArr.length; i++) {
        divisor.push(get_each_divisor(numArr[i]));
    }
    
    // 약수 개수의 짝홀 판별
    for(let i = 0; i < divisor.length; i++) {
        if(divisor[i].length % 2 === 0) count += numArr[i];
        else count -= numArr[i];
    }
    return count;
}

// 약수 구하기 
function get_each_divisor(n) {
    let eachDivisor = [];
    for(let j = 1; j <= n; j++) {
        if(n % j === 0) eachDivisor.push(j);
    }
    return eachDivisor;
}