function solution(players, callings) {
    // 맵 객체 생성
    const hash = new Map();
    
    // 맵 객체에 선수 이름과 위치 인덱스 저장
    players.forEach((name, index) => {
        hash.set(name, index);
    })
    
    callings.forEach(name => {
        // 불린 선수의 인덱스 값을 맵 객체에서 찾음
        const playerIdx = hash.get(name);
        // 불린 선수의 앞 선수 인덱스 값 (위치 바꾸기 위함)
        const front = players[playerIdx - 1];
        
        // players배열 인덱스 위치 한 칸 당기기 (배열 구조분해할당)
        [players[playerIdx], players[playerIdx - 1]] = [players[playerIdx - 1], players[playerIdx]];
        
        // 해시맵 업데이트
        hash.set(name, hash.get(name) - 1);
        hash.set(front, hash.get(name) + 1);
    })
                     
    return players;
}


