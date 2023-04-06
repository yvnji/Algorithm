function solution(s) {
    const halfLeng = s.length / 2;
    if(s.length % 2 === 0) {
        return s.slice(halfLeng - 1, halfLeng + 1);
    } else {
        return s[Math.floor(halfLeng)];
    }
}