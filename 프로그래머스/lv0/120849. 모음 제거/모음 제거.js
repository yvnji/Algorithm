function solution(my_string) {
    const eng = ["a", "e", "i", "o", "u"];
    const newArr = [];
    for(let i of my_string){
        if(!eng.includes(i)) newArr.push(i);
    }
    return newArr.join("");
}