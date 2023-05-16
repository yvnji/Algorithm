function solution(s) {
  const strArr = s.split(' ');
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    const strArrIndex = strArr[i];
    let newStr = [];

    for (let j = 0; j < strArrIndex.length; j++) {
      if (j % 2 === 0) {
        newStr.push(strArrIndex[j].toUpperCase());
      } else {
        newStr.push(strArrIndex[j].toLowerCase());
      }
    }

    result.push(newStr.join(''));
  }

  return result.join(' ');
}