function solution(num_list) {
    var even = 0;
    var odd = 0;
    for(n of num_list) {
        if(n%2 === 0) {
            even += 1;
        } else {
            odd += 1;
        }
    }
    return [even, odd];
}