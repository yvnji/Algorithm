function solution(hp) {
    const ant1 = 5;
    const ant2 = 3;
    const ant3 = 1;
    let count = 0;
    
    count += Math.floor(hp/ant1);
    hp = hp%ant1;    
    count += Math.floor(hp/ant2);
    hp = hp%ant2;    
    count += Math.floor(hp/ant3);
    hp = hp%ant3;
    
    return count;
}