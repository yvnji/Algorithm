function solution(cipher, code) {
    var answer = '';
    
    for(let i = code; i <= cipher.length; i++) {
        if(i%code === 0) {
            answer += cipher[i-1];  
        }
    }
    
    return answer;
}