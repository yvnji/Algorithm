function solution(array) {
    var answer = 0;
    let arr = array.sort((a,b) => a-b);
    let arrLoca = Math.floor(arr.length/2);
    answer = arr[arrLoca];
    return answer;
}