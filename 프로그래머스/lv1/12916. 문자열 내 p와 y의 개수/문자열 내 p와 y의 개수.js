function solution(s){
    const upperArr = s.toUpperCase().split('');
    return upperArr.filter(s => s === "P").length === upperArr.filter(s => s === "Y").length ?
        true : false
}