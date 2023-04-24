function solution(price, money, count) {
    let total = price * count * (count + 1) / 2;
    return total < money ? 0 : total - money;
}