function solution(money) {
    var answer = [];
    const howMany = Math.floor(money/5500);
    const howMuch = money%5500;
    answer.push(howMany, howMuch);
    return answer;
}