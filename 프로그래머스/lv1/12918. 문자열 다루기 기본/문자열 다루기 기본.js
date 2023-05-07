function solution(s) {
  // 문자열 길이가 4 또는 6이 아닌 경우
  if (s.length !== 4 && s.length !== 6) {
    return false;
  }

  // 숫자로만 구성돼 있지 않은 경우
  for (let i = 0; i < s.length; i++) {
    if (isNaN(s[i])) {
      return false;
    }
  }

  // 위의 조건을 모두 통과한 경우
  return true;
}
