function solution(absolutes, signs) {
    const numArr = [];
    for(let i = 0; i < signs.length; i++) {
        if(signs[i] === false) numArr.push(absolutes[i] * -1);
        else numArr.push(absolutes[i]);
    }
    return numArr.reduce((a, b) => a + b);
}