function solution(n, t) {
    var increase = 1;
    while(increase <= t) {
        n = n*2;
        increase++;
    }
    return n;
}