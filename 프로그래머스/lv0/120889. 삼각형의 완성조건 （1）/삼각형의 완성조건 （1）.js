function solution(sides) {
    const sortArr = sides.sort((a,b) => a-b);
    if(sortArr[0] + sortArr[1] > sortArr[2]) return 1
        return 2
}