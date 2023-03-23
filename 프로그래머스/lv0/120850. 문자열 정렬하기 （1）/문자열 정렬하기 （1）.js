function solution(my_string) {
    var answer = [];
    for(let i in my_string){
        if(parseInt(my_string[i]) == my_string[i]) answer.push(parseInt(my_string[i]))
    }

    return answer.sort((a, b) => a - b);
}